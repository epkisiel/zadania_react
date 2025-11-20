import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
const ProductForm=()=>{
    const [product,setProduct]=useState({name:'',price:0,category:''})

    function handleChange(event){
        const {id,value}=event.target;
        setProduct(prevInfo=>({...prevInfo,[id]:value}))
    }

    function handleSubmit(event){
        event.preventDefault();
        alert(product.name+", price: "+product.price+", category: "+product.category)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" id="price" className='form-control' onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input type="text" id="category" className='form-control' onChange={handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary">Wyślij</button>
        </form>
    )
};
export default ProductForm;