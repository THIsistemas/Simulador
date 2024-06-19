"use client"

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import 'moment/locale/es';
import { ModeloNegocios } from "./page";
import { FormatodeIngresoPDf } from "./formatoingresomodelo";

interface props { 
	props : ModeloNegocios
}
const FormatoIngreso = ( modeloNegocios:props ) => {
const numeral = require("numeral")
	const {props} = modeloNegocios


	

  return (
    <>
    <div className="h-full w-full">
    <PDFViewer className="h-full w-full">
    <FormatodeIngresoPDf props={props} />
  </PDFViewer>
    </div>
    </>
    
  )
}

export default FormatoIngreso