import React, { useState } from 'react';
import bcrypt from "bcryptjs-react";
import fetchData from './getuserdata'
import Admin from "./AdminPanel";
import './Login.css'


let bool = false;
async function comparePass(nameInput, passInput){
  await fetchData().then(data =>{
    console.log(data)
    data = data[0];
    return data;
  }).then(data =>{
    let compare = bcrypt.compareSync(passInput, data.password)
    if (data.name == nameInput && compare){
      bool = true;
    }
    else{
      console.log('Error in username or password');
      bool = false;
    }
  }).catch (Error =>{
    console.log(`You Have Error: ${Error}`);
  })
}

function Login(){
  const [isLogin, setIsLogin] = useState(false);

  function handelLoginBtn(e){
    e.preventDefault();
    let userName = document.getElementById('userName');
    let pass = document.getElementById('password');
    comparePass(userName.value ,pass.value)
    if (bool){
      console.log("compare is true")
      setIsLogin(true);
    }
  }

  if (isLogin){
    return <Admin />
  }
  return(
    <div  className='login'>
      <h2 className='main-text'>Login</h2>
      <form>
        <input id="userName" type="text" placeholder="Enter User Name" required/>
        <div>
          <input id="password" type="password" placeholder="Enter password" required />
          <button className='eye-btn' onClick={(e)=>{
            e.preventDefault();
            let myInput = document.getElementById('password')
            myInput.type === "text" ? myInput.type = "password" : myInput.type = "text"
          }}>&#128065;</button>
        </div>
        <input id="btn" className="button" type="submit" onClick={handelLoginBtn}/>
      </form>  
    </div>
  )
}
export default Login;