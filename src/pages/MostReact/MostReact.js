import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MostReactCard from './MostReactCard';

const MostReact = () => {
    const { data: mosts = [], refetch} = useQuery({
        queryKey: ['mosts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/posts`);
            const data = await res.json();
            return data;
        }  
    });
    return (
        <div >
            <div className='flex justify-center mb-3'>
                <h1 className='text-green-600 font-bold text-3xl'>Top 3 most Liked posts</h1>
            </div>
             <div className='flex justify-center'>
                 <div className='grid grid-cols-3 w-4/5 '>
                {
                    
                    mosts?.sort((a,b) => a.react < b.react ? 1 : -1).map(most => <MostReactCard
                    key={most._id}
                    most={most}
                    ></MostReactCard>).slice(0,3)
                }
            </div>
             </div>
           
        </div>
    );
};

export default MostReact;