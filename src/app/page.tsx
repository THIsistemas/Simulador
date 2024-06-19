"use client"
import NavBar from "@/components/Navbar";
import { Image } from "@nextui-org/react";


export default function Home() {
  return (
        
    <main className=" w-full h-auto static ">
       <NavBar/>
      <div className="bg-[url('/1.png')] absolute w-full h-[80vh] p-10">
        <div className="p-10 h-auto w-auto bg-inherit relative">
        <h1 className="text-white text-3xl text-justify"> Somos las mejor empresa en Durango para invertir en Bienes Raices. </h1>
        </div>
        
      
      </div>
    </main>
  );
}
