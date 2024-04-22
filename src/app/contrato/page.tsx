"use client"
import NavBar from "@/components/Navbar";
import { Button, Image, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import { useState } from "react";
import moment from "moment"
import 'moment/locale/es';
import { isEmpty, isNumber } from "../lib/validators";

const columns = [
  {
    key: "mes",
    label: "Mes",
  },
  {
    key: "numero",
    label: "Numero",
  },
   {
    key: "pagoMensual",
    label: "Pago Mensual",
  },

  {
    key: "pagoSinInteres",
    label: "Pago Sin Interes",
  },
 
  {
    key: "pagodeinteres",
    label: "Pago Mensual De Intereses",
  },
  {
    key: "saldoPendiente",
    label: "Saldo Pendiente",
  },
];

export default function Home() {
	var numeral = require('numeral');
const 	[montoTotal, setMontoTotal] = useState<number>(0)
const 	[meses, setMeses] = useState<number>(0)
const 	[tasaInteres, setTasaInteres] = useState<number>(0)
const 	[precioxmetro, setPrecioxMetro] = useState<number>(0)
const 	[metros, setMetros] = useState<number>(0)
const 	[precioTotalpormetro2, setprecioTotalPorMetro2] = useState<number>(0)
const 	[pagoMensual, setPagoMensual] = useState<number>(0)
const 	[enganche, setEnganche] = useState<number>(0)
const 	[TotalconIntereses, setTotalConIntereses] = useState<number>(0)
const 	[totalReal, setTotalReal] = useState<number>(0)
const 	[montodeInteres, setMontoDeInteres] = useState<number>(0)
const 	[anualidad, setAnualidad] = useState<number>(0)
const 	[cliente, setCliente] = useState<string>("")

const isValid = isNumber(precioxmetro.toString()) && isNumber(meses.toString()) && isNumber(tasaInteres.toString()) && isNumber(enganche.toString())
console.log(isValid);


	const handleInversion = () =>{
		let precioTotalpormetro2 = (metros * precioxmetro)
		let CostoaFinanciar = (precioTotalpormetro2 - enganche)
		
		let montodeinteres = (((meses/12)*(tasaInteres/100))*CostoaFinanciar)
		let TotalconIntereses:number = (CostoaFinanciar + montodeinteres) 
		let TotalReal:number = (precioTotalpormetro2 + montodeinteres)
		/* let montoInteres:number = (inversion*tasaInteres) */
		let pagomensual: number = (CostoaFinanciar+montodeinteres-anualidad)/meses

		setprecioTotalPorMetro2(precioTotalpormetro2)
		setTotalReal(TotalReal)
		setTotalConIntereses(TotalconIntereses)
		setMontoDeInteres(montodeinteres)
		setPagoMensual(pagomensual)
		
	}
const corridafinanciera = (fecha:Date, montototal:number , pagosafinanciar:number , pagomensual:number, intereses:number) => {
  let corrida = []
  let saldoPendiente = montototal;
  let pagomensualInteres = intereses/pagosafinanciar
  
  
  for (let i = 0; i < pagosafinanciar; i++) {
    const pagoSinInteres =   pagomensual - pagomensualInteres
      const mess = fecha.setMonth(fecha.getMonth()+1)
      let numero
      saldoPendiente -= pagomensual;
	 
    corrida.push({
            numero : i + 1,
            mes: moment(mess).format("L") ,
            pagoMensual : numeral(pagomensual).format("$0,0.000"),
            pagodeinteres: numeral(pagomensualInteres).format("$0,0.000"),
            pagoSinInteres : numeral(pagoSinInteres).format("$0,0.000"),
            saldoPendiente : saldoPendiente <= 0 ? 0 : numeral(saldoPendiente).format("$0,0.000") ,
        });
        
         
  }
  return corrida;
}
const fecha = new Date()
const corrida = corridafinanciera( fecha, (totalReal-enganche), meses, pagoMensual, (totalReal - precioTotalpormetro2))


  return (
        
    <main className=" text-black w-full h-auto static bg-slate-200">
     
      <div className=" bg-slate-200 h-full sm:flex grid p-10 sm:p-20 sm:justify-center justify-items-center">
			<div className="bg-slate-200 w-auto sm:flex  ">
				<h1 className="text-primary text-3xl font-semibold sm:hidden flex ">
          
			Simula una Corrida Financiera!
			</h1>
			<form className=" grid justify-evenly m-auto p-5  w-full" action="submit" onSubmit={()=>handleInversion}>
			<h1 className="text-primary text-3xl font-semibold hidden sm:flex ">
			Simula un Corrida Financiera!
			</h1>
			<Input
              type="text"
              onChange={(e)=> setCliente(e.target.value)}
              label="Nombre del Cliente"
			  className='text-black pt-10'
              variant='flat'
              name="cliente"
              id="cliente"

				/>
			<Input
              type="text"
              onChange={(e)=> setMetros(Number(e.target.value))}
              label="Metros cuadrados"
			  className='text-black pt-10'
              variant='flat'
              name="metros"
              id="metros"
              isInvalid={!isNumber(metros.toString())}
			        errorMessage={!isNumber(metros.toString()) && "Porfavor escriba un valor"}

				/>
			<Input
              type="text"
              onChange={(e)=> setPrecioxMetro(Number(e.target.value))}
              label="Precio Por Metro cuadrado"
			  className='text-black pt-10'
              variant='flat'
              name="precio"
              id="precio"
              isInvalid={!isNumber(precioxmetro.toString())}
			        errorMessage={!isNumber(precioxmetro.toString()) && "Porfavor escriba un valor"}

				/>
				<Input
              type="text"
              onChange={(e)=> setEnganche(Number(e.target.value))}
              label="Enganche"
			  className='text-black pt-10'
              variant='flat'
              name="enganche"
              id="enganche"
              isInvalid={!isNumber(enganche.toString())}
			        errorMessage={!isNumber(enganche.toString()) && "Porfavor escriba un valor correcto"}
            />
				<Input
              type="text"
              onChange={(e)=> setAnualidad(Number(e.target.value))}
              label="Anualidad"
			  className='text-black pt-10'
              variant='flat'
              name="anualidad"
              id="anualidad"
              isInvalid={!isNumber(anualidad.toString())}
			        errorMessage={!isNumber(anualidad.toString()) && "Porfavor escriba un valor correcto"}
            />
			<Input
              type="text"
              onChange={(e)=> setMeses(Number(e.target.value))}
              label="Meses a financiar"
			  className='text-black pt-10'
              variant='flat'
              name="meses"
              id="meses"
              isInvalid={!isNumber(meses.toString())}
			        errorMessage={!isNumber(meses.toString()) && "Porfavor escriba un valor correcto"}
            />
			
			<Input
              type="text"
              onChange={(e)=> setTasaInteres(Number(e.target.value))}
              label="Tasa de Interes"
			  className='text-black pt-10'
              variant='flat'
              name="tasainteres"
              id="tasainteres"
              isInvalid={!isNumber(tasaInteres.toString())}
			        errorMessage={!isNumber(tasaInteres.toString()) && "Porfavor escriba un valor correcto"}
            />
			<div className="pt-10">
			<Button className="bg-primary text-white" onClick={handleInversion} isDisabled = {!isValid}>
			Simular
		</Button>
			</div>
		
		</form>
		
		</div>
		<div className="sm:px-10 sm:pt-10 ">
		<div className="bg-white drop-shadow-md shadow-black p-5 gap-5 text-black w-90">
			<h1 className="font-bold text-2xl text-red-700 flex justify-between">
				Ficha del Cliente
              <Image className=' shadow-white w-auto h-auto shadow-sm cursor-pointer sm:flex justify-items-center '   width={60} height={60} src={"/descarga.jpg"} alt="logo"  />

			</h1>
			<h1 className=" text-red-700 flex justify-between pt-2 text-xl">
				 {cliente}
			</h1>
			<div className="sm:px-2 sm:p-5">
			<h1 className="font-bold flex justify-between pt-2">
				Metros Cuadrados : <span className="text-black font-normal"> {metros} m² </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Precio por metro Cuadrado : <span className="text-black font-normal"> {numeral(precioxmetro).format('$0,0')} mxn </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Anualidad : <span className="text-black font-normal"> {numeral(anualidad).format('$0,0')} mxn </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Meses : <span className="text-black font-normal"> {meses} Meses </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Tasa Interes Anual : <span className="text-black font-normal"> {(tasaInteres)} % </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Precio Total por metro Cuadrado : <span className="text-black font-normal"> {numeral(precioTotalpormetro2).format('$0,0')} mxn </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Precio a Financiar : <span className="text-black font-normal"> {numeral((precioTotalpormetro2-enganche)).format('$0,0')} mxn </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				 Monto de Interes : <span className="text-black font-normal"> {numeral(montodeInteres).format('$0,0')} mxn </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2 gap-2">
				Pago Mensual : <span className="text-black font-normal"> {numeral(pagoMensual).format('$0,0')} mxn </span>
			</h1>
			</div>
		</div>
		</div>
      </div>
	    <Table aria-label="Example table with dynamic content" className="min-w-24 p-5">
      <TableHeader columns={columns}>
        {(column) => <TableColumn className="text-red-700 font-bold" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={corrida}>
        {(item) => (
          <TableRow key={item.numero}>
            {(columnKey) => <TableCell className=" font-bold ">{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </main>
  );
}
