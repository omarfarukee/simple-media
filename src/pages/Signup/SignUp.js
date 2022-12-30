import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const {createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleRegister = data => {
        // console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            setError('')
            const user = result.user;
            console.log(user);
            handleProfile(data.name)
            toast.success('User Create SuccessFully')
            navigate('/home')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        });


    }
    const handleProfile = (name, photoURL) =>{
        const profile ={
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='lg:w-96 p-7 shadow-2xl rounded-3xl'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div> 
             
                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" /> 
                {error && <p className='text-red-600'>{error}</p>}
            </form>
            <div className='flex justify-center'>
                  <p>Already have an account ?<Link className='text-blue-500' to='/login'>Please Login </Link></p>
            </div>

        </div>
    </div>
    );
};

export default SignUp;