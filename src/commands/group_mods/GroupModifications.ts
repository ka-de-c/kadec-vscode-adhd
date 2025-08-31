import { Tab, TextDocument } from "vscode";
import CommandWrapper from "../CommandWrapper";

export default abstract class GroupModifications extends CommandWrapper {

    constructor(con)
    {
        super(con);
    }

    protected async createBlankDocument(content: string = ""): Promise<TextDocument>
    {
        return await this.vscode.workspace.openTextDocument({
            content: content,
        });
    }

    protected async openDocument(
        doc: TextDocument,
        column: keyof typeof this.vscode.ViewColumn
    ): Promise<void>
    {
        const colValue = this.vscode.ViewColumn[column];
        await this.vscode.window.showTextDocument(doc, colValue);
    }

    protected async showDocument(doc: TextDocument): Promise<void>
    {
        await this.vscode.window.showTextDocument(doc, {
            preserveFocus: false,
            preview: false,
        });
    }

    protected async splitDown(): Promise<void>
    {
        await this.vscode.commands.executeCommand('workbench.action.splitEditorDown');
    }

    protected getAllTabs(): Tab[]
    {
        return this.vscode.window.tabGroups.all.flatMap(g => g.tabs);
    }

    /**
     * @param tab - Tab to close
     * @param preserveFocus - Default value is false
     */
    protected async closeTab(tab: Tab | readonly Tab[], preserveFocus?: boolean)
    {
        if (preserveFocus === null || preserveFocus === undefined) {
            preserveFocus = false;
        }
        
        await this.vscode.window.tabGroups.close(tab, preserveFocus);
    }

}