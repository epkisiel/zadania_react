import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
const LoginForm=()=>{
    const [loginInfo,setLoginInfo]=useState({email:'',password:''})

    function handleChange(event){
        const {id,value}=event.target;
        setLoginInfo(prevInfo=>({...prevInfo,[id]:value}))
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(loginInfo)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Hasło</label>
                <input type="password" id="password" className='form-control' onChange={handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary">Zaloguj</button>
        </form>
    )
};
export default LoginForm;