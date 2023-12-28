const path = require('path');
const Constants = require('../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function helloWorldRun() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const fileName = path.basename(filePath);

    const outputFilePath = path.join(Constants.OutputPath, 'HelloWorld', fileName);
  
    // Sign document with text signature.
    const signature = new signatureLib.Signature(filePath);
      const textSignOptions = new signatureLib.TextSignOptions('Hello world!');
      signature.sign(outputFilePath, textSignOptions);
  
    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
  }

  module.exports = helloWorldRun