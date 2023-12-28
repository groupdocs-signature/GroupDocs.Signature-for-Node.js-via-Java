const signatureLib = require('@groupdocs/groupdocs.signature')

function getSupportedFileFormats() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Basic Usage] # GetSupportedFileFormats : Get supported file formats\n');
  
    const supportedFileTypes = signatureLib.FileType.getSupportedFileTypes().toArray();

    supportedFileTypes.forEach((fileType) => {
        console.log('\n' + fileType.getExtension());
    });

  }

  module.exports = getSupportedFileFormats