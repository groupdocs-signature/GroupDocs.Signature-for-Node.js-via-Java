const path = require('path');
const fs = require('fs');
const { Buffer } = require('buffer');

const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

async function deleteBySignatureType() {
  const filePath = Constants.SAMPLE_SIGNED_MULTI; 
  const fileName = path.basename(filePath);
  
  const outputDirectory = path.join(Constants.OutputPath, 'DeleteBySignatureType');
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  // Copy source file since the delete method works with the same Document
  const outputFilePath = path.join(outputDirectory, fileName);
  // fs.copyFileSync(filePath, outputFilePath);

  // Processing QR-Code signatures
  const signature = new signatureLib.Signature(filePath);
    
  // Deleting QR-Code signatures from the document
  const result = await signature.delete(outputFilePath, signatureLib.SignatureType.QrCode);
  if (result.getSucceeded().size() > 0) {
    console.log('Following QR-Code signatures were deleted:');
    let number = 1;
    result.getSucceeded().toArray().forEach((o) => {
      const temp = o;
      console.log(`Signature #${number++}: Type: ${temp.getSignatureType()}, Id: ${temp.getSignatureId()}, Text: ${temp.getText()}`);
    });
  } else {
    console.log('No QR-Code signatures were deleted.');
  }
}

module.exports = deleteBySignatureType