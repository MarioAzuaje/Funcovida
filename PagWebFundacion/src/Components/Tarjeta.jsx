function Tarjeta( {title, date, content, imageSrc} ) {

    return (
        <div className="Tarjeta">
            <div className="containerImg">
                <img src={imageSrc} alt="" />
            </div>
            <div className="containerText">
                <b>
                    {title}
                </b>
                <p>
                    {date}
                </p>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Tarjeta