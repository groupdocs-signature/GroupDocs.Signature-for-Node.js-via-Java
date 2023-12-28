const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signPdfWithFormFieldAdvancedCombobox() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Advanced Usage] # SignPdfWithFormFieldAdvancedCombobox : Sign pdf document with form-field signature applying specific options\n');

    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const fileName = path.basename(filePath);

    const outputFilePath = path.join(Constants.OutputPath, 'SignPdfWithFormFieldAdvancedCombobox', fileName);

    const signature = new signatureLib.Signature(filePath);

    // Instantiate combo box form field signature
    const items = java.newInstanceSync("java.util.ArrayList")
    items.add("Red");
    items.add("Green");
    items.add("Blue");
    const combobox = new signatureLib.ComboboxFormFieldSignature('combo1', items, 'Blue');

    // Instantiate options based on combo box form field signature
    const options = new signatureLib.FormFieldSignOptions(combobox);
    options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Right);
    options.setVerticalAlignment(signatureLib.VerticalAlignment.Top);
    options.setMargin(new signatureLib.Padding(0, 0, 0, 0));
    options.setHeight(100);
    options.setWidth(300);

    // Sign document to file
    const signResult = signature.sign(outputFilePath, options);

    console.log(`\nSource document signed successfully with ${signResult.getSucceeded().size()} signature(s).\nFile saved at ${outputFilePath}.`);

    console.log('\nList of newly created signatures:');
    let number = 1;
    for (const temp of signResult.getSucceeded().toArray()) {
        console.log(`Signature #${number++}: Type: ${temp.getSignatureType()} Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    }
}

module.exports = signPdfWithFormFieldAdvancedCombobox