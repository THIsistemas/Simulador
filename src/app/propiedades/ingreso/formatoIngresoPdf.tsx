import React from 'react'
import { ModeloNegocios } from './page'
import { IoCheckbox, IoHomeOutline, IoHomeSharp } from 'react-icons/io5'

import moment from 'moment'
import 'moment/locale/es';
import { numeroALetras } from '@/lib/formatearNumerosaLetras';

interface props { 
	props : ModeloNegocios
}

const FormatoIngresoPdf = ( modeloNegocios  : props ) => {

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
		tipo
	} = props 

	var numeral = require('numeral');

  return (
	<div className='bg-white text-black w-full'>
		<div className=' grid justify-center bg-white'>
			<h1 className='text-3xl uppercase font-bold text-center bg-primary text-white'>
				FORMATO DE INGRESO DE PROPIEDAD
			</h1>
			<div className='  justify-items-center '>
			<h2 className=' text-xl font-medium flex justify-center items-center capitalize gap-24 pt-5 border-b-2 border-black/40 pb-1'>
				Nombre del Asesor: <span className='font-semibold text-base bg-slate-300/60 p-1 rounded-lg'> {asesor.nombre} </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-center items-center capitalize gap-24 pt-5 border-b-2 border-black/40 pb-1'>
				Fecha de Ingreso: <span className='font-base text-base bg-slate-300/60 p-1 rounded-lg capitalize'> {moment(new Date()).format("LL")} </span>
			</h2>
			<div className='flex gap-10 justify-items-center items-center pt-5 border-b-2 border-black/40 pb-3'>
			<h1 className='text-base font-medium'>Tipo:</h1>
			<h2 className='text-base flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Casa" ? 'text-green-400' : "hidden"}/> <p className={tipo === "Casa" ? 'font-bold' : "font-normal"}> Casa </p>			 
			</h2>
			<h2 className='text-base flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Terreno" ? 'text-green-400' : "hidden"}/><p className={tipo === "Terreno" ? 'font-bold' : "font-normal"}> Terreno </p>				 
			</h2>
			<h2 className='text-base flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Departamento" ? 'text-green-400' : "hidden"}/><p className={tipo === "Departamento" ? 'font-bold' : "font-normal"}> Departamento </p>				 
			</h2>
			<h2 className='text-base flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Edificio" ? 'text-green-400' : "hidden"}/><p className={tipo === "Edificio" ? 'font-bold' : "font-normal"}> Edificio </p>				 
			</h2>
			<h2 className='text-base flex items-center capitalize'>
			 <IoCheckbox className={tipo === "Bodega" ? 'text-green-400' : "hidden"}/><p className={tipo === "Bodega" ? 'font-bold' : "font-normal"}> Bodega </p>				 
			</h2>
			</div>
			<h2 className=' text-base font-medium flex justify-center items-center capitalize gap-24 pt-5 border-b-2 border-black/40 pb-1'>
				Nombre del Propietario: <span className='font-base text-base bg-slate-300/60 p-1 rounded-lg capitalize'> {moment(new Date()).format("LL")} </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-center items-center capitalize gap-24 pt-5 border-b-2 border-black/40 pb-1'>
				Teléfono: <span className='font-base text-base bg-slate-300/60 p-1 rounded-lg capitalize'> {cliente.telefono} </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between capitalize pt-2 border-b-1 border-black/40 pb-1'>
				Costo de venta:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(precioTerreno).format("$0,0.00")} mxn </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-center gap-5  pt-2 border-b-1 border-black/40 pb-1 '>
				Son:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'>( {numeroALetras(precioTerreno)}) <span className='text-xs font-normal'>pesos Mexicanos </span> </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Superficie del Terreno:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {metrosCuadrados} m² </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Superficie de Construcción:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {metrosConstruidos} m² </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Precio X M²:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(precioxm2).format("$0,0.00")} mxn </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Tipos de Credito<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {credito}  </span>
			</h2>
			<h2 className=' text-base font-medium flex flex-col justify-center items-center capitalize border-b-1 border-black/40 pb-1 pt-14'>
				<p>____________________________________________</p>
				<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {cliente.nombre} </span>
			</h2>
			</div>
			<div className='grid grid-cols-2 justify-between gap-3'>
				<h2 className=' text-base font-medium flex flex-col justify-center items-center capitalize border-black/40 pb-1 pt-14'>
				
				<span className=' text-base border-t border-black p-1 '> Lic. Miguel Ángel Rodriguez Torres </span>
				</h2>
				<h2 className=' text-base font-medium flex flex-col justify-center items-center capitalize border-black/40 pb-1 pt-14'>
				
				<span className=' text-base border-t border-black p-1'> AREA JURIDICO </span>
				</h2>
				<h2 className=' text-base font-medium flex flex-col justify-center items-center capitalize border-black/40 pb-1 pt-14'>
				
				<span className=' text-base border-t border-black p-1'> COORDINADOR DE VENTAS </span>
				</h2>
				<h2 className=' text-base font-medium flex flex-col justify-center items-center capitalize border-black/40 pb-1 pt-14'>
				
				<span className=' text-base border-t border-black p-1'> PRODUCCIÓN / MERCADOTECNIA </span>
				</h2>
			</div>
			
			</div>
			
		</div>
	
  )
}

export default FormatoIngresoPdf