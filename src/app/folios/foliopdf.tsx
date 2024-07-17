"use client"

import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import {parseDate, getLocalTimeZone , parseAbsoluteToLocal,today} from "@internationalized/date";

import moment from "moment";
import 'moment/locale/es';
import { NumerosALetras } from "../lib/formatearNumerosaLetras";
import { Folio } from "./page";
import dynamic from "next/dynamic";

moment.locale("es")
let numeral = require('numeral');

interface props {
  folio : Folio
  fecha : any
}




export const AbonoPDF = ({folio, fecha}:props) => 

 
  
  {
    let metodo :string
    if (folio.metodoDePago==="Efectivo") {
       metodo = "E"
    } else {
      metodo = "B" }
    const fhcreacion = moment(new Date()).format('MMMM/YYYY')
    const folioString = `${folio.tipo.charAt(0)}${metodo}/${fhcreacion}/${numeral(folio.folio).format("000")}`

  
 return ( 
 <Document>
    <Page>
    <View>
	<Image src={"/HojaMembretada.png"} style={styles.backgroundImage} />
	<View style={styles.body}>
	<Text style={styles.title}>{folio.tipo} </Text>
	<Text style={styles.title2}> {folioString} </Text>
	<Text style={styles.title3}>         DD  MM  AAAA</Text>
	<Text style={styles.title2}>FECHA: {moment(fecha).format("L")}</Text>
		<Image style={styles.image} src={"/Logo.png"}>
		</Image>
		<View style={styles.div}>
		<View style={styles.container}>
		<Text style={styles.title4}>
			NOMBRE:                      
			<Text style={styles.title5}>          {folio.emisor}</Text>
		</Text>  
	</View>
	<View style={styles.container}>
		<Text style={styles.title4}>
			CANTIDAD:                      
			<Text style={styles.title5Cantidad}>       {numeral(folio.cantidad).format('$0,0')} { NumerosALetras(folio.cantidad) }</Text>
		</Text>  
	</View>
	<View style={styles.containerConcepto}>
		<Text style={styles.titleConcepto}>
			CONCEPTO                    
		</Text>  
		<Text style={styles.title5Concepto}> {folio.concepto}</Text>
	</View>
	<View style={styles.containerConcepto}>
		<Text style={styles.titleLinea}>
			{folio.receptor}    
		</Text>  
		<Text style={styles.linea}>
		________________________________________                    
		</Text>  
		<Text style={styles.title5Concepto}>NOMBRE Y FIRMA</Text>
	</View>
	<View style={styles.container}>
		<Text style={styles.title4}>
			METODO DE PAGO:                      
			<Text style={styles.title5}>               {folio.metodoDePago}</Text>
		</Text>  
	</View>

		</View>
	</View>
   
</View>
 <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>)
}

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});


const styles = StyleSheet.create({
  bold:{
 	margin: 12,
    fontSize: 11,
    textAlign: 'justify',
	fontStyle : "bold",
    fontFamily: 'Times-Bold'
  },

  body: {
    paddingTop: 60,
    paddingBottom: 65,
    paddingHorizontal: 60,
   	width: '100%',
    height: '100%',
  },
   backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 40,
    textTransform: "uppercase",
    textAlign: 'justify',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  titleLinea: {
	marginTop:30,
    fontSize: 10,
    textAlign: 'center',
    fontStyle: "Italic",
    fontFamily: 'Times-Italic',
  },
  
  title2:{
	 fontSize: 20,
    textAlign: 'right',
    fontFamily: 'Times-Bold',
	fontStyle : "bold",
  textTransform: "uppercase"
  },
  title3:{
	 fontSize: 13,
	 margin:10,
    textAlign: 'right',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  title4:{
	 fontSize: 17,
    textAlign: 'justify',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  title5:{
	
	fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Italic',
	backgroundColor: "#E5E4E2",
	fontStyle : "normal",
      textTransform: "uppercase"

  },
  title5Cantidad:{
	
	fontSize: 8,
    textAlign: 'justify',
    fontFamily: 'Times-Italic',
	backgroundColor: "#E5E4E2",
	fontStyle : "normal",
  textTransform: "uppercase"
  },
  title5Concepto:{
	fontSize: 10,
	marginTop: 10,
  textTransform: "uppercase",
    textAlign: 'center',
    fontFamily: 'Times-Italic',
	backgroundColor: "#E5E4E2",
	fontStyle : "normal"
  },
  linea:{
	fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Times-Italic',
	backgroundColor: "#E5E4E2",
	fontStyle : "normal"
  },
  title6:{
	 fontSize: 10,
	 marginTop: 60,
	 marginBottom: 20,
    textAlign: 'justify',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  title7:{
	 fontSize: 10,
	 marginLeft: 5,
	textTransform: "uppercase",
    textAlign: 'justify',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  title9:{
	 fontSize: 10,
	 marginLeft: 5,
    textAlign: 'justify',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  title10:{
	 fontSize: 10,
	 marginLeft: 40,
    textAlign: 'justify',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  title8:{
	 fontSize: 10,
	 marginLeft: 0,
    textAlign: 'justify',
	textTransform: 'uppercase',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  titleConcepto:{
	 fontSize: 20,
	 marginTop: 15,
	 marginLeft: 0,
    textAlign: 'center',
	textTransform: 'uppercase',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  div: {
	flex:1,
	position:"relative",
	rowGap:10,
  },
  container: {
	padding:10,
	backgroundColor: "#E5E4E2",
	borderRadius: 10,
	height : 40
  },
  containerConcepto: {
	backgroundColor: "#E5E4E2",
	borderRadius: 10,
	height : 100,
  textTransform : "uppercase"
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
	width:200,
	height:200,
    marginVertical: 15,
    marginHorizontal: 150,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});
