import { Command } from "./base.command";

export interface CommandHandler {
    handle(command: Command): any;
}