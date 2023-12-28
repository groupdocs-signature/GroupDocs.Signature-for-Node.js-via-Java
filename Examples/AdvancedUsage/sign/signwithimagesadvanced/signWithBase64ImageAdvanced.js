const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithBase64ImageAdvanced() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Advanced Usage] # SignWithBase64ImageAdvanced : Sign document with base64 image\n');

    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const fileName = path.basename(filePath);
    const imageBase64 = "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";

    const outputFilePath = path.join(Constants.OutputPath, 'SignWithBase64ImageAdvanced', fileName);

    const signature = new signatureLib.Signature(filePath);
    
    const options = signatureLib.ImageSignOptions.fromBase64(imageBase64);
    //options.fromBase64(imageBase64);

    // set signature position
    options.setLeft(100);
    options.setTop(100);

    // set signature rectangle
    options.setWidth(200);
    options.setHeight(100);

    // set signature alignment
    // when VerticalAlignment is set the Top coordinate will be ignored.
    // Use Margin properties Top, Bottom to provide vertical offset
    options.setVerticalAlignment(signatureLib.VerticalAlignment.Top);

    // when HorizontalAlignment is set the Left coordinate will be ignored.
    // Use Margin properties Left, Right to provide horizontal offset
    options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Center);

    const margin = new signatureLib.Padding();
    margin.setTop(120);
    margin.setRight(120);
    options.setMargin(margin);

    // set rotation
    options.setRotationAngle(45);

    // setup signature border
    const border = new signatureLib.Border();
    border.setVisible(true);
    //border.setColor(Color.ORANGE);
    border.setDashStyle(signatureLib.DashStyle.DashDotDot);
    border.setWeight(5);
    options.setBorder(border);

    // sign document to file
    const signResult = signature.sign(outputFilePath, options);

    console.log(`\nSource document signed successfully with ${signResult.getSucceeded().size()} signature(s).\nFile saved at ${outputFilePath}`);

    console.log("\nList of newly created signatures:");
    let number = 1;
    for (const temp of signResult.getSucceeded().toArray()) {
        console.log(`Signature #${number++}: Type: ${temp.getSignatureType()} Id: ${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    }
}

module.exports = signWithBase64ImageAdvanced