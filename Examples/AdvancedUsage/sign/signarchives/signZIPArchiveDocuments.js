const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signZIPArchiveDocuments() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Advanced Usage] # SignZIPArchiveDocuments : Sign ZIP archive document with various signature options\n');

    // The path to the documents directory.
    const filePath = Constants.SAMPLE_ZIP;
    const fileName = path.basename(filePath);
    const outputFilePath = path.join(Constants.OutputPath, 'SignZIPArchiveDocuments', fileName);

    const signature = new signatureLib.Signature(filePath);

    // create list of signature options
    const bcOptions1 = new signatureLib.BarcodeSignOptions("12345678", signatureLib.BarcodeTypes.Code128);
    bcOptions1.setLeft(100);
    bcOptions1.setTop(100);

    const qrOptions2 = new signatureLib.QrCodeSignOptions("12345678", signatureLib.QrCodeTypes.QR);
    qrOptions2.setLeft(400);
    qrOptions2.setTop(400);

    const listOptions = java.newInstanceSync("java.util.ArrayList")
    listOptions.add(bcOptions1);
    listOptions.add(qrOptions2);
    // const listOptions = [bcOptions1, qrOptions2];

    // sign document to file
    const signResult = signature.sign(outputFilePath, listOptions);

    // check the output
    console.log(`\nArchive signed successfully with ${signResult.getSucceeded().size()} documents(s).\nFile saved at ${outputFilePath}.`);

    console.log("\nList of successfully signed documents:");
    let number = 1;
    for (const o of signResult.getSucceeded().toArray()) {
        const document = o;
        console.log(`Document #${number++}: ${document.getFileName()}. Processed: ${document.getProcessingTime()}, mls`);
    }

    if (signResult.getFailed().size() > 0) {
        console.log("\nList of failed documents:");
        number = 1;
        for (const o of signResult.getFailed().toArray()) {
            const document = o;
            console.log(`Document #${number++}: ${document.getFileName()}. Processed: ${document.getProcessingTime()}, mls`);
        }
    }
}


module.exports = signZIPArchiveDocuments