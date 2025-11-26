import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { Link, useParams } from "react-router";
import auth from '../Firebase/firebase.config';

const Resetpass = () => {

  const {email} = useParams();

  

  const handelSubmit = (e) => {
    e.preventDefault()
    const resetemail = e.target.email.value;
    sendPasswordResetEmail(auth, resetemail)
  .then(() => {
    window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox')
  })
  .catch((error) => {
    console.log(error)
  });
  }
    return (
        <div>
          <title>Reset Passoward</title>
          <section className=" w-full flex items-center justify-center px-4 py-30">
            <div className="w-full max-w-md rounded-2xl bg-[#1A1E24]/90 shadow-2xl ring-1 ring-white/10 px-6 py-10">
              
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Forgot Password?</h1>
                <p className="text-[16px] mt-2 text-slate-400">Enter your email and we'll send you a link to get back into your account.</p>
              </div>
    
              <form onSubmit={handelSubmit} className="mt-8 space-y-5">
               
               {/* Email */}
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm font-semibold text-white">Email Address</label>
                  <input
                    type="email"
                    name='email'
                    defaultValue={email}
                    placeholder="you@example.com"
                    className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
                  />
                </div>
    
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold "
                >
                  Send Reset Link
                </button>
    
              </form>

              
    
              <p className="mt-6 text-center text-sm text-slate-400">Remember your password? 
                <Link to="/login"><span className="text-blue-500 hover:text-blue-400 cursor-pointer font-semibold"> Log In</span></Link>
              </p>
    
            </div>
          </section>
    </div>
  );

};

export default Resetpass;