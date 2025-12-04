import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const correctEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema=z.object({
    email: z.email({pattern:correctEmail}, {message:"Incorrect email format."}),
    message: z.string().min(10, {message:"Message must contain at least 10 characters."}) 
});

function FeedbackForm(){
    const{register, handleSubmit, formState:{errors}}=useForm({resolver: zodResolver(schema)});

    function onSubmit(data){
        console.log("Data: "+data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className='form-control' {...register("email")}/>

                {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <input type="text" id="message" className='form-control' {...register("message")}/>

                {errors.message && <p className="text-danger">{errors.message.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    )
}
export default FeedbackForm