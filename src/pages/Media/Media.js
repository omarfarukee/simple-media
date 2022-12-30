import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MediaCard from './MediaCard';
import './MediaCard.css'
const Media = () => {

    const { data: posts = [], refetch} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`https://mid-news-server.vercel.app/posts`);
            const data = await res.json();
            return data;
        }  
    });
    return (
        <div className='flex justify-center'>
            <div className='w-2/4 cards-s'>
                  {
                posts?.map(post => <MediaCard
                key={post._id}
                post={post}
                ></MediaCard>)
            }
            </div>
          
        </div>
    );
};

export default Media;