const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signPdfWithFormField() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF; // Assuming Constants.SAMPLE_PDF is defined elsewhere
  const fileName = path.basename(filePath);

  const outputFilePath = path.join(Constants.OutputPath, 'SignPdfWithFormField', fileName);
  const signature = new signatureLib.Signature(filePath);

  // Instantiate text form field signature
  const textSignature = new signatureLib.TextFormFieldSignature('FieldText', 'Value1');
  // Instantiate options based on text form field signature
  const options = new signatureLib.FormFieldSignOptions(textSignature);
  options.setMargin(new signatureLib.Padding(10, 20, 0, 0));
  options.setHeight(10);
  options.setWidth(100);

  // Sign document to file
  signature.sign(outputFilePath, options);
  console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = signPdfWithFormField