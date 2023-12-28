const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function verifyQRCodeAdvanced() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_SIGNED_MULTI;

    const signature = new signatureLib.Signature(filePath);
    // create QRCode option with predefined QRCode text
    const options = new signatureLib.QrCodeVerifyOptions();

    // specify if all pages should be verified
    options.setAllPages(false);
    const pagesSetup = new signatureLib.PagesSetup();
    pagesSetup.setFirstPage(true);
    options.setPagesSetup(pagesSetup);
    // specify text pattern
    options.setText('John');
    // specify verification text pattern
    options.setMatchType(signatureLib.TextMatchType.Contains);

    // sign document to file
    const result = signature.verify(options);
    if (result.isValid()) {
        console.log('\nDocument was verified successfully!');
    } else {
        console.log('\nDocument failed verification process.');
    }
}

module.exports = verifyQRCodeAdvanced