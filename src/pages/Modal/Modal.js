import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaUserEdit } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Modal = () => {
    const { logOut, user } = useContext(AuthContext)
    const [info, setInfo] = useState({})
    const information = info[0]
    console.log(information)

    const [review, setReview] = useState(information)

    // console.log(info[0])
     
    useEffect(() => {
        fetch(`https://mid-news-server.vercel.app/about?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setInfo(data))

    }, [user?.email])
   
    const handleUpdate = event => {

        event.preventDefault()
        console.log(review)

        // fetch(`https://mid-news-server.vercel.app/about?email=${user?.email}`, {
        //     method: 'POST',

        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })

        // .then(res => res.json())
        // .then(data => {
        //     // console.log(data)
        //     if (data.modifiedCount > 0){
        //         console.log(data);
        //         toast.success('successfully updated')
        //     }
            
        // })
    }

    const handleChange = event =>{
        const handleChange = event =>{
            const message = event.target.value
            const newReview = {...review}
            newReview.message = message 
            setReview(newReview)
        }
    }

    return (
        <div>
        
        <input type="checkbox" id="item-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="item-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                {/* <form onSubmit={handleUpdate}>
                    <input name="name" disabled defaultValue={user?.displayName}  className="mt-2 input input-bordered w-full " /> <br />
                    <input  name="email" disabled defaultValue={user?.email} className="mt-2 input input-bordered w-full " /> <br />
                    <input onChange={handleChange}  name='university' defaultValue={info[0]?.university} type="text" placeholder="University" className=" mt-3 input input-bordered w-full "  required /> <br />
                    <input onChange={handleChange}  name='address' defaultValue={info[0]?.address} type="text" placeholder="address" className=" mt-3 input input-bordered w-full " required /> <br />
                    <input onChange={handleChange}  name='phone' defaultValue={info[0]?.phone} type="text" placeholder="phone" className=" mt-3 input input-bordered w-full " required /> <br />
                    <button className="btn btn-success mt-3 w-full">Submit</button>
                </form> */}
                <div className='flex justify-center'>
                                 <Link to={`/about/${info[0]?._id}`}><button className='btn btn-info'><FaUserEdit className='mr-2 text-2xl'></FaUserEdit> Edit your profile</button></Link> 

                </div>
            </div>
        </div>
    
    </div>
    );
};

export default Modal;