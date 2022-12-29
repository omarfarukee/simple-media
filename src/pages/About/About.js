import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';


const About = () => {
    const {logOut, user} = useContext(AuthContext)
    const { register, handleSubmit,formState: { errors } } = useForm();
    
   
    const handleAddUserInfo = (data) =>{

        const info ={

           names : user.name, 
           email: user.email,
           university: data.university,
           address: data.address,
           phone: data.phone
        }
       

        fetch('http://localhost:5000/about', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
              toast.success('user info saved')
                // form.reset()
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='flex justify-center'>
            <div className='pt-20'>
                <form onSubmit={handleSubmit(handleAddUserInfo)}>

                    <div className='shadow-2xl p-5 rounded-lg w-80'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input disabled defaultValue={user?.displayName} type="text" {...register("name", {
                                // required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label  className="label"> <span className="label-text">Email</span></label>
                            <input disabled defaultValue={user?.email} type="text" {...register("email", {
                                // required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">University</span></label>
                            <input type="text" {...register("university", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.university && <p className='text-red-500'>{errors.university.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Address</span></label>
                            <input type="text" {...register("address", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone</span></label>
                            <input type="text" {...register("phone", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                        </div>

                        
                    </div>
                    <div className='flex justify-center'>
                        <input className='btn btn-success  mt-4 ' value="submit" type="submit" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default About;