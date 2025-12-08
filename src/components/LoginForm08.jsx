import React from "react";
import {useForm} from "react-hook-form";

function LoginForm08(){
    const {register,handleSubmit,formState:{errors,isValid}}=useForm({mode:"onChange"});

    function onSubmit(data){
        console.log("Dane: "+data);
    }

    const correctEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" {...register("email",{required:true,pattern:correctEmail})}/>
            </div>
            {errors.email && <p className="text-danger">Niepoprawny format email.</p>}

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Hasło</label>
                <input type="password" id="password" className="form-control" {...register("password",{required:true,minLength:6})}/>
            </div>
            {errors.password && <p className="text-danger">Hasło musi zawierać co najmniej 6 znaków.</p>}

            <button type="submit" className="btn btn-primary" disabled={!isValid}>Zaloguj</button>
        </form>
    )
}
export default LoginForm08