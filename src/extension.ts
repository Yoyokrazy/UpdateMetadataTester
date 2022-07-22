// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('updatemetadatatester.injectMetadata', () => {
		// FIXME: uri code not working
		const uri = vscode.Uri.file('C:/Users/t-mlively/Documents/_WORK/ext_testing/single_cell.ipynb'); 
		const edit = new vscode.WorkspaceEdit();
		const cellMetadataEdit = vscode.NotebookEdit.updateCellMetadata(0, { extraCellMetadata: true });
		edit.set(uri, [cellMetadataEdit]);
		vscode.workspace.applyEdit(edit);
		vscode.window.showInformationMessage('metadata update complete');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}


//vscode 12937 -> 12969 -> 13011/13024 -> 12925
