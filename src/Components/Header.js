import React, { useState } from "react";
import Status from "./Status";
import Stopwatch from "./Stopwatch";


export default ({players})=>{

    return (
        <section className="score-head">
            <Status players={players}/>
            <div className="scoreboard">
                <h1>SCOREBOARD</h1>
            </div>
            <Stopwatch/>
        </section>
    )
}