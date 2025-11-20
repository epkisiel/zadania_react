import 'bootstrap/dist/css/bootstrap.css';
import {useForm} from 'react-hook-form';
const ContactForm=()=>{
    const {register,handleSubmit}=useForm();


    function onSubmit(data){
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Imię</label>
                <input type="text" id="name" className="form-control" {...register("name")}/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className='form-control' {...register("email")}/>
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label">Wiadomość</label>
                <input type="text" id="message" className='form-control' {...register("message")}/>
            </div>

            <button type="submit" className="btn btn-primary">Wyślij</button>
        </form>
    )
};
export default ContactForm;