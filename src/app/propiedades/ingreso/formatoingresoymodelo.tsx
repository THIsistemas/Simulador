import React from 'react'
import { ModeloNegocios } from './page'
import { IoCheckbox, IoHomeOutline, IoHomeSharp } from 'react-icons/io5'

import moment from 'moment'
import 'moment/locale/es';
import { Image } from '@nextui-org/react';
import { NumerosALetras } from '@/app/lib/formatearNumerosaLetras';

interface props { 
	props : ModeloNegocios
}

const FormatoIngresoyModeloPdf = ( modeloNegocios  : props ) => {

	const {props} = modeloNegocios
	const {
		cliente,
		asesor,
		comision,
		comisionCerrador,
		comisionIngresador,
		comisionThi,
		valorEsperado,
		metrosCuadrados,
		metrosConstruidos,
		precioTerreno,
		precioxm2,
		propiedad,
		credito,
		tipo,
		descripcion,
		documentos
	} = props 

	var numeral = require('numeral');

  return (
	
		<div className=' grid justify-center bg-white text-black'>
			<div className='flex  items-center justify-center '>
				<h1 className='text-xl items-center justify-center uppercase font-bold text-center bg-primary text-white  p-2'>
				FORMATO DE INGRESO DE PROPIEDAD
			</h1>
			<Image className=' shadow-white w-auto h-auto shadow-sm sm:flex justify-items-center '   width={100} height={100} src={"/descarga.jpg"} alt="logo"  />
			<h2 className=' text-sm font-medium flex justify-center items-center capitalize gap-12 pt-1  pb-1'>
			Fecha de Ingreso: <span className='font-sm text-sm bg-slate-300/60 p-1 rounded-lg capitalize'> {moment(new Date()).format("LL")} </span>
			</h2>
			</div>
			<div className=' justify-between flex items-center justify-items-center border-b-1 border-black/40 '>
			<h2 className=' text-sm font-medium flex justify-center items-center capitalize gap-12 pt-1  pb-1'>
			Nombre de la Propiedad: <span className='font-semibold text-sm bg-slate-300/60 p-1 rounded-lg'> {asesor.nombre} </span>
			</h2>
					<h2 className=' text-sm font-medium flex justify-between  pt-0  '>
				Ubicación:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {cliente.direccion}  </span>
			</h2>
		
					
			</div>
			
			<div className='justify-evenly flex border-b-1 border-black/40'>
			
			<h2 className=' text-sm font-medium flex justify-center items-center capitalize gap-12 pt-1  pb-1'>
				Nombre del Cliente: <span className='font-semibold text-sm bg-slate-300/60 p-1 rounded-lg'> {cliente.nombre} </span>
			</h2>
			<h2 className=' text-sm font-medium flex justify-center items-center capitalize gap-24 pt-0  '>
				Teléfono: <span className='font-sm text-sm bg-slate-300/60 p-1 rounded-lg capitalize'> {cliente.telefono} </span>
			</h2>
			</div>
			<div className='  justify-items-center flex  border-b-1 border-black/40'>
			
			
			
			<div className='flex gap-10 justify-items-center items-center pt-1  pb-1'>
			<h1 className='text-sm font-medium'>Tipo:</h1>
			<h2 className='text-sm flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Casa" ? 'text-green-400' : "hidden"}/> <p className={tipo === "Casa" ? 'font-bold' : "font-normal"}> Casa </p>			 
			</h2>
			<h2 className='text-sm flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Terreno" ? 'text-green-400' : "hidden"}/><p className={tipo === "Terreno" ? 'font-bold' : "font-normal"}> Terreno </p>				 
			</h2>
			<h2 className='text-sm flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Departamento" ? 'text-green-400' : "hidden"}/><p className={tipo === "Departamento" ? 'font-bold' : "font-normal"}> Departamento </p>				 
			</h2>
			<h2 className='text-sm flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Edificio" ? 'text-green-400' : "hidden"}/><p className={tipo === "Edificio" ? 'font-bold' : "font-normal"}> Edificio </p>				 
			</h2>
			<h2 className='text-sm flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Bodega" ? 'text-green-400' : "hidden"}/><p className={tipo === "Bodega" ? 'font-bold' : "font-normal"}> Bodega </p>				 
			</h2>
			</div>
			
			
			
			</div>
			<div className=' border-b-1 border-black/40'>
			<h2 className=' text-sm font-medium flex justify-between capitalize pt-0 border-b-1 border-black/40 '>
				Costo de venta:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {numeral(precioTerreno).format("$0,0")} Mxn </span>
			</h2>
			<h2 className=' text-sm font-medium flex justify-center gap-5  pt-0 border-b-1 border-black/40  '>
				Son:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'>( {NumerosALetras(precioTerreno)}) <span className='text-xs font-normal'>pesos Mexicanos </span> </span>
			</h2>
			<h2 className=' text-sm font-medium flex justify-between  pt-0 border-b-1 border-black/40 '>
				Superficie del Terreno:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {metrosCuadrados} m² </span>
			</h2>
			<h2 className=' text-sm font-medium flex justify-between  pt-0 border-b-1 border-black/40 '>
				Superficie de Construcción:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {metrosConstruidos} m² </span>
			</h2>
			
			<h2 className=' text-sm font-medium flex justify-between  pt-0 border-b-1 border-black/40 '>
				Precio X M²:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {numeral(precioxm2).format("$0,0")} Mxn </span>
			</h2>
			<h2 className=' text-sm font-medium flex justify-between  pt-0  '>
				Tipos de Credito<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {credito}  </span>
			</h2>
			</div>
			<p>Descripcion de la Propiedad</p>
				<div className='w-full border border-black '>
				<p className='font-bold text-tiny bg-slate-300/60 p-2 rounded-lg'> {descripcion} </p>
				</div>

			<div className='flex  items-center justify-center pt-8 '>
			<h1 className='text-2xl uppercase font-bold text-center bg-primary text-white h-auto w-auto p-4'>
				MODELO DE NEGOCIOS
			</h1>
			 <Image className=' shadow-white w-auto h-auto shadow-sm sm:flex justify-items-center '   width={100} height={100} src={"/descarga.jpg"} alt="logo"  />
			</div>
			<div className='flex justify-between border-b-1 border-black/40'>
				<h2 className=' text-sm font-medium flex justify-between  items-center pt-1  pb-1'>
				Comision Establecida:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {numeral(comision).format("$0,0")} Mxn </span>
			</h2>
			<h2 className=' text-sm font-medium flex justify-center gap-5  items-center pt-1  pb-1 '>
				Son:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'>( {NumerosALetras(comision)}) <span className='text-xs font-normal'>pesos Mexicanos </span> </span>
			</h2>
			</div>
			
		
			<div className='grid grid-cols-3 justify-items-center items-center  border-b-1 border-black/40'>
			<h2 className=' text-sm font-medium flex justify-between items-center  pt-1  pb-1'>
				Comision THI:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {numeral(comisionThi).format("$0,0")} Mxn </span>
			</h2>
			<h2 className=' text-sm font-medium flex justify-between items-center  pt-1  pb-1'>
				Comision Ingresador:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {numeral(comisionIngresador).format("$0,0")} Mxn </span>
			</h2>
			<h2 className=' text-sm font-medium flex justify-between items-center  pt-1  pb-1'>
				Comision Cerrador:<span className='font-bold text-sm bg-slate-300/60 p-1 rounded-lg'> {numeral(comisionCerrador).format("$0,0")} Mxn </span>
			</h2>
			
			</div>
			<div className='grid grid-cols-3 justify-evenly gap-4'>
				
				<h2 className=' text-sm font-medium flex flex-col justify-center items-center capitalize border-t-2 border-black/40 mt-20'>
				<span className=' text-sm  p-1 uppercase '> Lic. Miguel Ángel Rodriguez Torres </span>
				</h2>
				
				
				<h2 className=' text-sm font-medium flex flex-col justify-center items-center capitalize  border-t-2 border-black/40 mt-20'>
				
				<span className=' text-sm border-t '> AREA JURIDICO </span>
				</h2>
				<h2 className=' text-sm font-medium flex flex-col justify-center items-center capitalize  border-t-2 border-black/40 mt-20'>
				
				<span className=' text-sm border-t '> COORDINADOR DE VENTAS </span>
				</h2>
				<h2 className=' text-sm font-medium flex flex-col justify-center items-center capitalize  border-t-2 border-black/40 mt-20'>
				
				<span className=' text-sm'> PRODUCCIÓN / MERCADOTECNIA </span>
				</h2>
				<h2 className=' text-sm font-medium flex flex-col justify-center items-center capitalize  border-t-2 border-black/40 mt-20'>
				
				<span className=' text-sm uppercase '> Asesor {asesor.nombre} </span>
				</h2>
				<h2 className=' text-sm font-medium flex flex-col justify-center items-center capitalize  border-t-2 border-black/40 mt-20'>
				
				<span className=' text-sm uppercase '> Cliente {cliente.nombre} </span>
				</h2>
			</div>
			</div>
	
  )
}

export default FormatoIngresoyModeloPdf