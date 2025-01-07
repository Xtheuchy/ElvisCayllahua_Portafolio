import project_1 from "./../assets/image_projects/project_1.webp";
import Cards from "./../assets/image_projects/Cards.webp";
import clon_instagram from "./../assets/image_projects/clon_instagram.webp";
import formulario from "./../assets/image_projects/formulario.webp";
import naruto from "./../assets/image_projects/naruto.webp";
import Photography from "./../assets/image_projects/Photography.webp";
import "./Projects.css";
import { CardProject } from "../Cards/CardProject";
export function Projects() {
    return (
        <section className="Container-projects">
            <h1 className="title-project">
                <i className="fas fa-code"></i> Mis Proyectos
            </h1>
            <section className="container-card-project">
                <CardProject
                    I_Project={project_1}
                    N_project="BitesFood"
                    D_Project="Diseño de la sección About para un restaurante, creada con HTML y CSS. Combina texto e imágenes en un diseño moderno que resalta la tradición y modernidad de la cocina."
                    txt_tec="Html y Css"
                    link={"#"}
                />
                <CardProject
                    I_Project={Cards}
                    N_project="Interactive Cards"
                    D_Project="Diseño de la sección About para un restaurante, creada con HTML y CSS. Combina texto e imágenes en un diseño moderno que resalta la tradición y modernidad de la cocina."
                    txt_tec="Html y Css"
                    link={"#"}
                />
                <CardProject
                    I_Project={clon_instagram}
                    N_project="Clon instagram"
                    D_Project="Diseño de la sección About para un restaurante, creada con HTML y CSS. Combina texto e imágenes en un diseño moderno que resalta la tradición y modernidad de la cocina."
                    txt_tec="Html y Css"
                    link={"#"}
                />
                <CardProject
                    I_Project={formulario}
                    N_project="Formulario"
                    D_Project="Diseño de la sección About para un restaurante, creada con HTML y CSS. Combina texto e imágenes en un diseño moderno que resalta la tradición y modernidad de la cocina."
                    txt_tec="Html y Css"
                    link={"#"}
                />
                <CardProject
                    I_Project={naruto}
                    N_project="Naruto"
                    D_Project="Diseño de la sección About para un restaurante, creada con HTML y CSS. Combina texto e imágenes en un diseño moderno que resalta la tradición y modernidad de la cocina."
                    txt_tec="Html y Css"
                    link={"#"}
                />
                <CardProject
                    I_Project={Photography}
                    N_project="Fotografia"
                    D_Project="Diseño de la sección About para un restaurante, creada con HTML y CSS. Combina texto e imágenes en un diseño moderno que resalta la tradición y modernidad de la cocina."
                    txt_tec="Html y Css"
                    link={"#"}
                />
            </section>
        </section>
    );
}
