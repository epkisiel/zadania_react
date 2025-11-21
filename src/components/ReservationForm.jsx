import 'bootstrap/dist/css/bootstrap.css';
import {useForm} from 'react-hook-form';
const ReservationForm=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm();
    const correctEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function onSubmit(data){
        console.log(data.fullName+", "+data.email+", "+data.checkInDate+", number of guests: "+data.numberOfGuests);
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full name</label>
                <input type="text" id="fullName" className='form-control' 
                    {...register("fullName",
                        {required:true,minLength:3})}/>
                    {errors.fullName?.type==="required" && <p className="text-danger">Name is required.</p>}
                    {errors.fullName?.type==="minLength" && <p className="text-danger">Name has to contain at least e letters.</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className='form-control' 
                    {...register("email",
                        {required:true,pattern:correctEmail})}/>
                    {errors.email?.type==="required" && <p className="text-danger">Email is required.</p>}
                    {errors.email?.type==="pattern" && <p className="text-danger">Incorrect email.</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="checkInDate" className="form-label">Check in date</label>
                <input type="date" id="checkInDate" className='form-control' 
                    {...register("checkInDate",
                        {required:true, })}/>
                    {errors.checkInDate?.type==="required" && <p className="text-danger">Check in date is required.</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="numberOfGuests" className="form-label">Number of guests</label>
                <input type="number" id="numberOfGuests" className='form-control' 
                    {...register("numberOfGuests",
                        {required:true,min:1,max:5})}/>
                    {errors.numberOfGuests?.type==="required" && <p className="text-danger">Number of guests is required.</p>}
                    {errors.numberOfGuests?.type==="min" && <p className="text-danger">Number of guests have to be larger than 0.</p>}
                    {errors.numberOfGuests?.type==="max" && <p className="text-danger">Number of guests has to be smaller than 6.</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};
export default ReservationForm;