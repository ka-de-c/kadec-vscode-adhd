import * as vscode from 'vscode';

export default abstract class VscodeContext {

    protected readonly vscode: typeof vscode = vscode;
    
    protected readonly disposable = vscode.Disposable;
    
    public constructor()
    {
    }

    protected getDocumentByName(name: string): vscode.TextDocument | undefined {
        return vscode.workspace.textDocuments.find(doc => doc.fileName.endsWith(name));
    }


}