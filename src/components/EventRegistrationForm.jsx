import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";


const correctEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema=z.object({
    fullName: z.string().min(3,{message:"Name has to contain at least 3 characters."}),
    email: z.email({pattern:correctEmail}, {message:"Incorrect email format."}),
    eventDate: z.date( Date(),{message:"Incorrect date."}),
    tickets: z.number().max(10, {message:"Maximal number of tickets is 10."}).min(1, {message:"Minimal number of tickets is 1."}) 
});

function EventRegistrationForm(){
    const{register, handleSubmit, formState:{errors}}=useForm({resolver: zodResolver(schema)});

    function onSubmit(data){
        console.log("Data: "+data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full name</label>
                <input type="text" id="fullName" className='form-control' {...register("fullName")}/>

                {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className='form-control' {...register("email")}/>

                {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="eventDate" className="form-label">Event date</label>
                <input type="date" id="eventDate" className='form-control' {...register("eventDate")}/>

                {errors.message && <p className="text-danger">{errors.eventDate.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="tickets" className="form-label">Number of tickets</label>
                <input type="number" id="tickets" className='form-control' {...register("tickets")}/>

                {errors.message && <p className="text-danger">{errors.tickets.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    )
}
export default EventRegistrationForm