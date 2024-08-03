import * as vscode from 'vscode';
import { handleOptimizeCode } from './utils';

export function activate(context: vscode.ExtensionContext) {
    const optimizeCodeCommand = vscode.commands.registerCommand('flutter-const-optimizer.optimizeCode', async () => {
        await handleOptimizeCode();
    });

    context.subscriptions.push(optimizeCodeCommand);

    const disposable = vscode.workspace.onWillSaveTextDocument(async (event) => {
        if (event.document.languageId === 'dart') {
            event.waitUntil(handleOptimizeCode());
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    vscode.window.showInformationMessage('Flutter Const Optimizer extension deactivated.');
}
