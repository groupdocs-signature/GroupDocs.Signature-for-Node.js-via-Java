require('dotenv').config()
const path = require('path')
const SamplePath = path.join(__dirname, './Resources/SampleFiles')
const CertificatePath = path.join(__dirname, './Resources/SampleFiles/Certificates')
const ImagesPath = path.join(__dirname, './Resources/SampleFiles/Images')

module.exports = {
  LicensePath: (process.env.PATH_TO_LICS + process.env.PRODUCT_LIC) || '',
  SamplePath,
  OutputPath: path.join(__dirname, '../', 'testResults'),
  SAMPLE_DOCX: SamplePath + '/sample.docx',
  
  SAMPLE_PDF: SamplePath + '/sample.pdf',
  SAMPLE_PDF_SIGNED: SamplePath + '/sample_signed.pdf',
  SAMPLE_SIGNED_MULTI: SamplePath + '/sample_multiple_signatures.docx',
  SAMPLE_HISTORY: SamplePath + '/sample_history.docx',
  SAMPLE_WORDPROCESSING: SamplePath + '/sample.docx',
  SAMPLE_PDF_SIGNED_PWD: SamplePath + '/sample_signed_pwd.pdf',
  SAMPLE_ZIP: SamplePath + '/sample.zip',
  SAMPLE_SPREADSHEET: SamplePath + '/sample.xlsx',
  SAMPLE_PDF_SIGNED_DIGITAL: SamplePath + '/sample_signed_digital.pdf',

  CertificatePfx: CertificatePath + '/MrSmithSignature.pfx',
  CertificateCer: CertificatePath + '/signtest.cer',

  ImageHandwrite : ImagesPath + '/signature_handwrite.jpg',
  ImageStamp : ImagesPath + '/stamp.png',
}