import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DetailsCard = ({cards}) => {
    const { title, image, details, _id, react, photo, names, date } = cards
    return (
        <div className='shadow-lg mt-20'>
            <div className='p-3 border-b-4 mb-3 flex justify-between items-center'>
                <div className='flex items-center'>
                {photo === null ?<span className='mr-1'><FaUserCircle className='text-3xl'></FaUserCircle></span>  : <img src={photo} alt=""  className='rounded-full h-10' />}
                <p className='font-bold'>{names}</p>
                </div>
                <p className='font-bold'>Date- {date}</p>
            </div>
            <div>
                <img src={image} alt="" className='rounded-lg'/>
            </div>
            <h3 className='text-2xl font-bold pl-3'>{title}</h3>
            <div className='p-3 border-b-4'>
                <p>{details}</p>
                <p></p>
            </div>
            <div className='p-3'>
                <p>Likes- {react}</p>
            </div>
            <div className='p-3'>
                <Link to='/media'><button className='btn btn-sm'>Go Back</button> </Link>
            </div>
        </div>
    );
};

export default DetailsCard;