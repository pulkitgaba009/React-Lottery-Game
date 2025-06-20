import { useState } from "react";

function Lottery(){
    let generateNumbers=()=>{
        let digit1 = Math.floor(Math.random()*10);
        let digit2 = Math.floor(Math.random()*10);
        let digit3 = Math.floor(Math.random()*10);

        let num =[digit1,digit2,digit3];
        let sum = digit1 + digit2 + digit3;
        let win = false;

        if (sum == 15){
            win = true;
        }else{
            win = false;
        }
        return {winStatus:win,lotteryNumber:num}
    }

    let [ lottery, setLottery  ] = useState(generateNumbers());

    function getData(){
        setLottery(generateNumbers())
    }

    return(
        <>
            <h1>{lottery.winStatus?"Congratutaloins you WON":"LOTERY"}</h1>
            <h3>Lottery ticket = {...lottery.lotteryNumber}</h3>
            <button onClick={getData}>Get new Ticket</button>
        </>
    )
}

export default Lottery