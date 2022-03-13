import React, { useState } from "react"


export default ({index,score,changeScore})=>{

    let [count, setCount] = useState(0);

    let handleMinus=()=>{
        if(count>0){
            setCount(prev=>prev -1);
        }
    }
    let handlePlus=()=>{
        setCount(prev=>prev +1);
    }

    return (
        <div className="score-container">
            <h2 className="minus" onClick={handleMinus}>-</h2>
            <h1 className="score">{count}</h1>
            <h2 className="plus" onClick={handlePlus}>+</h2>
        </div>
    )
}