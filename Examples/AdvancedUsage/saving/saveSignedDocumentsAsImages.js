const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function saveSignedDocumentsAsImages() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const outputFilePath = path.join(Constants.OutputPath, 'SignSaveToImage', 'SignedAndSavedAsImage.png');

    const signature = new signatureLib.Signature(filePath);
    const signOptions = new signatureLib.QrCodeSignOptions('JohnSmith');
    signOptions.setEncodeType(signatureLib.QrCodeTypes.QR);
    signOptions.setLeft(100);
    signOptions.setTop(100);

    // Export to image options
    const exportImageSaveOptions = new signatureLib.ExportImageSaveOptions(signatureLib.ImageSaveFileFormat.Png);

    // Set pages border style
    const border = new signatureLib.Border();
    border.setColor(Color.BLUE);
    border.setWeight(5);
    border.setDashStyle(signatureLib.DashStyle.Solid);
    border.setTransparency(0.5);
    exportImageSaveOptions.setBorder(border);

    // Specify pages to export
    const pagesSetup = new signatureLib.PagesSetup();
    pagesSetup.setFirstPage(true);
    pagesSetup.setLastPage(true);
    exportImageSaveOptions.setPagesSetup(pagesSetup);

    // Specify output image view - all pages could be located on one column or each by each on several columns
    exportImageSaveOptions.setPageColumns(2);

    // Sign document to file
    signature.sign(outputFilePath, signOptions, exportImageSaveOptions);

    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = saveSignedDocumentsAsImages