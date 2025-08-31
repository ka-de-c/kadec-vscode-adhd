import CommandWrapper from "./CommandWrapper";

export default class TestMsg extends CommandWrapper {

    public constructor(con)
    {
        super(con);
    }

    public run()
    {
        this.vscode.window.showInformationMessage('Testing');
    }
    
}