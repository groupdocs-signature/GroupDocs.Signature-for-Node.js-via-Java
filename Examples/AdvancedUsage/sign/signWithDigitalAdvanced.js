const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithDigitalAdvanced() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_WORDPROCESSING;
    const fileName = path.basename(filePath);
    const imagePath = Constants.ImageHandwrite;
    const certificatePath = Constants.CertificatePfx;

    const outputFilePath = path.join(Constants.OutputPath, 'SignWithDigital', fileName);

    const signature = new signatureLib.Signature(filePath);

    const options = new signatureLib.DigitalSignOptions(certificatePath);

    // certificate password
    options.setPassword('1234567890');
    // digital certificate details
    options.setReason('Sign');
    options.setContact('JohnSmith');
    options.setLocation('Office1');

    // image as digital certificate appearance on document pages
    options.setImageFilePath(imagePath);
    //
    options.setAllPages(true);
    options.setWidth(80);
    options.setHeight(60);
    options.setVerticalAlignment(signatureLib.VerticalAlignment.Bottom);
    options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Right);

    const padding = new signatureLib.Padding();
    padding.setBottom(10);
    padding.setRight(10);
    options.setMargin(padding);

    const signResult = signature.sign(outputFilePath, options);
    // analyzing result
    console.log('List of newly created signatures:');
    let number = 1;
    for (const temp of signResult.getSucceeded().toArray()) {
        console.log(`Signature #${number++}: Type: ${temp.getSignatureType()} Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    }
    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}
module.exports = signWithDigitalAdvanced