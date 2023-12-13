
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./views/home/home"
import Chef from "./views/chef/chef"
import Equipo from "./views/equipo/equipo"
import Menu from "./views/menu/menu"
import Servicios from "./views/servicios/servicios"
import Eventos from "./views/eventos/eventos"
import Cabos from "./views/cabos/cabos"
import Contacto from "./views/contacto/contacto"
import NavBar from "./components/navBar/navBar"
import { LangProvider } from "./context/langContext"

function App() {
  

  return (
    <>
    <LangProvider>

    <BrowserRouter>
    

    <div className="md:flex">
    <NavBar />
    

    <div className="flex-1 h-screen overflow-hidden">
    <Routes>
      <Route exact path="/" Component ={Home}/>
      <Route exact path="/chef" Component ={Chef}/>
      <Route exact path="/team" Component ={Equipo}/>
      <Route exact path="/menu" Component ={Menu}/>
      <Route exact path="/services" Component ={Servicios}/>
      <Route exact path="/events" Component ={Eventos}/>
      <Route exact path="/LosCabos" Component ={Cabos}/>
      <Route exact path="/contactUs" Component ={Contacto}/>
    </Routes>
    </div>
    </div>
    
    </BrowserRouter>
     
    </LangProvider> 
    </>
  )
}

export default App
