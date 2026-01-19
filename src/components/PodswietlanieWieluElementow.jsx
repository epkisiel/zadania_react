import { useState } from "react";
import "./style.css";

function PodswietlanieWieluElementow(){
    const [selected,setSelected]=useState([0,0,0]);
    let items=["Jabłko","Banan","Gruszka"];

    return(
        <ul>
            {items.map((item,index)=>
                <li key={index} className={selected[index]==1?"active":""}
                onClick={()=>{
                    if(index==0){
                        setSelected([1,selected[1],selected[2]])
                    }
                    else if(index==1){
                        setSelected([selected[0],1,selected[2]])
                    }
                    else if(index==2){
                        setSelected([selected[0],selected[1],1])
                    }
                }}>{item}</li>)}
        </ul>
    )
}
export default PodswietlanieWieluElementow;