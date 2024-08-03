import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const optimizeCodeCommand = vscode.commands.registerCommand('flutter-const-optimizer.optimizeCode', async () => {
        vscode.window.showInformationMessage('Optimizing Dart code for better performance...');
        await optimizeDartCode();
    });

    context.subscriptions.push(optimizeCodeCommand);

    const disposable = vscode.workspace.onWillSaveTextDocument(async (event) => {
        if (event.document.languageId === 'dart') {
            await event.waitUntil(optimizeDartCode());
        }
    });

    context.subscriptions.push(disposable);
}

async function optimizeDartCode(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== 'dart') {
        return;
    }

    const document = editor.document;
    const diagnostics = vscode.languages.getDiagnostics(document.uri);

    const edits: vscode.TextEdit[] = [];

    diagnostics.forEach((diagnostic, index) => {
        const { message, range, severity } = diagnostic;
        if ( message.includes("Use 'const' with the constructor to improve performance")) {
            const text = document.getText(range);
            vscode.window.showInformationMessage(`Original text: ${text}`);

            const newText = addConstKeyword(text);

            vscode.window.showInformationMessage(`New text: ${newText}`);

            if (newText !== text) {
                edits.push(vscode.TextEdit.replace(range, newText));
            }
        }
    });

    if (edits.length > 0) {
        const edit = new vscode.WorkspaceEdit();
        edit.set(document.uri, edits);

        const success = await vscode.workspace.applyEdit(edit);
        if (success) {
            await document.save();
            vscode.window.showInformationMessage('Dart code optimized with `const` keyword.');
        } else {
            vscode.window.showErrorMessage('Failed to apply edit for Dart code optimization.');
        }
    } else {
        vscode.window.showInformationMessage('No optimization needed for Dart code.');
    }
}

function addConstKeyword(text: string): string {
    // Pattern to match constructors and static methods
    const pattern = /(\w+(\.\w+)?\s*\()/;

    // Replace the matched pattern with `const` keyword
    const newText = text.replace(pattern, 'const $1');

    return newText;
}

export function deactivate() {
    vscode.window.showInformationMessage('Flutter Const Optimizer extension deactivated.');
}
