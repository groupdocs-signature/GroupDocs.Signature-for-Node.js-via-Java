const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')


function signWithImageAdvanced() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_WORDPROCESSING;
    const fileName = path.basename(filePath);
    const imagePath = Constants.ImageHandwrite;

    const outputFilePath = path.join(Constants.OutputPath, 'AdvancedSignWithImage', fileName);

    const signature = new signatureLib.Signature(filePath);

    const options = new signatureLib.ImageSignOptions(imagePath);

    // set signature position
    options.setLeft(100);
    options.setTop(100);

    // set signature rectangle
    options.setWidth(100);
    options.setHeight(30);

    // set signature alignment
    // when VerticalAlignment is set the Top coordinate will be ignored.
    // Use Margin properties Top, Bottom to provide vertical offset
    options.setVerticalAlignment(signatureLib.VerticalAlignment.Top);

    // when HorizontalAlignment is set the Left coordinate will be ignored.
    // Use Margin properties Left, Right to provide horizontal offset
    options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Right);

    const padding = new signatureLib.Padding();
    padding.setRight(120);
    padding.setTop(120);
    options.setMargin(padding);

    // set rotation
    options.setRotationAngle(45);

    // setup signature border
    const border = new signatureLib.Border();
    //border.setColor(Color.GREEN);
    border.setDashStyle(signatureLib.DashStyle.DashLongDashDot);
    border.setWeight(5);
    border.setVisible(true);

    options.setBorder(border);

    // sign document to file
    const signResult = signature.sign(outputFilePath, options);
    // analyzing result
    console.log('List of newly created signatures:');
    let number = 1;
    for (const temp of signResult.getSucceeded().toArray()) {
        console.log(`Signature #${number++}: Type: ${temp.getSignatureType()} Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    }
    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = signWithImageAdvanced