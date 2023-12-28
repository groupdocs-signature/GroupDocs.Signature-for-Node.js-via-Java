const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function saveDocumentWithPassword() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const fileName = path.basename(filePath);
    const outputFilePath = path.join(Constants.OutputPath, 'SaveSignedWithPassword', fileName);

    const signature = new signatureLib.Signature(filePath);

    // create QRCode option with predefined QRCode text
    const signOptions = new signatureLib.QrCodeSignOptions('JohnSmith');
    signOptions.setEncodeType(signatureLib.QrCodeTypes.QR);
    signOptions.setLeft(100);
    signOptions.setTop(100);

    const saveOptions = new signatureLib.SaveOptions();
    saveOptions.setPassword('1234567890');
    saveOptions.setUseOriginalPassword(false);

    // sign document to file
    signature.sign(outputFilePath, signOptions, saveOptions);

    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = saveDocumentWithPassword