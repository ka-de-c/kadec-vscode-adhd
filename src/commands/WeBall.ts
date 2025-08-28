import { TextDocument, ViewColumn } from "vscode";
import { ThreeColGroupSplitEnum } from "../enums/GroupSplitEnums";
import CommandWrapper from "./CommandWrapper";
import { ViewColumnArrayType } from "../types/commandTypes";

export default class WeBall extends CommandWrapper {

    protected amount?: ThreeColGroupSplitEnum;
    
    public constructor()
    {
        super();
    }

    public async run()
    {
        this.amount = ThreeColGroupSplitEnum.TwoRow;
        
        this.openGroupsMain();

        // await this.vscode.window.showTextDocument(doc, this.vscode.ViewColumn.Beside);
        // await this.vscode.window.showTextDocument(doc, this.vscode.ViewColumn.Beside);

    }

    private async openGroupsMain()
    {
        let columns: ViewColumnArrayType;
        
        switch (this.amount) {

            case ThreeColGroupSplitEnum.OneRow:
                columns = ["One", "Two", "Three"];
                this.openGroups(columns);
                break;
                
            case ThreeColGroupSplitEnum.TwoRow:
                columns = ["One", "Two", "Three", "Four", "Five", "Six"];
                this.openGroups(columns);
                break;
        
            default:
                break;
        }
    }

    private async openGroups(columns: ViewColumnArrayType)
    {
        if (!this.amount) {
            this.vscode.window.showErrorMessage('Amount not set!');
            return;
        }

        let asd1 = await this.createBlankDocument();
        await this.openDocument(asd1, "One");

        let asd2 = await this.createBlankDocument();
        await this.openDocument(asd2, "Two");

        let asd3 = await this.createBlankDocument();
        await this.openDocument(asd3, "Three");

        await this.showDocument(asd1);
        await this.splitDown();

        // const activeEditor = this.vscode.window.activeTextEditor;

        let asd4 = await this.createBlankDocument();
        await this.showDocument(asd4);

        let activeEditors = this.vscode.window.visibleTextEditors;

        console.log(activeEditors);
        
        const uris = this.vscode.window.visibleTextEditors.map(e => e.document.uri.toString());
        const anyDuplicated = new Set(uris).size < uris.length;

        console.log(anyDuplicated);
        
        // activeEditors.forEach((ae) => {
        //     console.log(ae.document.fileName);
        //     console.log(ae.document);
        // });
    }

    private async createBlankDocument(content: string = ""): Promise<TextDocument>
    {
        return await this.vscode.workspace.openTextDocument({
            content: content,
        });
    }

    private async openDocument(
        doc: TextDocument,
        column: keyof typeof this.vscode.ViewColumn
    ): Promise<void>
    {
        const colValue = this.vscode.ViewColumn[column];
        await this.vscode.window.showTextDocument(doc, colValue);
    }

    private async showDocument(doc: TextDocument): Promise<void>
    {
        await this.vscode.window.showTextDocument(doc, {
            preserveFocus: false,
            preview: false,
        });
    }

    private async splitDown(): Promise<void>
    {
        await this.vscode.commands.executeCommand('workbench.action.splitEditorDown');
    }
    
}