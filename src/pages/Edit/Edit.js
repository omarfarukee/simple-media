import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import EditField from './EditField';

const Edit = () => {
    const {user} = useContext(AuthContext)
    const loadData = useLoaderData()
    const information = loadData[0]
    const [users, setUsers] = useState(information)

    const handleUpdate = event =>{
        event.preventDefault()
        console.log(users)

         fetch(`http://localhost:5000/about/${information?._id}`, {
            method: 'PUT',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })

        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if (data.modifiedCount > 0){
                console.log(data);
                toast.success('successfully updated')
            }
            
        })
    }

    const handleChange = event =>{
        const filed = event.target.name 
        const value = event.target.value 
        const newUser = {...users} 
        newUser[filed] = value; 
        setUsers(newUser)
    }
    return (
        <div className='pt-20'>
            <h1>this is edit {loadData[0]._id}</h1>
            <div className='flex justify-center'>
               <form className='w-96' onSubmit={handleUpdate}>
                    <input name="name" disabled defaultValue={user?.displayName}  className="mt-2 input input-bordered w-full " /> <br />
                    <input  name="email" disabled defaultValue={user?.email} className="mt-2 input input-bordered w-full " /> <br />
                    <input onChange={handleChange} name='university' defaultValue={information.university} type="text" placeholder="University" className=" mt-3 input input-bordered w-full "  required /> <br />
                    <input onChange={handleChange} name='address' defaultValue={information.address} type="text" placeholder="address" className=" mt-3 input input-bordered w-full " required /> <br />
                    <input onChange={handleChange} name='phone' defaultValue={information.phone} type="text" placeholder="phone" className=" mt-3 input input-bordered w-full " required /> <br />
                    <button className="btn btn-success mt-3 w-full">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;