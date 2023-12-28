const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function searchForBarcodeAdvanced() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_SIGNED_MULTI;

    const signature = new signatureLib.Signature(filePath);
    const options = new signatureLib.BarcodeSearchOptions();
    options.setAllPages(false); // this value is set by default
    // single page number
    options.setPageNumber(1);
    // setup extended search in pages setup
    const pagesSetup = new signatureLib.PagesSetup();
    pagesSetup.setFirstPage(true);
    pagesSetup.setLastPage(true);
    pagesSetup.setOddPages(false);
    pagesSetup.setEvenPages(false);
    options.setPagesSetup(pagesSetup);

    // specify special barcode type to search
    options.setEncodeType(signatureLib.BarcodeTypes.Code128);
    // specify text match type
    options.setMatchType(signatureLib.TextMatchType.Contains);
    // specify text pattern to search
    options.setText("GroupDocs.Signature");
    // set field for barcode images returning
    options.setReturnContent(true);

    // search for signatures in document
    const signatures = signature.search(signatureLib.BarcodeSignature.class, options).toArray();
    console.log("\nSource document contains following signatures.");
    signatures.forEach(barcodeSignature => {
        console.log(`Barcode signature found at page ${barcodeSignature.getPageNumber()} with type ${barcodeSignature.getEncodeType()} and text ${barcodeSignature.getText()}`);
        console.log(`Barcode signature size ${barcodeSignature.getContent().length} and format ${barcodeSignature.getFormat().getExtension()}`);
    });
}

module.exports = searchForBarcodeAdvanced