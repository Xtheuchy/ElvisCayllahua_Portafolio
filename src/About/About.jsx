import mi_perfil from '../assets/mi_perfil.webp'
import './About.css'
export function About() {
    return (
        <section className="container-about">
            <div className="title-about">
                <h1><i class="fa-solid fa-address-card"></i> Sobre Mí</h1>
            </div>
            <section className="about">
                <div className="info-about">
                    <p>Soy Elvis Victor Cayllahua Condori, un apasionado de la programación
                        con experiencia en desarrollo web (HTML, CSS, JavaScript) y conocimientos
                        en Python y Java. <br /> <br /> Actualmente, estoy profundizando en JavaScript y aprendiendo
                        frameworks como React y Astro. Mi objetivo es dominar JavaScript y expandir
                        mis habilidades en diversas tecnologías para desarrollar proyectos más complejos
                        y desafiantes.<br /> <br /> Me considero un aprendiz constante, capaz de trabajar tanto en
                        equipo como de manera independiente, siempre buscando mejorar y aportar soluciones innovadoras.</p>
                    <div className="redes">
                        <ul>
                            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-tiktok"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
                <picture className="image">
                    <img src={mi_perfil} alt="" />
                </picture>
            </section>
        </section>
    )
}