import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comments from '../Comments/Comments';
import DetailsCard from './DetailsCard';

const Details = () => {
    const cardDetails = useLoaderData()
    console.log(cardDetails)
    return (
        <div className='flex justify-center'>
      
            <div className='w-2/4 mb-10'>
                {
                    cardDetails?.map(cards => <DetailsCard
                    key={cards._id}
                    cards={cards}
                    ></DetailsCard>)
                }
            </div>
           
        </div>
    );
};

export default Details;