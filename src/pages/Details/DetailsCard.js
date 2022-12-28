import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCard = ({cards}) => {
    const { title, image, details, _id, react } = cards
    return (
        <div className='shadow-lg mt-20'>
            <div>
                <img src={image} alt="" className='rounded-lg'/>
            </div>
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