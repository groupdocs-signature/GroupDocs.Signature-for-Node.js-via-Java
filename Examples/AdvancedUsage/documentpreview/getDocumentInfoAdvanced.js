const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function getDocumentInfoAdvanced() {
  console.log("\n--------------------------------------------------------------------------------------------------------------------");
  console.log("[Example Advanced Usage] # GetDocumentInfoAdvanced : Get document form fields and signatures information\n");

  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI;

  const signature = new signatureLib.Signature(filePath);
  const documentInfo = signature.getDocumentInfo();

  console.log("Document properties " + filePath);
  console.log(" - format : " + documentInfo.getFileType().getFileFormat());
  console.log(" - extension : " + documentInfo.getFileType().getExtension());
  console.log(" - size : " + documentInfo.getSize());
  console.log(" - page count : " + documentInfo.getPageCount());

  for (const pageInfo of documentInfo.getPages().toArray()) {
    console.log(" - page-" + pageInfo.getPageNumber() + " Width " + pageInfo.getWidth() + ", Height " + pageInfo.getHeight());
  }

  // Display document Form Field signatures information
  console.log("Document Form Fields information: count = " + documentInfo.getFormFields().size());
  for (const formField of documentInfo.getFormFields().toArray()) {
    console.log(" - type #" + formField.getType() + ": Name: " + formField.getName() + " Value: " + formField.getValue());
  }

  // Display document Text signatures information
  console.log("Document Text signatures : " + documentInfo.getTextSignatures().size());
  for (const textSignature of documentInfo.getTextSignatures().toArray()) {
    console.log(" - #" + textSignature.getSignatureId() + ": Text: " + textSignature.getText() +
      " Location: " + textSignature.getLeft() + "x" + textSignature.getTop() +
      ". Size: " + textSignature.getWidth() + "x" + textSignature.getHeight());
  }

  // Display document Image signatures information
  console.log("Document Image signatures : " + documentInfo.getImageSignatures().size());
  for (const imageSignature of documentInfo.getImageSignatures().toArray()) {
    console.log(" - #" + imageSignature.getSignatureId() + ": Size: " + imageSignature.getSize() +
      " bytes, Format: " + imageSignature.getFormat());
  }

  // Display document Digital signatures information
  console.log("Document Digital signatures : " + documentInfo.getDigitalSignatures().size());
  for (const digitalSignature of documentInfo.getDigitalSignatures().toArray()) {
    console.log(" - #" + digitalSignature.getSignatureId());
  }

  // Display document Barcode signatures information
  console.log("Document Barcode signatures : " + documentInfo.getBarcodeSignatures().size());
  for (const barcodeSignature of documentInfo.getBarcodeSignatures().toArray()) {
    console.log(" - #" + barcodeSignature.getSignatureId() + ": Type: " + barcodeSignature.getEncodeType().getTypeName() +
      ". Text: " + barcodeSignature.getText());
  }

  // Display document QrCode signatures information
  console.log("Document QR-Code signatures : " + documentInfo.getQrCodeSignatures().size());
  for (const qrCodeSignature of documentInfo.getQrCodeSignatures().toArray()) {
    console.log(" - #" + qrCodeSignature.getSignatureId() + ": Type: " + qrCodeSignature.getEncodeType().getTypeName() +
      ". Text: " + qrCodeSignature.getText());
  }

  // Display document Form Fields signatures information
  console.log("Document Form Fields signatures : " + documentInfo.getFormFieldSignatures().size());
  for (const formFieldSignature of documentInfo.getFormFields().toArray()) {
    console.log(" - #" + formFieldSignature.getSignatureId() + " Type " + formFieldSignature.getType() +
      ": Name: " + formFieldSignature.getName() + " Value: " + formFieldSignature.getValue());
  }
}


module.exports = getDocumentInfoAdvanced