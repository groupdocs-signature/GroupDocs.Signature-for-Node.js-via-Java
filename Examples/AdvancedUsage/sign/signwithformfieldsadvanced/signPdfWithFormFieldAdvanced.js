const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signPdfWithFormFieldAdvanced() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Advanced Usage] # SignPdfWithFormFieldAdvanced : Sign pdf document with form-field signature applying specific options\n');

    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const fileName = path.basename(filePath);

    const outputFilePath = path.join(Constants.OutputPath, 'SignPdfWithFormFieldAdvanced', fileName);

    const signature = new signatureLib.Signature(filePath);

    // Instantiate text form field signature
    const textSignature = new signatureLib.TextFormFieldSignature('tbData1', 'Value-1');
    // Instantiate options based on text form field signature
    const optionsTextFF = new signatureLib.FormFieldSignOptions(textSignature);
    optionsTextFF.setHorizontalAlignment(signatureLib.HorizontalAlignment.Left);
    optionsTextFF.setVerticalAlignment(signatureLib.VerticalAlignment.Top);
    optionsTextFF.setMargin(new signatureLib.Padding(10, 20, 0, 0));
    optionsTextFF.setHeight(10);
    optionsTextFF.setWidth(100);

    // Instantiate checkbox form field signature
    const chbSignature = new signatureLib.CheckboxFormFieldSignature('chbData1', true);
    // Instantiate options based on checkbox form field signature
    const optionsTextCHB = new signatureLib.FormFieldSignOptions(chbSignature);
    optionsTextCHB.setHorizontalAlignment(signatureLib.HorizontalAlignment.Center);
    optionsTextCHB.setVerticalAlignment(signatureLib.VerticalAlignment.Top);
    optionsTextCHB.setMargin(new signatureLib.Padding(0, 0, 0, 0));
    optionsTextCHB.setHeight(10);
    optionsTextCHB.setWidth(100);

    // Instantiate digital form field signature
    const digSignature = new signatureLib.DigitalFormFieldSignature('dgData1');
    // Instantiate options based on digital form field signature
    const optionsTextDIG = new signatureLib.FormFieldSignOptions(digSignature);
    optionsTextDIG.setHorizontalAlignment(signatureLib.HorizontalAlignment.Right);
    optionsTextDIG.setVerticalAlignment(signatureLib.VerticalAlignment.Center);
    optionsTextDIG.setMargin(new signatureLib.Padding(0, 50, 0, 0));
    optionsTextDIG.setHeight(50);
    optionsTextDIG.setWidth(50);

    const listOptions = java.newInstanceSync("java.util.ArrayList")
    listOptions.add(optionsTextFF);
    listOptions.add(optionsTextCHB);
    listOptions.add(optionsTextDIG);

    // Sign document to file
    const signResult = signature.sign(outputFilePath, listOptions);

    console.log(`\nSource document signed successfully with ${signResult.getSucceeded().size()} signature(s).\nFile saved at ${outputFilePath}.`);

    console.log('\nList of newly created signatures:');
    let number = 1;
    for (const temp of signResult.getSucceeded().toArray()) {
        console.log(`Signature #${number++}: Type: ${temp.getSignatureType()} Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    }
}

module.exports = signPdfWithFormFieldAdvanced