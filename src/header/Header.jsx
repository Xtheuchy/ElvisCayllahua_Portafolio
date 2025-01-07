import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Header.css'; // Importa tu archivo de estilos
import new_logo from './../assets/new_logo.webp';
export function Header() {
    const typedElement = useRef(null); // Referencia para el Typed.js

    useEffect(() => {
        // Configuración de Typed.js
        const options = {
            strings: ['Elvis Cayllahua Condori'],
            typeSpeed: 100,
            backSpeed: 90,
            loop: true,
            mobile: true
        };

        // Inicializar Typed.js en el span referenciado
        const typed = new Typed(typedElement.current, options);

        // Limpiar la instancia al desmontar el componente
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <header>
            <nav className="nav-bar">
                <h1 className="title">
                    Elvis Cayllahua Condori
                </h1>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#Proyectos">Proyectos</a></li>
                    <li><a href="#Services">Servicios</a></li>
                    <li><a href="#About">Sobre mí</a></li>
                </ul>
                <h1>
                    <a className='contacto' href="#">contacto</a>
                </h1>
            </nav>
            <section className="presentation">
                <div className="text-presentation">
                    <h1>Hola, soy <span ref={typedElement}></span> <br />Desarrollador principiante con conocimientos en HTML, CSS, JavaScript,
                     Python y Java. Estoy aprendiendo a crear soluciones modernas y funcionales mientras mejoro mis habilidades.</h1>
                    <a href="#About"><button>Conóceme mas</button></a>
                </div>
                <div className="presentation-image">
                    <img src={new_logo} alt="" />
                </div>
            </section>
        </header>
    );
}