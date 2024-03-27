"use client"
import NavBar from "@/components/Navbar";
import { Button, Image, Input } from "@nextui-org/react";
import { useState } from "react";


export default function Home() {
	var numeral = require('numeral');
const 	[montoTotal, setMontoTotal] = useState<number>(0)
const 	[meses, setMeses] = useState<number>(0)
const 	[tasaInteres, setTasaInteres] = useState<number>(0)
const 	[inversion, setInversion] = useState<number>(0)
const 	[pagoMensual, setPagoMensual] = useState<number>(0)

	const handleInversion = () =>{
		let tasainteres:number = tasaInteres/100 
 		let tasaInteresNeta:number = tasainteres*meses
		let montoInteres:number = inversion*tasaInteresNeta
		let pagomensual: number = (inversion+montoInteres)/meses

		setMontoTotal(montoInteres)
		setPagoMensual(pagomensual)
		
	
	}


  return (
        
    <main className=" text-black w-full h-auto static bg-slate-200">
     
      <div className=" bg-slate-200 h-full sm:flex grid p-10 sm:p-20 sm:justify-center justify-items-center">
			<div className="bg-slate-200 w-1/3 sm:flex  ">
			
			<form className=" grid justify-evenly m-auto p-5  w-full" action="submit" onSubmit={()=>handleInversion}>
			<h1 className="text-primary text-3xl font-semibold ">
			Simula tu Inversión!
			</h1>
			<Input
              value={(inversion).toString()}
              type="text"
              onChange={(e)=> setInversion(Number(e.target.value))}
              label="Monto a Invertir"
			  className='text-black pt-10'
              variant='flat'
              name="inversion"
              id="inversion"

				/>
			<Input
              value={(meses).toString()}
              type="text"
              onChange={(e)=> setMeses(Number(e.target.value))}
              label="Meses a financiar"
			  className='text-black pt-10'
              variant='flat'
              name="meses"
              id="meses"
            />
			<Input
              value={(tasaInteres).toString()}
              type="text"
              onChange={(e)=> setTasaInteres(Number(e.target.value))}
              label="Tasa de Interes"
			  className='text-black pt-10'
              variant='flat'
              name="tasainteres"
              id="tasainteres"
            />
			<div className="pt-10">
			<Button className="bg-primary text-white" onClick={handleInversion}>
			Simular
		</Button>
			</div>
		
		</form>
		
		</div>
		<div className="sm:px-10 sm:pt-10 ">
		<div className="bg-white drop-shadow-md shadow-black p-5 gap-5 text-black w-80">
			<h1 className="font-bold text-2xl text-red-700">
				Ficha de Inversion
			</h1>
			<div className="sm:px-2 sm:p-5">
			<h1 className="font-bold flex justify-between pt-2">
				Inversion : <span className="text-black font-normal"> {numeral(inversion).format('$0,0')} mxn  </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Meses : <span className="text-black font-normal"> {meses} Meses </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Tasa Interes Mensual : <span className="text-black font-normal"> {tasaInteres} % </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Tasa Interes Neta : <span className="text-black font-normal"> {(tasaInteres*meses)} % </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2">
				Rendimiento : <span className="text-black font-normal"> {numeral(montoTotal).format('$0,0')} mxn </span>
			</h1>
			<h1 className="font-bold flex justify-between pt-2 gap-2">
				Pago Mensual : <span className="text-black font-normal"> {numeral(pagoMensual).format('$0,0')} mxn </span>
			</h1>
			</div>
		</div>
		</div>
			
		
      </div>
    </main>
  );
}
