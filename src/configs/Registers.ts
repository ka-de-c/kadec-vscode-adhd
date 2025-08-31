import Baller from '../commands/group_mods/Baller';
import TestMsg from '../commands/TestMsg';
import WeBall from '../commands/group_mods/WeBall';
import RegisterFacade from '../system/RegisterFacade';
import * as vscode from 'vscode';

export default class Registers
{
    protected register: RegisterFacade;
    protected context: vscode.ExtensionContext;
    
    public constructor(context: vscode.ExtensionContext)
    {
        this.register = new RegisterFacade(context);
        this.context = context;
    }

    public registers()
    {
        this.register.registerCommand('kadec-adhd.testMsg', () => {
            this.register.callCommand(TestMsg);
        });

        this.register.registerCommand('kadec-adhd.we-ball', () => {
            this.register.callCommand(WeBall);
        });

        this.register.registerCommand('kadec-adhd.baller', () => {
            this.register.callCommand(Baller);
        });
    }
    
}