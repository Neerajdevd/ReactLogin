import React from 'react'
import { useState } from 'react'

import { FiMail } from "react-icons/fi";
import { MdOutlineKey } from "react-icons/md";

const Loginform = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailerror, setEmailError] = useState(false);
    const [passerror, setPassError] = useState(false);
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passregex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const handleEmail = (e) => {
        let email = e.target.value;

        if (!email.match(emailregex)) {
            setEmailError(true);
        }
        else {
            setEmailError(false);
        }
        setEmail(email);
    }

    const handlePassword = (e) => {
        let password = e.target.value;
        if (!password.match(passregex)) {
            setPassError(true);
        }
        else {
            setPassError(false);
        }
        setPassword(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target[0].value;
        if (!email.match(emailregex)) {
            setEmailError(true);
        }
        else {
            setEmailError(false);
        }
        
        let password = e.target[1].value;
        if (!password.match(passregex)) {
            setPassError(true);
        }
        else {
            setPassError(false);
        }
        if ((email.match(emailregex)) && (password.match(passregex))) {
            alert("form has been submitted");
            alert("email=" + email + "password=" + password);
        }
    }

    return (
        <form  onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='' className='form-label font-medium mb-2 flex'>Email
                    <span>
                        <FiMail size="1.3rem" color='green'/>
                    </span>
                </label>
                
                <input style={{ boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)" }} type='text' placeholder='Enter your mail' className='form-control w-full border rounded-md bg-transparent border-gray-400 p-2' name="email" value={email} onChange={handleEmail}  >

                </input>
                {emailerror ? <span style={{ color: "red" }}>Invalid Email</span> : " "}

            </div>
            <div className='mb-1'>
                <label className='font-medium mb-2 flex'>Password
                <span>
                <MdOutlineKey size="1.3rem" color='green'/>
                </span>
                </label>
                <input style={{ boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)" }} type='text' placeholder='Enter your password' className='w-full border rounded-md bg-transparent border-gray-400 p-2' name="password" value={password} onChange={handlePassword} ></input>
                {passerror ? <span style={{ color: "red" }}>Invalid Password</span> : " "}

            </div>
            <div className='mb-3'>
                <label className='text-blue-700 cursor-pointer'>Forgot Password?
               
                </label>
            </div>
            <button className='block bg-sky-700 hover:bg-blue-800 text-white w-full py-2 px-8 rounded'>Log In</button>

            <div className='mt-2 text-center'>
                Don't have an account yet? <span className='text-blue-700 cursor-pointer'>Sign up</span>
            </div>
        </form>
    )
}

export default Loginform