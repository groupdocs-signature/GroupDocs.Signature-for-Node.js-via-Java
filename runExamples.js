  // Basic Methods
const setLicense = require('./QuickStart/setLicense')
const helloWorldRun = require('./QuickStart/helloWorldRun')

const getSupportedFileFormats = require('./Examples/BasicUsage/common/getSupportedFileFormats')
const deleteBarcode = require('./Examples/BasicUsage/delete/deleteBarcode')
const deleteById = require('./Examples/BasicUsage/delete/deleteById')
const deleteBySignatureType = require('./Examples/BasicUsage/delete/deleteBySignatureType')
const generatePreview = require('./Examples/BasicUsage/preview/generatePreview')
const getDocumentInfo = require('./Examples/BasicUsage/preview/getDocumentInfo')

const searchForBarcode = require('./Examples/BasicUsage/search/searchForBarcode')
const searchForDigital = require('./Examples/BasicUsage/search/searchForDigital')
const searchForImage = require('./Examples/BasicUsage/search/searchForImage')
const searchForText = require('./Examples/BasicUsage/search/searchForText')

const signWithBarcode = require('./Examples/BasicUsage/sign/signWithBarcode')
const signWithText = require('./Examples/BasicUsage/sign/signWithText')
const signPdfWithFormField = require('./Examples/BasicUsage/sign/signPdfWithFormField')
const signWithDigital = require('./Examples/BasicUsage/sign/signWithDigital')
const signWithQRCode = require('./Examples/BasicUsage/sign/signWithQRCode')
const signWithStamp = require('./Examples/BasicUsage/sign/signWithStamp')

const updateBarcode = require('./Examples/BasicUsage/update/updateBarcode')
const updateImage = require('./Examples/BasicUsage/update/updateImage')
const updateText = require('./Examples/BasicUsage/update/updateText')

const verifyBarcode = require('./Examples/BasicUsage/verify/verifyBarcode')
const verifyText = require('./Examples/BasicUsage/verify/verifyText')
const verifyQRCode = require('./Examples/BasicUsage/verify/verifyQRCode')
const verifyDigital = require('./Examples/BasicUsage/verify/verifyDigital')
const verifyWithMultipleOptions = require('./Examples/BasicUsage/verify/verifyWithMultipleOptions')

const getDocumentInfoAdvanced = require('./Examples/AdvancedUsage/documentpreview/getDocumentInfoAdvanced')
const getDocumentProcessHistoryAdvanced = require('./Examples/AdvancedUsage/documentpreview/getDocumentProcessHistoryAdvanced')

const processingTextSignatureOverCRUD = require('./Examples/AdvancedUsage/crud/processingTextSignatureOverCRUD')

const deleteBySignatureTypes = require('./Examples/AdvancedUsage/delete/deleteBySignatureTypes')

const handlingIncorrectPasswordException = require('./Examples/AdvancedUsage/handlingexceptions/handlingIncorrectPasswordException')
const handlingPasswordRequiredException = require('./Examples/AdvancedUsage/handlingexceptions/handlingPasswordRequiredException')

const saveDocumentWithPassword = require('./Examples/AdvancedUsage/saving/saveDocumentWithPassword')

const searchForBarcodeAdvanced = require('./Examples/AdvancedUsage/search/searchForBarcodeAdvanced')
const searchForTextAdvanced = require('./Examples/AdvancedUsage/search/searchForTextAdvanced')

const signZIPArchiveDocuments = require('./Examples/AdvancedUsage/sign/signarchives/signZIPArchiveDocuments')
const signWithDigitalAdvancedPdfAppearance = require('./Examples/AdvancedUsage/sign/signwithdigitaladvanced/signWithDigitalAdvancedPdfAppearance')
const signWithDigitalAdvancedPdfTimestamp = require('./Examples/AdvancedUsage/sign/signwithdigitaladvanced/signWithDigitalAdvancedPdfTimestamp')

const signPdfWithFormFieldAdvanced = require('./Examples/AdvancedUsage/sign/signwithformfieldsadvanced/signPdfWithFormFieldAdvanced')
const signPdfWithFormFieldAdvancedCombobox = require('./Examples/AdvancedUsage/sign/signwithformfieldsadvanced/signPdfWithFormFieldAdvancedCombobox')
const signPdfWithFormFieldAdvancedRadio = require('./Examples/AdvancedUsage/sign/signwithformfieldsadvanced/signPdfWithFormFieldAdvancedRadio')

const signWithBase64ImageAdvanced = require('./Examples/AdvancedUsage/sign/signwithimagesadvanced/signWithBase64ImageAdvanced')

const signWithQRCodeWiFiObject = require('./Examples/AdvancedUsage/sign/signwithqrcodestandardobjects/signWithQRCodeWiFiObject')
const signWithQRCodeEmailObject = require('./Examples/AdvancedUsage/sign/signwithqrcodestandardobjects/signWithQRCodeEmailObject')

const signWithLinearGradientBrush = require('./Examples/AdvancedUsage/sign/singinwithbrushes/signWithLinearGradientBrush')

const signPdfWithStandardMetadata = require('./Examples/AdvancedUsage/sign/signPdfWithStandardMetadata')
const signWithDigitalAdvanced = require('./Examples/AdvancedUsage/sign/signWithDigitalAdvanced')
const signWithImageAdvanced = require('./Examples/AdvancedUsage/sign/signWithImageAdvanced')
const signWithQRCodeAdvanced = require('./Examples/AdvancedUsage/sign/signWithQRCodeAdvanced')
const signWithXAdESTypes = require('./Examples/AdvancedUsage/sign/signWithXAdESTypes')

const verifyBarcodeAdvanced = require('./Examples/AdvancedUsage/verify/verifyBarcodeAdvanced')
const verifyCertificateAdvanced = require('./Examples/AdvancedUsage/verify/verifyCertificateAdvanced')
const verifyDigitalAdvanced = require('./Examples/AdvancedUsage/verify/verifyDigitalAdvanced')
const verifyQRCodeAdvanced = require('./Examples/AdvancedUsage/verify/verifyQRCodeAdvanced')
const verifyTextAdvanced = require('./Examples/AdvancedUsage/verify/verifyTextAdvanced')

;(async () => {
  try {
    console.log('Start Signature. \nIn Main() method uncomment the example that you want to run.')
    //await setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all([
      /* NOTE: Please uncomment the example you want to try out */
      //setLicense(),
      /* Basic usage */
      helloWorldRun(),
      getSupportedFileFormats(),
      deleteBarcode(),
      // deleteById(),
      // deleteBySignatureType(),
      // getDocumentInfo(),
      // searchForBarcode(),
      // searchForImage(),
      // searchForText(),
      // signWithBarcode(),
      // signWithText(),
      // signPdfWithFormField(),
      // signWithDigital(),
      // signWithQRCode(), 
      // signWithStamp(),
      // updateBarcode(),
      // updateImage(),
      // updateText(),
      // verifyBarcode(),
      // verifyText(),
      // verifyQRCode(),
      // verifyDigital(),
      // verifyWithMultipleOptions(),
      // getDocumentInfoAdvanced(),
      // getDocumentProcessHistoryAdvanced(),
      // processingTextSignatureOverCRUD(),
      // deleteBySignatureTypes(),
      // handlingIncorrectPasswordException(),
      // handlingPasswordRequiredException(),
      // saveDocumentWithPassword(),
      // searchForBarcodeAdvanced(),
      // signZIPArchiveDocuments(),
      // signWithDigitalAdvancedPdfAppearance(),
      // signPdfWithFormFieldAdvanced(),
      // signPdfWithFormFieldAdvancedCombobox(),
      // signPdfWithFormFieldAdvancedRadio(),
      // signWithBase64ImageAdvanced(),
      // signWithQRCodeWiFiObject(),
      // signWithQRCodeEmailObject(),
      // signWithLinearGradientBrush(),
      // signWithDigitalAdvanced(),
      // signWithImageAdvanced(),
      // signWithQRCodeAdvanced(),
      // signWithXAdESTypes(),
      // verifyBarcodeAdvanced(),
      // verifyDigitalAdvanced(),
      // verifyQRCodeAdvanced(),
      // verifyTextAdvanced()
    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()