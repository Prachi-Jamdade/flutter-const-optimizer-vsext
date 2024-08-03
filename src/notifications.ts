import * as vscode from 'vscode';

export function showOptimizationSuccess(): void {
    vscode.window.showInformationMessage('Dart code optimized with `const` keyword.');
}

export function showOptimizationFailure(): void {
    vscode.window.showErrorMessage('Failed to apply edit for Dart code optimization.');
}

export function showNoOptimizationNeeded(): void {
    vscode.window.showInformationMessage('No optimization needed for Dart code.');
}
