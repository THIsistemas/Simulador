"use client"
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import ModeloPdf from './modeloPdf'
import FormatoIngresoPdf from './formatoIngresoPdf'
import FormatoIngresoyModeloPdf from './formatoingresoymodelo'


export interface ModeloNegocios {
  propiedad : string
  tipo: "Casa" | "Terreno" | "Departamento" | "Bodega" | "Edificio"
  precioTerreno : number
  metrosCuadrados : number
  metrosConstruidos :number
  precioxm2 : number
  valorEsperado : number
  cliente: Cliente
  comision: number
  credito : string
  comisionThi: number
  comisionIngresador : number
  comisionCerrador : number
  descripcion: string
  documentos: string
  asesor: Asesor
}

const tipo  = [
  {label : "Casa",
  } ,
  {label : "Terreno",
  } ,
  {label : "Departamento",
  } ,
  {label : "Edificio",
},
  {label : "Bodega",
}
]

const tipoCredito = [
  {label : "Contado",
  } ,
  {label : "Contado y Credito",
  } ,
  {label : "Contado , Credito e Infonavit",
  } ,
  {label : "Contado , Credito e INFONAVIT, CONFINAVIT",
  },
]

interface Asesor {
  nombre : string
  telefono : string
}

const defaultAsesorData =  {
  nombre : "",
  telefono : "",
}
const inputsAsesor = [
  {label : "Nombre",
    id: "nombre"
  } ,
 /*  {label : "Teléfono",
    id: "telefono"
  } , */
]
interface Cliente {
  nombre : string
  telefono : string
  correo : string
  direccion : string
  curp : string
  colonia: string
  referencia : string
  telefonoReferencia : string
}

const defaultClienteData:Cliente = {
  nombre :    "",
  telefono :    "",
  correo :    "",
  direccion :     "",
  curp :    "",
  colonia:    "",
  referencia :    "",
  telefonoReferencia :    "",
  }


const inputsCliente = [
  {label : "Nombre",
    id: "nombre"
  } ,
  {label : "Teléfono",
    id: "telefono"
  } ,
  {label : "Correo Electronico",
    id: "correo"
  } ,
  {label : "Dirección Propiedad",
    id: "direccion"
  } ,


 

]


const defaultModeloNegociosData:ModeloNegocios = {
      propiedad:    "",
      tipo : "Casa",
      precioTerreno : 0,
      metrosCuadrados : 0,
      metrosConstruidos: 0,
      precioxm2 : 0,
      valorEsperado : 0,
      cliente: defaultClienteData,
      comision: 0,
      comisionThi: 0,
      comisionIngresador : 0,
      comisionCerrador : 0,
      credito : "",
      descripcion:"",
      documentos: "",
      asesor:defaultAsesorData 
  }

const inputsModeloNegocios = [
    {label : "Nombre de la Propiedad",
    id: "propiedad"
  } ,
 /*  {label : "Tipo",
    id: "tipo"
  } , */
  {label : "Precio de la Propiedad",
    id: "precioTerreno"
  } ,
  {label : "Metros Cuadrados de la Propiedad (Terreno)",
    id: "metrosCuadrados"
  } ,
  {label : "Metros Construidos de la Propiedad ",
    id: "metrosConstruidos"
  } ,
  /* {label : "Precio por metro cuadrado",
    id: "precioxm2"
  } , */
  {label : "Valor esperado por el Cliente",
    id: "valorEsperado"
  } ,
  {label : "Comision Total",
    id: "comision"
  } ,
  {label : "Comision para Tu Hogar Inmobiliaria (En Porcentaje) %",
    id: "comisionThi"
  } ,
  {label : "Comision para el Ingresador (En Porcentaje) %",
    id: "comisionIngresador"
  } ,
  {label : "Comision para el Cerrador (En Porcentaje) % ",
    id: "comisionCerrador"
  } ,
 
]

const Ingreso = () => {

 

  

const [modeloNegocios , setModeloNegocios] = useState<ModeloNegocios>(defaultModeloNegociosData)
const [cliente , setCliente] = useState<Cliente>(defaultClienteData)
const [asesor , setAsesor] = useState<Asesor>(defaultAsesorData)

  const handleSetModelo = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setModeloNegocios((dataValue) => ({ ...dataValue, [name]: value }));
    
  };
const handleSetCliente = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCliente((dataValue) => ({ ...dataValue, [name]: value })); 
  };

  const handleSetAsesor = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setAsesor((dataValue) => ({ ...dataValue, [name]: value })); 
  };


  const comisionThiFlag = (modeloNegocios.comision*(modeloNegocios.comisionThi/100))  
  const comisionIngresadorFlag = (modeloNegocios.comision*(modeloNegocios.comisionIngresador/100))
  const comisionCerradorFlag = (modeloNegocios.comision*(modeloNegocios.comisionCerrador/100))
 
  const preciom2flag = modeloNegocios.precioTerreno/modeloNegocios.metrosCuadrados

 
  const isValid  = comisionThiFlag+comisionIngresadorFlag+comisionCerradorFlag <= modeloNegocios.comision

  const RegisterPropiedad = async () => {

    await setModeloNegocios(defaultModeloNegociosData)

    await setModeloNegocios( {
    ...modeloNegocios,
    comisionThi: comisionThiFlag,
    comisionIngresador: comisionIngresadorFlag,
    comisionCerrador: comisionCerradorFlag,
    precioxm2: preciom2flag,
    cliente,
    asesor
  })

    window.print();
  
  }

  return (
    <main className='bg-white  w-full'>
       <form action="submit" className=" p-5 bg-slate-200/90 h-auto w-full rounded-xl shadow-2xl print:hidden">
			<h2 className="p-5 font-bold text-4xl  text-primary/100 pb-5 text-center">
			Registra una Propiedad
			</h2>
        <div className=" md:grid md:grid-cols-2 gap-8">
       
         <div>
    <h2 className="p-5 flex font-bold text-2xl  text-black pb-5">
		        	Datos del Cliente
			      </h2>
             <div className=' ' >
       {inputsCliente.map((item, index) => 
    <Input
    key={index}
    type= "text"
    onChange={handleSetCliente}
    label= {`${item.label} del Cliente`}
    className='text-black pt-10'
    variant='flat'
    name={`${item.id}`}
    id={`${item.id}`}
    />  
    )
}
  <div>
   <h2 className="p-5 font-bold text-2xl  text-black ">
		        	Datos del Asesor
			      </h2>
          
       {inputsAsesor.map((item, index) => 
    <Input
    key={index}
    type= "text"
    onChange={handleSetAsesor}
    label= {`${item.label} del Asesor`}
    className='text-black pt-5'
    variant='flat'
    name={`${item.id}`}
    id={`${item.id}`}
    />  
    )
}
      <div className='pt-20'>
                     <Button className="bg-primary text-white print:hidden  w-full hidden md:block" isDisabled={!isValid}  onClick={RegisterPropiedad}>Registrar</Button>

      </div>

          </div>
          </div>
         </div>
        
         
          <div>
 <h2 className="p-5 font-bold text-2xl  text-black pb-5">
		        	Propiedad y Modelo
			      </h2>
          <div className='grid grid-cols-2 gap-4 ' >
       {inputsModeloNegocios.map((item, index) => 
    <Input
    key={index}
    type= "text"
    onChange={handleSetModelo}
    label= {`${item.label}`}
    className='text-black pt-10'
    variant='flat'
    name={`${item.id}`}
    id={`${item.id}`}
    />  
    )
}
 <Textarea
    type= "text"
    onChange={handleSetModelo}
    label= {`Descripcion de la Propiedad`}
    className='text-black pt-10'
    variant='flat'
    name={`descripcion`}
    id={`descripcion`}
    /> 
 <Textarea
    type= "text"
    onChange={handleSetModelo}
    label= {`Papeleria Entregada`}
    className='text-black pt-10'
    variant='flat'
    name={`documentos`}
    id={`documentos`}
    /> 
 <Select
			items={tipo}
			label="Escoja el Tipo"
			className=" text-black pt-10"
			onChange={handleSetModelo}
			id='tipo'
			name='tipo'
			>
        {(tipo:any) => <SelectItem className='text-black' key={tipo.label}>{tipo.label}</SelectItem>}
    		
      </Select>
 <Select
			items={tipoCredito}
			label="Escoja el tipo de Credito"
			className=" text-black pt-10"
			onChange={handleSetModelo}
			id='credito'
			name='credito'
			>
        {(tipo:any) => <SelectItem className='text-black' key={tipo.label}>{tipo.label}</SelectItem>}
    		
      </Select>
       
     </div> 
          </div>
      <div className='pt-20'>
      <Button className="bg-primary text-white print:hidden  w-full block md:hidden" isDisabled={isValid}  onClick={RegisterPropiedad}>Registrar</Button>

      </div>
        
      </div>
      
      </form>
     {/*  <div className='   hidden bg-white pb-10'>
      <ModeloPdf props= {modeloNegocios}/>
      </div>
    <div className=' hidden  bg-white pt-10'>
      <FormatoIngresoPdf props= {modeloNegocios}/>
    </div> */}
    <div className='mr-8 ml-8'>
      <FormatoIngresoyModeloPdf props= {modeloNegocios}/>
    </div>
    </main>
   
  )
}

export default Ingreso