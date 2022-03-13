import React, { useEffect, useState } from "react";


export default ({players})=>{

  
    const totalPlayers=players.length;

    const totalPoints=players.reduce((total,player)=>{

        return total+player.score;
    },0);

    return (
        <div className="players">
            <h2>PLAYERS: {totalPlayers}</h2>
            <h2>TOTAL POINTS: {totalPoints}</h2>
        </div>
    )
}