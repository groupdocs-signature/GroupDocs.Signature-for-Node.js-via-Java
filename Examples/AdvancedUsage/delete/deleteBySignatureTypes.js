const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function deleteBySignatureTypes() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI;
  const fileName = filePath.split("/").pop();

  // Copy source file since the delete method works with the same document
  const outputFilePath = `${Constants.OutputPath}/DeleteByType/${fileName}`;
  const dir = path.dirname(outputFilePath);
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create a Signature instance
  const signature = new signatureLib.Signature(filePath);

  // Compose the list of signature types to delete
  const signedTypes = java.newInstanceSync("java.util.ArrayList")
  signedTypes.add(signatureLib.SignatureType.Text);
  signedTypes.add(signatureLib.SignatureType.Image);
  signedTypes.add(signatureLib.SignatureType.Barcode);
  signedTypes.add(signatureLib.SignatureType.QrCode);
  signedTypes.add(signatureLib.SignatureType.Digital);


  // Deleting signatures from the document by signature types
  const result = signature.deleteByTypes(outputFilePath, signedTypes);

  if (result.getSucceeded().toArray().length > 0) {
      console.log("Following signatures were removed:");
      let number = 1;
      result.getSucceeded().toArray().forEach(temp => {
          console.log(`Signature #${number++}: Type: ${temp.getSignatureType()} Id:${temp.getSignatureId()}. Created: ${temp.getCreatedOn()}`);
      });
  } else {
      console.log("No signatures were deleted.");
  }
}


module.exports = deleteBySignatureTypes