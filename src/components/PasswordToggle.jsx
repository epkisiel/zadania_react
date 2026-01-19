import {useState} from 'react';
 function PasswordToggle(){
    const [showPassword,setShowPassword]=useState(false);

    return(
        <>
            <input type={showPassword?"text":"password"}></input>
            <button onClick={()=>{
                setShowPassword(!showPassword);
            }}>Pokaż/Ukryj hasło</button>
        </>
    )
 }
 export default PasswordToggle;