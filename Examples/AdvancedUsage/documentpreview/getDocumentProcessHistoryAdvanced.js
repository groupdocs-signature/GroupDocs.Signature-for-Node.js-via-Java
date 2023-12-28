const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function getDocumentProcessHistoryAdvanced() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_HISTORY;

  // Create an instance of the Signature class
  const signature = new signatureLib.Signature(filePath);

  // Get document information
  const documentInfo = signature.getDocumentInfo();

  // Display document process history information
  console.log("Document Process logs information: count = " + documentInfo.getProcessLogs().size());
  documentInfo.getProcessLogs().toArray().forEach(processLog => {
      console.log(` - operation [${processLog.getType()}] on ${processLog.getDate().toString()}. Succeeded/Failed ${processLog.getSucceeded()}/${processLog.getFailed()}. Message: ${processLog.getMessage()} : `);

      if (processLog.getSignatures() !== null) {
          processLog.getSignatures().toArray().forEach(logSignature => {
              console.log(`\t\t - ${logSignature.getSignatureType()} #${logSignature.getSignatureId()} at ${logSignature.getTop()} x ${logSignature.getLeft()} pos;`);
          });
      }
  });
}

module.exports = getDocumentProcessHistoryAdvanced