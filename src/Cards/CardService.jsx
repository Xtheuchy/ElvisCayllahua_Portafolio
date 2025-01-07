import './CardService.css'
export function CardService({icon,Service_p}) {
    return (
        <section className="CardService">
            <div className="icon">
                <i className={icon}></i>
            </div>
            <p className="text-service">
                {Service_p}
            </p>
        </section>
    )
}