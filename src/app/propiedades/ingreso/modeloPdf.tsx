import React from 'react'
import { ModeloNegocios } from './page'
import { IoCheckbox, IoHomeOutline, IoHomeSharp } from 'react-icons/io5'
import { numeroALetras } from '@/lib/formatearNumerosaLetras'

interface props { 
	props : ModeloNegocios
}

const ModeloPdf = ( modeloNegocios  : props ) => {

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
		precioTerreno,
		precioxm2,
		propiedad,
		tipo
	} = props 

	var numeral = require('numeral');

  return (
	<div className='bg-white text-black w-full'>
		<div className=' grid justify-center bg-white'>
			<h1 className='text-4xl uppercase font-bold text-center bg-primary text-white'>
				MODELO DE NEGOCIOS
			</h1>
			<div className='  justify-items-center '>
			<h2 className=' text-2xl font-medium flex justify-center items-center capitalize gap-24 pt-5 border-b-2 border-black/40 pb-1'>
				Propiedad : <span className='font-bold text-xl bg-slate-300/60 p-1 rounded-lg'> {propiedad} </span>
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
			<h2 className=' text-base font-medium flex justify-between capitalize pt-2 border-b-1 border-black/40 pb-1'>
				Costo del Terreno:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(precioTerreno).format("$0,0.00")} mxn </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-center gap-5  pt-2 border-b-1 border-black/40 pb-1 '>
				Son:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'>( {numeroALetras(precioTerreno)}) <span className='text-xs font-normal'>pesos Mexicanos </span> </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Metros Cuadrados:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {metrosCuadrados} m² </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Precio X M²:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(precioxm2).format("$0,0.00")} mxn </span>
			</h2>
			
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Valor Esperado por el Cliente:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(valorEsperado).format("$0,0.00")} mxn </span>
			</h2>
			<h2 className=' text-base font-medium flex flex-col justify-center items-center capitalize border-b-1 border-black/40 pb-1 pt-14'>
				<p>____________________________________________</p>
				<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {cliente.nombre} </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Comision Establecida:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(comision).format("$0,0.00")} mxn </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-center gap-5  pt-2 border-b-1 border-black/40 pb-1 '>
				Son:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'>( {numeroALetras(comision)}) <span className='text-xs font-normal'>pesos Mexicanos </span> </span>
			</h2>
		
			<div className='grid grid-cols-3 justify-items-center '>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Comision THI:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(comisionThi).format("$0,0.00")} mxn </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Comision Ingresador:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(comisionIngresador).format("$0,0.00")} mxn </span>
			</h2>
			<h2 className=' text-base font-medium flex justify-between  pt-2 border-b-1 border-black/40 pb-1'>
				Comision Cerrador:<span className='font-bold text-base bg-slate-300/60 p-1 rounded-lg'> {numeral(comisionCerrador).format("$0,0.00")} mxn </span>
			</h2>
			</div>
			<div className='flex justify-between gap-3'>
				<h2 className=' text-base font-medium flex flex-col justify-center items-center capitalize border-black/40 pb-1 pt-14'>
				
				<span className=' text-base border-t border-black p-1 '> Lic. Miguel Ángel Rodriguez Torres </span>
				</h2>
				<h2 className=' text-base font-medium flex flex-col justify-center items-center capitalize border-black/40 pb-1 pt-14'>
				
				<span className=' text-base border-t border-black p-1'> {asesor.nombre} </span>
				</h2>
			</div>
			
			</div>
			
		</div>
	</div>
  )
}

export default ModeloPdf