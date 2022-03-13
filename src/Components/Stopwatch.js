import React, { useEffect, useState } from "react";

export default ()=>{

    const [isRunning ,setIsRunning]=useState(false);

    const [elapsedTime,setElipsedTime]=useState(0);

    const[previousTime,setPreviousTime]=useState(0);


    let intervalId;

    let seconds=0;


    useEffect(()=>{

        intervalId=setInterval(()=>tick(),100);

    },[])



    const tick=()=>{
       
           if(isRunning){

             console.log("aici");
           }
    }

   
    const handleStop=()=>{

        setIsRunning(prev=>!prev);



        console.log(isRunning);
        if(!isRunning){

            setPreviousTime(Date.now());
        }

    }


   


    return(
        <div className="stopwatch">
            <h3>STOPWATCH</h3>
            <h1>{seconds}</h1>


            <div className="btns">
                <a href="#" className="start" onClick={handleStop}>

                        {isRunning? "Stop": "Start"}

                </a>
                {/* <a href="#" className="reset" onClick={handleReset}>RESET</a> */}
            </div>
        </div>
    )
}