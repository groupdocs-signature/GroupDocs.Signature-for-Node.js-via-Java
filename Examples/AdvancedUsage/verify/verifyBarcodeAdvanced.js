const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function verifyBarcodeAdvanced() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_SIGNED_MULTI;

    const signature = new signatureLib.Signature(filePath);
    const options = new signatureLib.BarcodeVerifyOptions();
    options.setAllPages(true); // this value is set by default
    options.setText("12345");
    options.setMatchType(signatureLib.TextMatchType.Contains);

    // verify document signatures
    const result = signature.verify(options);
    if (result.isValid()) {
        console.log("\nDocument was verified successfully!");
        console.log("\nList of Succeeded signatures:");
        for (const temp of result.getSucceeded().toArray()) {
            console.log(` -#${temp.getSignatureId()}-${temp.getSignatureType()} at: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
        }
    } else {
        console.log("\nDocument failed verification process.");
    }
}


module.exports = verifyBarcodeAdvanced