import React, { useState } from "react";
import AddPlayerForm from "./Components/AddPlayerForm";
import Header from "./Components/Header";
import Player from "./Components/Player";

export default ()=>{

  let [players, setPlayers] = useState([
    {
      name:"Player1",
      score:0,
      id:1
    },
    
    {
      name:"Player2",
      score:0,
      id:2
    },
    {
      name:"Player3",
      score:0,
      id:3
    }
  ]);


  //handle score change

  let handleScoreChange=(index,delta)=>{

    setPlayers((prev)=>{

      const updatedPlayers=[...prev];


      const updatedPLayer={...updatedPlayers[index]};

      updatedPLayer.score+=delta;

      updatedPlayers[index]=updatedPLayer;

      return updatedPlayers;
    })

  }




  //handle add player

  //handle get highscore

  //handle removeplayer


  return (
     <main>
       <Header players ={players}/>
       {/* <Player/>
       <AddPlayerForm/> */}
     </main>
  )

}
