import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const MediaCard = ({ post }) => {
    const { title, image, details, _id, react } = post
    const [likes, setLikes] = useState(react)
    post.react = likes
    // const [green, setGreen] = useState('')
    const [hide, setHide] = useState('')
    const [show, setShow] = useState('hidden')

    const count = () => {
        const update = (likes + 1);
        const number = parseInt(update)
        setLikes(number)
        const green = 'text-green-400'
        // setGreen(green)

        fetch(`http://localhost:5000/posts/${_id}`, {
            method: 'PUT',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if (data.modifiedCount > 0){
                console.log(data);
            }
            
        })
    }
    

    const hides = () => {
        const hidden = 'hidden'
        const block = 'block'
        setHide(hidden)
        setShow(block)
    }

    return (
        <div className='mb-8 shadow-lg rounded-lg mt-20'>
            <div className='hidden'>
                {_id}
            </div>
            <div>
                <img src={image} alt="" className='rounded' />
            </div>
            <div className='p-3 border-b-4'>
                <p>{details.slice(1, 200)}...<span><Link to={`/posts/${_id}`}><button className="p-1 rounded-lg hover:bg-slate-200 font-bold">see more</button></Link> </span></p>

            </div>
            <div className='p-3 flex items-center'>
            
                  <p className='text-2xl'><button className='mr-3'><span onClick={count} ><AiFillLike className={likes > 0 ? 'text-green-300' : ''}></AiFillLike></span> </button></p>
                    
                
                
                <p>{likes}</p>

                <div onClick={hides} className='text-2xl ml-10'> <p className={hide}><button><GoComment></GoComment></button></p></div>
               
                    <div className={show}>
                    <form>
                        <input type="text" className='bg-gray-200 h-10 rounded-lg border w-96' />
                        <button className="p-2 hover:bg-gray-400 rounded-2xl font-bold ml-2"><FiSend></FiSend> </button>
                    </form>
                    </div>
           

            </div>
        </div>
    );
};

export default MediaCard;