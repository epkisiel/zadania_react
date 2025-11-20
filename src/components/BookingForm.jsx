import 'bootstrap/dist/css/bootstrap.css';
import {useForm} from 'react-hook-form';
const BookingForm=()=>{
    const {register,handleSubmit}=useForm();


    function onSubmit(data){
        alert(data.fullName+", "+data.email+", "+data.date+", ilość biletów: "+data.ticketCount)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Pełne imię</label>
                <input type="text" id="fullName" className="form-control" {...register("fullName")}/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className='form-control' {...register("email")}/>
            </div>

            <div className="mb-3">
                <label htmlFor="date" className="form-label">Data</label>
                <input type="date" id="date" className='form-control' {...register("date")}/>
            </div>

            <div className="mb-3">
                <label htmlFor="ticketCount" className="form-label">Ilość biletów</label>
                <input type="number" id="ticketCount" className='form-control' {...register("ticketCount")}/>
            </div>

            <button type="submit" className="btn btn-primary">Wyślij</button>
        </form>
    )
};
export default BookingForm;