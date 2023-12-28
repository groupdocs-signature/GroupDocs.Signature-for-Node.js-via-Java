const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function searchForTextAdvanced() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF_SIGNED;

    const signature = new signatureLib.Signature(filePath);
    const pagesSetup = new signatureLib.PagesSetup();
    pagesSetup.setFirstPage(true);
    pagesSetup.setLastPage(true);
    pagesSetup.setOddPages(false);
    pagesSetup.setEvenPages(false);
    const options = new signatureLib.TextSearchOptions();
    options.setAllPages(false);
    options.setPageNumber(1);
    options.setMatchType(signatureLib.TextMatchType.Exact);
    options.setText("John Smith");

    // search for text signatures in document
    const signatures = signature.search(signatureLib.TextSignature.class, options).toArray();
    console.log("\nSource document contains following text signature(s).");
    // enumerate all signatures for output
    // for-each to while statements conversion
    let i = 0;
    while (i < signatures.length) {
        const sign = signatures[i];

        if (sign != null) {
            console.log(`Found Text signature at page ${sign.getPageNumber()} with type [${sign.getSignatureImplementation()}] and text '${sign.getText()}'.`);
            console.log(`Location at ${sign.getLeft()}-${sign.getTop()}. Size is ${sign.getWidth()}x${sign.getHeight()}.`);
        }

        i++;
    }
}

module.exports = searchForTextAdvanced