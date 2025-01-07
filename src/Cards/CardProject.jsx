import "./CardProject.css";
export function CardProject({ I_Project, N_project, D_Project, txt_tec, link }) {
  return (
    <section className="card-project">
      <img src={I_Project} alt="" />
      <div className="project-txt">
        <div className="info-txt">
          <h1 className="title-card-project">{N_project}</h1>
          <p className="card-descripcion">{D_Project}</p>
          <div className="tec-txt">
            <h1>Tecnologia</h1>
            <p>{txt_tec}</p>
          </div>
        </div>
        <div className="verproject">
          <a href="https://github.com/Xtheuchy" target="_blank"><i className="fa-solid fa-code"></i> Código</a>
          <a href={link}><i className="fa-solid fa-file"></i> Ver proyecto</a>
        </div>
      </div>
    </section>
  );
}
