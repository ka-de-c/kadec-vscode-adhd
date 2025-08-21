import * as vscode from 'vscode';
import CommandInterface from './types/interfaces/CommandInterface';
import { CommandConstructor } from './types/system-global';

export default abstract class RegisterFacade {
    
    protected context: vscode.ExtensionContext;
    
    public constructor(context: vscode.ExtensionContext)
    {
        this.context = context;
    }

    protected callCommand<T extends CommandInterface>(commandClass: CommandConstructor<T>)
    {
        new commandClass().run();
    }
    
    protected registerCommand(
        command: string,
        callback: (...args: any[]) => any,
        thisArg?: any
    ): vscode.Disposable
    {
        const disposable = vscode.commands.registerCommand(command, callback, thisArg);

        this.context.subscriptions.push(disposable);

        return disposable;
    }
    
}
