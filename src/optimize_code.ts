import * as vscode from 'vscode';

export async function optimizeDartCode(): Promise<'optimized' | 'no_optimization_needed' | 'failed'> {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== 'dart') {
        return 'no_optimization_needed';
    }

    const document = editor.document;
    const diagnostics = vscode.languages.getDiagnostics(document.uri);

    const edits: vscode.TextEdit[] = [];

    diagnostics.forEach((diagnostic) => {
        const { message, range } = diagnostic;
        if (message.includes("Use 'const' with the constructor to improve performance")) {
            const text = document.getText(range);
            const newText = addConstKeyword(text);

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
            return 'optimized';
        } else {
            return 'failed';
        }
    } else {
        return 'no_optimization_needed';
    }
}

function addConstKeyword(text: string): string {
    const pattern = /(\w+(\.\w+)?\s*\()/;
    const newText = text.replace(pattern, 'const $1');
    return newText;
}
