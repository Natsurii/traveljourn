import React from "react";
import '../styles/Log.css'
function Log(props){

    return(
        <section>
            <img src={`../../public/assets/loc/${props.imgSrc}`} alt={props.imgAlt} className="section--img"/>

            <div className="section--details">

                
                <p className="country">
                <img src="../../public/assets/pin.svg" alt="pin" />
                <span className="country">{`${props.country}`.toLocaleUpperCase()}</span>
                <a href={props.gmaps}>View on Google Maps</a>
                </p>


                <h1 className="name">{props.name}</h1>

                <p className="date">{props.entry} - {props.exit}</p>

                <p className="description">{props.description}</p>


            </div>
        </section>
    )
}

export default Log