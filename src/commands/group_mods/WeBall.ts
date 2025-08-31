import { TextDocument, ViewColumn } from "vscode";
import { ThreeColGroupSplitEnum } from "../../enums/GroupSplitEnums";
import { ViewColumnArrayType } from "../../types/commandTypes";
import GroupModifications from "./GroupModifications";

export default class WeBall extends GroupModifications {

    protected amount?: ThreeColGroupSplitEnum;
    
    public constructor(con)
    {
        super(con);
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

        let asd4 = await this.createBlankDocument();
        await this.showDocument(asd4);

    }
    
}