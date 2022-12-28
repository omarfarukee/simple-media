import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {login, signInWithGoogle} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = data =>{
             console.log(data)
        setError('')
        login(data.email, data.password)
             .then(result => {
                 const user = result.user;
                console.log(user)
                toast.success('User Login Successfully')
             navigate(from, {replace: true});

        })
        .catch(error =>{
            console.error(error.message)
            setError(error.message)
          })
    }
       const handleGoogle= () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                 console.log(user);
                toast.success('User Login Successfully')
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message)
            });
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='lg:w-96 shadow-2xl p-10 rounded'>
            <h2 className='text-4xl'>login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs mb-5">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input  type="email" placeholder="email" className="input input-bordered w-full max-w-xs" 
                    {...register("email", {required:"Email Address is required"})}/>
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                       <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input  type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                    {...register("password", {required:'password is requred',
                     minLength:{ value: 6, message: "passwoed should be 6 characters" ,
                    //  pattern:{value :/^[A-Za-z]+$/i, message:'password should be Strong'}
                     }})}/>
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>} 
                 
                </div>
                <input className='btn btn-accent w-full mt-4' value='Login' type="submit" />
                <div>
                {error && <p className='text-red-600'>{error}</p>}
                </div>
                <div className='flex justify-center'>
                    <p>new in here?<Link to='/signUp' className='text-blue-600'>Register now</Link></p>
                </div>
             
               <div className="divider">OR</div>
               <button onClick={handleGoogle} className='btn btn-primary w-full'> <span className='pr-2'> </span>Login With Google</button>
            </form>
        </div>
    </div>
    );
};

export default Login;