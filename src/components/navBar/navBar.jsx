import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { langContext } from "../../context/langContext";
import {MdMenu} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';


const NavBar = () =>{
    const languaje = useContext(langContext);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


    return (
        <>
        <button onClick={()=> languaje.setLang('es-MX')}>esp</button>
        <button onClick={()=> languaje.setLang('en-US')}>eng</button>

        <span className="md:hidden">
                {menuOpen ? (
                    <AiOutlineClose onClick={toggleMenu }/> 
                 ) : (   
                    <MdMenu onClick={toggleMenu}/> 
                )}                
        </span>

        <ul className={`absolute ${menuOpen ? "opacity-100" : "opacity-0"} md:flex md:opacity-100 md:justify-between md:bg-red-300`}>

        <li>
        <Link to="/"> Home </Link>
        </li>

        <li>
        <Link to="/team"> Equipo </Link>
        </li>

        <li>
        <Link to="/menu"> El Menu</Link>
        </li>
        
        <li>
        <Link to="/services"> Servicios </Link>
        </li>
        
        <li>
        <Link to="/events"> Eventos </Link>
        </li>
        
        <li>
        <Link to="/LosCabos"> Los Cabos </Link>
        </li>
        
        <li>
        <Link to="/contactUs"> Contacto </Link>
        </li>

        </ul>

        </>
    )
}

export default NavBar;