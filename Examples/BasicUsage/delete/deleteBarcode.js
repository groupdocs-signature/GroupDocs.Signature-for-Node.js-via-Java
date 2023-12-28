const path = require('path');
const fs = require('fs');

const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function deleteBarcode() {
  const filePath = Constants.SAMPLE_PDF_SIGNED; 
  const fileName = path.basename(filePath);

  const outputDirectory = path.join(Constants.OutputPath, 'DeleteBarcode');
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  // Copy source file since the delete method works with the same Document
  const outputFilePath = path.join(outputDirectory, fileName);

  fs.copyFileSync(filePath, outputFilePath);

  const signature = new signatureLib.Signature(outputFilePath);

    const options = new signatureLib.BarcodeSearchOptions();

    // Search for Barcode signatures in the document
    const signatures =  signature.search(signatureLib.BarcodeSignature.class, options).toArray();
    if (signatures.length > 0) {
        const barcodeSignature = signatures[0];
        const result = signature.delete(outputFilePath, barcodeSignature);
        if (result) {
        console.log(`Signature with Barcode '${barcodeSignature.getText()}' and encode type '${barcodeSignature.getEncodeType().getTypeName()}' was deleted from document ['${fileName}'].`);
        } else {
        console.log(`Signature was not deleted from the document! Signature with Barcode '${barcodeSignature.getText()}' and encode type '${barcodeSignature.getEncodeType().getTypeName()}' was not found!`);
        }
    }
}

module.exports = deleteBarcode