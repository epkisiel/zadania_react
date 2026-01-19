import {useState, useEffect} from "react";

function Timer(){
    const [przycisk,setPrzycisk]=useState(false);
    const [licznik, setLicznik]=useState(0)

    useEffect(()=>{
        if(przycisk==true){
            const interval=setInterval(()=>{
                setLicznik(licznik+1);
            },1000)}
        
        else
        return ()=>{
            clearInterval(interval);
            setLicznik(0)
        }
        
    },[przycisk]);

    return(
        <div>
            <p>{licznik}</p>
            <button onClick={()=>setPrzycisk(!przycisk)}>Włącz/wyłącz licznik</button>
        </div>
    )
}
export default Timer;