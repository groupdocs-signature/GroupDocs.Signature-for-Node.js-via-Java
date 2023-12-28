const path = require('path');
const fs = require('fs');

const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

async function deleteById() {
  // The path to the documents directory.  
  const filePath = Constants.SAMPLE_PDF_SIGNED; 
  const fileName = path.basename(filePath);

  const outputDirectory = path.join(Constants.OutputPath, 'DeleteById');
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  // Copy source file since the delete method works with the same Document
  const outputFilePath = path.join(outputDirectory, fileName);

  fs.copyFileSync(filePath, outputFilePath);

  const signature = new signatureLib.Signature(outputFilePath);

  const id = 'eff64a14-dad9-47b0-88e5-2ee4e3604e71';
  const result = await signature.delete(id);
  if (result) {
    console.log(`Signature with Id# '${id}' was deleted from document ['${fileName}'].`);
  } else {
    console.log(`Signature was not deleted from the document! Signature with id# '${id}' was not found!`);
  }
}

module.exports = deleteById