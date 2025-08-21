import * as vscode from 'vscode';

export default abstract class VscodeContext {

    protected readonly vscode: typeof vscode = vscode;
    protected readonly disposable = vscode.Disposable;
    
    public constructor()
    {
    }

}