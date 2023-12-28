const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function verifyDigitalAdvanced() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF_SIGNED_DIGITAL;

    const signature = new signatureLib.Signature(filePath);
    const options = new signatureLib.DigitalVerifyOptions();
    options.setComments('Approved');

    // verify document signatures
    const result = signature.verify(options);
    if (result.isValid()) {
        console.log('\nDocument was verified successfully!');
    } else {
        console.log('\nDocument failed verification process.');
    }
}

module.exports = verifyDigitalAdvanced