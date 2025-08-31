import { ExtensionContext } from "vscode";
import CommandInterface from "../system/types/interfaces/CommandInterface";
import VscodeContext from "../system/VscodeContext";

export default abstract class CommandWrapper extends VscodeContext implements CommandInterface {

    constructor(context: ExtensionContext) {};
    
    abstract run(): void;

}