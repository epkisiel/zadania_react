import {useForm} from "react-hook-form";

function OrderForm(){
    const {register,handleSubmit,formState:{errors,isValid}}=useForm({mode:"onChange"});

    function onSubmit(data){
        console.log("Dane: "+data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Pełne imię</label>
                <input type="text" id="fullName" className="form-control" {...register("fullName",{required:true,minLength:3})}/>
            </div>
            {errors.fullName && <p className="text-danger">Imię musi zawierać co najmniej 3 znaki.</p>}

            <div className="mb-3">
                <label htmlFor="address" className="form-label">Adres</label>
                <input type="text" id="address" className="form-control" {...register("address",{required:true,minLength:10})}/>
            </div>
            {errors.address && <p className="text-danger">Adres musi zawierać co najmniej 10 znaków.</p>}

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Numer telefonu</label>
                <input type="number" id="phone" className="form-control" {...register("phone",{required:true,maxLength:9,minLength:9})}/>
            </div>
            {errors.phone && <p className="text-danger">Numer telefonu musi zawierać 9 cyfr.</p>}

            <div className="mb-3">
                <label htmlFor="product" className="form-label">Produkt</label>
                <select id="product" {...register("product",{required:true})}>
                    <option value="Zupa pomidorowa">Zupa pomidorowa</option>
                    <option value="Rosół">Rosół</option>
                    <option value="Zupa ogórkowa">Zupa ogórkowa</option>
                    
                </select>
            </div>

            <button type="submit" className="btn btn-primary" disabled={!isValid}>Zamów</button>
        </form>
    )
}
export default OrderForm