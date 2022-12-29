import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddPost = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const imageHosKey = '29473dd4ab78ebc95009722bc0558d38';
    const navigate = useNavigate()
    const handleAddItem = (data) => {
        console.log(data)

        const image = data.images[0];
        const fromData = new FormData();
        fromData.append('image', image);

        const url= `https://api.imgbb.com/1/upload?&key=${imageHosKey}` 
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json()) 
        .then(imgData => {
          if(imgData.success){
            console.log(imgData.data.url)


            const posts = {
                title : data.title ,
                image: imgData.data.url,
                details: data.details,
                react: data.react,
                date: data.date,
                names: user?.displayName,
                photo: user?.photoURL
            }

          
            fetch('http://localhost:5000/posts', {

                method: 'POST', 
                headers: {
                    'content-type': 'application/json', 

                }, 
                body: JSON.stringify(posts)
            })
            .then(res => res.json())
            .then(result => {
                
                console.log(result)
                alert('its can take few moment please wait')
                toast.success('added Item successfully')
            navigate('/media')
            })

          }
        })
    }

    return (
        <div className='mt-20'>
             <div className=' flex justify-center'>
                <form onSubmit={handleSubmit(handleAddItem)}>

                <div className='shadow-2xl p-5 rounded-lg'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Title</span></label>
                        <input type="text" {...register("title", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Details</span></label>
                        <input type="text" {...register("details", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Likes</span></label>
                        <input defaultValue={0} type="number" {...register("react", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.react && <p className='text-red-500'>{errors.react.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Purchased Date 'dd/mm/yyyy'</span></label>
                        <input type="text" {...register("date", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo (photo Should be png/jpg format)</span></label>
                        <input type="file" {...register("images", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.images && <p className='text-red-500'>{errors.images.message}</p>}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <input className='btn btn-success  mt-4 ' value="Post" type="submit" />
                </div>

            </form>
            </div>
        </div>
    );
};

export default AddPost;