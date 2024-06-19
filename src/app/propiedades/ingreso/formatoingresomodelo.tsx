import { NumerosALetras } from "@/app/lib/formatearNumerosaLetras";
import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { ModeloNegocios } from "./page";
import moment from "moment";


interface props { 
	props : ModeloNegocios
}


export const FormatodeIngresoPDf = ( modeloNegocios:props) => (


  <Document>
    <Page>
    <View>
	<Image src={"/HojaMembretada.png"} style={styles.backgroundImage} />
	<View style={styles.body}>
		<Text style={styles.title}> {"FORMATO DE INGRESO DE PROPIEDAD"} </Text>
		<Text style={styles.title5}> Fecha de Ingreso : {moment(new Date()).format("LL")}</Text>
			<Text style={styles.title5}> {` Nombre de la Propiedad : ${modeloNegocios.props.propiedad}` }</Text>
			

			</View>
	</View>
 
 <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);
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
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Bold',
	fontStyle : "bold"
  },
  titleLinea: {
	marginTop:30,
    fontSize: 10,
    textAlign: 'center',
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
	height : 100
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
