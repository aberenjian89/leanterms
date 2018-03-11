const express = require('express');
const PDFGenerator = express.Router();
const pdfcontroller = require('../controller/PDFcontroller');

PDFGenerator.route('/api/contract/:contractId').get(pdfcontroller.PDFGenerate);


module.exports = PDFGenerator;
