import CommandWrapper from "./CommandWrapper";

export default class TestMsg extends CommandWrapper {

    public constructor()
    {
        super();
    }

    public run()
    {
        this.vscode.window.showInformationMessage('Testing');
    }
    
}