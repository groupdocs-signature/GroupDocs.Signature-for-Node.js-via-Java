const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

async function getDocumentInfo() {
  console.log('\n--------------------------------------------------------------------------------------------------------------------');
  console.log('[Example Basic Usage] # GetDocumentInfo : Get document basic info\n');

  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF; // Assuming Constants.SAMPLE_SIGNED_MULTI is defined elsewhere

  const signature = new signatureLib.Signature(filePath);

  const documentInfo = await signature.getDocumentInfo();

  console.log(`Document properties ${path.basename(filePath)}`);
  console.log(` - format : ${documentInfo.getFileType().getFileFormat()}`);
  console.log(` - extension : ${documentInfo.getFileType().getExtension()}`);
  console.log(` - size : ${documentInfo.getSize()}`);
  console.log(` - page count : ${documentInfo.getPageCount()}`);
  console.log(` - Form Fields count : ${documentInfo.getFormFields().size()}`);
  console.log(` - Text signatures count : ${documentInfo.getTextSignatures().size()}`);
  console.log(` - Image signatures count : ${documentInfo.getImageSignatures().size()}`);
  console.log(` - Digital signatures count : ${documentInfo.getDigitalSignatures().size()}`);
  console.log(` - Barcode signatures count : ${documentInfo.getBarcodeSignatures().size()}`);
  console.log(` - QrCode signatures count : ${documentInfo.getQrCodeSignatures().size()}`);
  console.log(` - FormField signatures count : ${documentInfo.getFormFieldSignatures().size()}`);

  for (const pageInfo of documentInfo.getPages().toArray()) {
    console.log(` - page-${pageInfo.getPageNumber()} Width ${pageInfo.getWidth()}, Height ${pageInfo.getHeight()}`);
  }
}


module.exports = getDocumentInfo