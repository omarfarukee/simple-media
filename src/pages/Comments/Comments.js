import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Comments = () => {
    const data = useLoaderData()
    console.log(data.length)
    return (
        <div className='pt-20'>
            {
                data?.length === 0 ?
            <div className='text-3xl flex justify-center mb-5 mt-5 text-red-600'>
                <h1>There are no comments on this post yet</h1>
            </div>
            :
            <div className='text-3xl flex justify-center mb-5 mt-5 text-green-600'>
                 <h1>{data?.length} Comments based on this selected posts</h1>
            </div>
            }
            
           
            <div>
                {
                    data?.map(d =>
                        <div className='flex justify-center'>
                            <div className='border w-1/2 p-3 mb-3 shadow-2xl rounded-tl-3xl rounded-br-3xl'>
                                <div className='flex items-center'>
                                    {d?.img ? <img src={d.img} alt="" className='rounded-full h-8' /> : <FaUserCircle className='text-3xl'></FaUserCircle>}
                                <p className='ml-3 font-bold'>{d.name}</p>
                                </div>
                                <p className='ml-10 mt-3'>-----"{d.comment}"</p>
                            </div>


                        </div>)
                }
            </div>
        </div>
    );
};

export default Comments;