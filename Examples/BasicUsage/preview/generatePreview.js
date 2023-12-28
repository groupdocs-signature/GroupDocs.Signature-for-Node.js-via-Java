const path = require('path');
const fs = require('fs');
// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function generatePreview() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Basic Usage] # GeneratePreview : Generate document pages preview\n');

    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF; // Assuming Constants.SAMPLE_PDF is defined elsewhere

    const signature = new signatureLib.Signature(filePath);

    // Create preview options object
    const previewOption = new signatureLib.PreviewOptions(createPageStream, releasePageStream);
    previewOption.setPreviewFormat(PreviewOptions.PreviewFormats.JPEG);

    // Generate preview
    signature.generatePreview(previewOption);
  }

  function createPageStream(pageNumber) {
    const imageFilePath = path.join(Constants.OutputPath, 'GeneratePreviewFolder', `image-${pageNumber}.jpg`);
    const folder = path.dirname(imageFilePath);

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    return fs.createWriteStream(imageFilePath);
  }

  function releasePageStream(pageNumber, pageStream) {
    pageStream.end();
    const imageFilePath = path.join(Constants.OutputPath, 'GeneratePreviewFolder', `image-${pageNumber}.jpg`);
    console.log(`Image file ${imageFilePath} is ready for preview`);
  }


module.exports = generatePreview