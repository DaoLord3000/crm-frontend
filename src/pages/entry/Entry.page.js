import React, {useState} from 'react'
import './entry.style.css'
import {LoginForm} from '../../components/login/Login.comp'
import {PasswordReset, ResetPassword} from '../../components/password-reset/PasswordReset.comp'

export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [frmLoad , setFrmLoad] = useState('login');

  const handleOnChange = (e) =>{
    const {name , value} = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
        
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const formSwitcher = frmType =>{
    setFrmLoad(frmType);
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault()

    if(!email || !password){
      return alert("Fill up all the form!")
    }

    //TODO Call Api to submit
    console.log(email , password); 
  };
  const handleOnResetSubmit = (e) =>{
    e.preventDefault()

    if(!email){
      return alert("Pls Enter The Email!")
    }

    //TODO Call Api to submit
    console.log(email); 
  };

  return (
    <div className='entry-page bg-info'>
      <div className="bg-light rounded-3 text-dark form-box">
        <div className="container bg-light border p-5 h-100 rounded-3">
          {frmLoad === 'login' && (<LoginForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
            pass={password} />)}
          {frmLoad === 'reset' && (<ResetPassword
            handleOnResetSubmit={handleOnResetSubmit}
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email} />)}
         
        </div>
      </div>
    </div>
    
  )
}
