import { UniqueTabHolderWithCountType as UniqueTabHolderType } from "../../types/commandTypes";
import GroupModifications from "./GroupModifications";

export default class Baller extends GroupModifications {

    public run(): void
    {
        const activeEditors = this.vscode.window.visibleTextEditors;
        const allTabs = this.getAllTabs();

        let tabsHolder: UniqueTabHolderType[] = [];

        console.log("all tabs: ", allTabs);
        
        if (!activeEditors) {
            this.vscode.window.showInformationMessage('No active editors.');
            return;
        }
        
        console.log("active editors: ", activeEditors);

        allTabs.forEach((tab) => {
            const existing = tabsHolder.find(th => th.docName === tab.label);

            console.log("existing: ", existing);

            if (existing) {
                console.log("closing!");
                this.closeTab(tab);
                return;
            }
            
            tabsHolder.push({
                docName: tab.label,
                tab: tab,
            });
        });


        /* activeEditors.forEach((activeEditor, index) => {
            const targetUriStr = activeEditor.document.fileName;

            console.log("target: ", targetUriStr);

            if (index === 0) {
                let getDoc = this.getDocumentByName(targetUriStr);

                if (!getDoc) {
                    return;
                }
                
                console.log("da doc: ", getDoc);
            }
        }); */


        
    }
    
}