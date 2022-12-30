import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
const FixedAbout = () => {
    const { logOut, user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/about?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setInfo(data))

    }, [user?.email])
    console.log(info[0]?.phone)
    return (
        <div>
            <div className='pt-20 flex justify-end mr-2'>
              
           { info[0]?.university ? <label htmlFor="item-modal" className="btn btn-outline" >Edit user Info </label> : <></>}  
         
            </div>
            <div className='flex justify-center'>
                {
                    info[0]?.university ? <></>:
                     <p className='text-3xl text-red-400 font-bold'>Please set your info on 'Info-set' menu</p>
                }
               
            </div>
            <div  className='flex justify-center'>
                
                <div className='pt-10 flex items-center'>
                    <div className='mr-8'>
                        {user?.photoURL ? <img className='rounded-full h-28' src={user?.photoURL} alt="" /> : <p className='text-9xl'><FaUserCircle></FaUserCircle> </p>}
                    </div>
                    <div>
                        <form>

                            <div className='shadow-2xl p-5 rounded-lg w-80'>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    <input disabled defaultValue={user?.displayName} type="text" {...register("name", {
                                        // required: "Required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input disabled defaultValue={user?.email} type="text" {...register("email", {
                                        // required: "Required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">University</span></label>
                                    <input disabled defaultValue={info[0]?.university} type="text" {...register("university", {
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

            <Modal></Modal>
        </div>
    );
};

export default FixedAbout;