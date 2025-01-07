import './CardSkill.css'
export function CardSkill({nivel,link}) {
    return (
        <section className='card'>
            <img src={link} alt="" />
            <div className="text">
                <h1>Nivel: {nivel}</h1>
            </div>
        </section>
    )
}