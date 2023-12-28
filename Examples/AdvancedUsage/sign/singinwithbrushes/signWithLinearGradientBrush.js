const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithLinearGradientBrush() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const outputFilePath = path.join(Constants.OutputPath, "SignWithBrushes", "SignedLinearGradientBrush.pdf");

        const signature = new signatureLib.Signature(filePath);
        const options = new signatureLib.TextSignOptions("John Smith");

        // adjust signature appearance brush

        // setup background
        const background = new signatureLib.Background();
        //background.setColor(Color.GREEN);
        background.setTransparency(0.5);
        //background.setBrush(new signatureLib.LinearGradientBrush(Color.GREEN, Color.WHITE, 45));
        options.setBackground(background);

        // locate signature
        options.setWidth(100);
        options.setHeight(80);
        options.setVerticalAlignment(signatureLib.VerticalAlignment.Center);
        options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Center);
        const padding = new signatureLib.Padding();
        padding.setTop(20);
        padding.setRight(20);
        options.setMargin(padding);

        // set alternative signature implementation on document page
        options.setSignatureImplementation(signatureLib.TextSignatureImplementation.Image);

        // sign document to file
        signature.sign(outputFilePath, options);

        console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}
module.exports = signWithLinearGradientBrush