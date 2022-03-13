import React from "react";
import Counter from "./Counter";
import crown from "../images/crown.png"

export default ()=>{

    
    return (

        <section className="player">
            <div className="name">
                <i className="fas fa-times"></i>
                <img src={crown} alt="crown"/>
                <h1>GUIL</h1>
            </div>
            <Counter/>
        </section>
    )
}