import CommandInterface from "./interfaces/CommandInterface";

type CommandConstructor<T extends CommandInterface> = new () => T;