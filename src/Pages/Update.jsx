import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router";
import { AuthContext } from '../Provider/Provider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const Update = () => {

    const { user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handelUpdate = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const imageLink = e.target.imageLink.value;
    
    updateProfile(auth.currentUser, {
      displayName : username, photoURL : imageLink
    }).then(() =>{
      setUser({...user, displayName : username, photoURL : imageLink});
      navigate("/profile")
    }).catch((err) =>{
      console.log(err);
    })

      
  };

    return (
        <div>
          <title>Update Profile</title>
            <section className=" w-full flex items-center justify-center px-4 py-30">
            <div className="w-full max-w-md rounded-2xl bg-[#1A1E24]/90 shadow-2xl ring-1 ring-white/10 px-6 py-10">
              
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Edit Your Profile</h1>
                <p className="text-[16px] mt-2 text-slate-400">Keep your profile information up to date.</p>
              </div>
    
              <form onSubmit={handelUpdate} className="mt-8 space-y-5">
               
               {/* Username */}
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm font-semibold text-white">Username</label>
                  <input
                    type="text"
                    name='username'
                    placeholder="Write new username here"
                    className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
                  />
                </div>

                {/* Image */}
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm font-semibold text-white">Image URL</label>
                  <input
                    type="text"
                    name="imageLink"
                    placeholder="Write new image link here"
                    className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
                  />
                </div>
    
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold "
                >
                  Update Information
                </button>
    
              </form>
    
            </div>
          </section>
        </div>
    );
};

export default Update;