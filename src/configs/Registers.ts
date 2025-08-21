import TestMsg from '../commands/TestMsg';
import RegisterFacade from '../system/RegisterFacade';
import * as vscode from 'vscode';

export default class Registers extends RegisterFacade
{

    public constructor(context: vscode.ExtensionContext)
    {
        super(context);
    }

    public registers()
    {
        this.registerCommand('kadec-adhd.testMsg', () => {
            this.callCommand(TestMsg);
        });
    }
    
}