import { ExtensionContext } from "vscode";
import CommandInterface from "./interfaces/CommandInterface";

type CommandConstructor<T extends CommandInterface> = new (context: ExtensionContext) => T;