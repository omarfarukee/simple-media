import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const FixedAbout = () => {
    const {logOut, user} = useContext(AuthContext)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [info, setInfo] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/about?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setInfo(data))

    },[user?.email])
    // console.log(info[0].phone)
    return (
        <div className='flex justify-center'>
            <div className='pt-28 flex items-center'>
                <div className='mr-8'>
                    {user?.photoURL ? <img src={user?.photoURL} alt="" />: <p className='text-9xl'><FaUserCircle></FaUserCircle> </p>}
                </div>
                 <div>
                <form>

                    <div className='shadow-2xl p-5 rounded-lg w-80'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input disabled defaultValue={user.displayName} type="text" {...register("name", {
                                // required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label  className="label"> <span className="label-text">Email</span></label>
                            <input disabled defaultValue={user.email} type="text" {...register("email", {
                                // required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">University</span></label>
                            <input disabled defaultValue={info[0]?.university}  type="text" {...register("university", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.university && <p className='text-red-500'>{errors.university.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Address</span></label>
                            <input disabled defaultValue={info[0]?.address} type="text" {...register("address", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone</span></label>
                            <input disabled defaultValue={info[0]?.phone} type="text" {...register("phone", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                        </div>

                        
                    </div>
                 
                </form>
            </div>
            </div>
           

        </div>
    );
};

export default FixedAbout;