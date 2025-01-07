import { CardService } from "../Cards/CardService";
import './Services.css'
export function Services() {
    return (
        <section className="services">
            <h1 className="title_service">
                <i className="fas fa-laptop-code "></i> Servicios
            </h1>
            <div className="contianer-card-service">
                <CardService
                    icon={"fas fa-expand-arrows-alt"}
                    Service_p="Creo páginas web adaptables a cualquier dispositivo, con diseños modernos y funcionales que aseguran una experiencia fluida y agradable para los usuarios."
                />
                <CardService
                    icon={"fas fa-palette"}
                    Service_p="Realizo prototipos de interfaces intuitivas y visualmente atractivas, centrados en ofrecer una experiencia de usuario fluida y agradable. Cada diseño busca combinar estética y funcionalidad para maximizar la interacción y satisfacción del usuario."
                />
                <CardService
                    icon={"fas fa-desktop"}
                    Service_p="Construyo interfaces web modernas con HTML y CSS, mientras sigo perfeccionando mis habilidades en JavaScript para añadir interactividad y dinamismo a mis proyectos."
                />
            </div>
        </section>
    )
}