"use client"
import { DatePicker, Input, Select, SelectItem, Textarea, Tooltip } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { AbonoPDF } from './foliopdf';
import { IoDocumentTextOutline } from 'react-icons/io5';
import dynamic from 'next/dynamic';
import moment from 'moment';
import { getLocalTimeZone, now } from '@internationalized/date';

export interface Folio {
tipo	 		: 		"Egreso" | "Ingreso"
folio 			: 		number
emisor	 		: 		string
cantidad		: 		number
concepto		: 		string
receptor		: 		string
metodoDePago 	: 		"Efectivo" | "Transferencia" | "Debito" | "Credito"
}
const defaultFolio:Folio = {
tipo	 		: 		"Egreso",
folio 			: 		0,
emisor	 		: 		"",
cantidad		: 		0,
concepto		: 		"",
receptor		: 		"",
metodoDePago 	: 		"Efectivo",
}

const tipo = [
	{
		value: "Egreso ",label: "Egreso"
	},
	{
		value: "Ingreso ",label: "Ingreso"
	}
]
const metodoDePago = [
	{
		value: "Efectivo ",label: "Efectivo"
	},
	{
		value: "Transferencia ",label: "Transferencia"
	},
	{
		value: "Debito ",label: "Debito"
	},
	{
		value: "Credito ",label: "Credito"
	},
]
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const Folios = () => {


const [isClient, setIsClient] = useState(false);

  


const [folio , setFolio] = useState<Folio>(defaultFolio)
 const [fecha, setFecha] = useState(
  now(getLocalTimeZone()).subtract({days: 1}),
  );

const handleSetFolio = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFolio((dataValue) => ({ ...dataValue, [name]: value }));

  };
const numeral = require("numeral")
    let metodo :string
    if (folio.metodoDePago==="Efectivo") {
       metodo = "E"
    } else {
      metodo = "B" }
const fhcreacion = moment(new Date()).format('MMMM/YYYY')
const folioString = `${folio.tipo.charAt(0)}${metodo}/${fhcreacion}/${numeral(folio.folio).format("000")}`

useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // o algún componente de carga
  }


  return (

		<main className='bg-white'>
			
	<div className='p-32 bg-slate-300 text-black grid gap-5'>
		<h2 className='text-center text-primary text-3xl font-bold'>
			Generador de Recibos
		</h2>
		
			<Input
              type="number"
              onChange={handleSetFolio}
              label="Ingresa la Cantidad"
			  labelPlacement='outside'
			  className='text-black '
              variant='flat'
              name="cantidad"
              id="cantidad"
    	/>
		<Input
			type="text"
			onChange={handleSetFolio}
			label="Emisor"
			labelPlacement='outside'
			className='text-black '
			variant='flat'
			name="emisor"
			id="emisor"
            />
		
		<Input
              type="text"
              onChange={handleSetFolio}
              label="Receptor"
				labelPlacement='outside'
			  className='text-black '
              variant='flat'
              name="receptor"
              id="receptor"
            />
		
			
	  <Textarea
              type="text"
              onChange={handleSetFolio}
              label="Concepto"
			  labelPlacement='outside'
			  className='text-black '
              variant='flat'
              name="concepto"
              id="concepto"
            />
		<DatePicker 
		className="w-auto" 
		label="Fecha de Elaboración del Recibo" 
		name='fecha'
		id='fecha'
		value={fecha}
		onChange={setFecha} />
		<Select
			items={tipo}
			label="Escoja el Tipo"
			className=" text-black "
			onChange={handleSetFolio}
			id='tipo'
			name='tipo'
			>
        {(tipo:any) => <SelectItem className='text-black' key={tipo.label} >{tipo.label}</SelectItem>}
      </Select>
			<Select
			items={metodoDePago}
			label="Escoja el Metodo De Pago"
			className=" text-black "
			onChange={handleSetFolio}
			id='metodoDePago'
			name='metodoDePago'
			>
        {(tipo:any) => <SelectItem className='text-black' key={tipo.label}>{tipo.label}</SelectItem>}
      </Select>
	  <Input
              type="number"
              onChange={handleSetFolio}
              label="Ingresa el Numero del Folio"
			  className='text-black '
			  labelPlacement='outside'
              variant='flat'
              name="folio"
              id="folio"
            />
		<div className='text-black'>	
		{
			folio.folio ? <PDFDownloadLink className=" h-auto" 
			document={< AbonoPDF folio={folio} fecha={fecha}
			/>} 
			fileName={`${folioString}`}>
			{({ blob, url, loading, error }) => (loading ? "" :  
			<Tooltip content="Descargar Saldos"  color="danger" className="text-white"  > 
				<p className="bg-primary text-white print:hidden  w-full block p-4 rounded-md"> Imprimir </p>  
			</Tooltip> 
				)}
      	</PDFDownloadLink> : ""
		}		 
		
			
	
		</div>
		
	</div>

	</main>
  )
}

export default Folios