import 'bootstrap/dist/css/bootstrap.css';
import {useForm} from 'react-hook-form';
const NewsletterForm=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm();
    const correctEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function onSubmit(){
        console.log("Wysłano");
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className='form-control' 
                    {...register("email",
                        {required:true,pattern:correctEmail})}/>
                    {errors.email?.type==="required" && <p className="text-danger">Email jest wymagany.</p>}
                    {errors.email?.type==="pattern" && <p className="text-danger">Nieprawidłowy format emaila.</p>}
            </div>

            <button type="submit" className="btn btn-primary">Wyślij</button>
        </form>
    )
};
export default NewsletterForm;