import * as vscode from "vscode";

export type ViewColumnArrayType = (keyof typeof vscode.ViewColumn)[]

export type UniqueTabHolderWithCountType = {
    docName: string,
    tab: vscode.Tab,
}