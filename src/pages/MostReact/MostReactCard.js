import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MostReactCard = ({most}) => {
    const {names, photo, image, react, details, title, _id, date} = most 

    return (
        <div>
            
            <div className='w-80 rounded-lg shadow-2xl mb-3'>
            <div className='p-3 border-b-4 mb-3 flex justify-between items-center '>
                <div className='flex items-center'>
                {photo === null ?<span className='mr-1'><FaUserCircle className='text-4xl'></FaUserCircle></span>  : <img src={photo} alt=""  className='rounded-full h-9' />}
                <p className='font-bold'>{names}</p>
                </div>
                <p className='font-bold'>Date- {date}</p>
            </div>
            <div>
                <img src={image} alt="" className='rounded w-full h-52' />
            </div>
            <h3 className='text-2xl font-bold pl-3'>{title}</h3>
            <div className='p-3 border-b-4 '>
                <p>{details?.slice(1, 200)}...<span><Link to={`/posts/${_id}`}><button className="p-1 rounded-lg hover:bg-slate-200 font-bold">see more</button></Link> </span></p>

            </div>
            <div className='flex items-center p-3'>
            <AiFillLike className= 'text-green-300 text-2xl mr-3'></AiFillLike> {react}
            </div>
        </div>
        </div>
        
    );
};

export default MostReactCard;