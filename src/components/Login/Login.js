import React, {useState} from 'react'
import "./style.css"
import {useHistory} from 'react-router-dom';
import Image from './Hinterrhein.png';

const passkey = [{
    username: "abc@gmail.com",
    password: "1234"
},
{
    username: "qwe@gmail.com",
    password: "4567"
}]
function Login() {
    let history=useHistory();
   

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [click, setClick]= useState(false);
    const handleSignIn=()=>{
        console.log(name, pass)
        if(name===passkey[0].username && pass===passkey[0].password)
        {
            history.push('./dashboard',{name, pass});
           
        }
        else if(name===passkey[1].username && pass===passkey[1].password)
        {
            history.push('./dashboard',{name, pass});
        }
        else
        {
            console.log("wrong value")
            setClick(true);
        }

        
    }

    const handleUsername=(e)=>{
        setName(e.target.value);
    }
    const handlePassword=(e)=>{
        setPass(e.target.value);
    }
    return (
        <div className="login">
            <img src={Image} className="login__background"  alt="design"/>
            <div className="login__form">
                <h2 className="login__heading">Login</h2>
                <div className="form">
                    <div className="form__div">
                    <input className="form__input" type="text" placeholder="Enter email" onChange={handleUsername}/>
                    </div>
                    <div className="form__div">
                    <input className="form__input" type="password" placeholder="Enter password" onChange={handlePassword}/>
                    </div>
                    <div className="button">
                    <button className="Signin" onClick={handleSignIn}>Sign In</button>
                    </div>
                </div>
               
                {click && <p className="message">Wrong details entered</p>}
            </div>
          
        </div>
    )
}

export default Login
