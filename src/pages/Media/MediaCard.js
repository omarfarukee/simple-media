import React, { useContext, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
const MediaCard = ({ post }) => {
    const {user} = useContext(AuthContext)
    const { title, image, details, _id, react, names, photo, date } = post
    const [likes, setLikes] = useState(react)
    post.react = likes
    // const [green, setGreen] = useState('')
    const [hide, setHide] = useState('')
    const [show, setShow] = useState('hidden')

    const count = () => {
        const update = (likes + 1);
        const number = parseInt(update)
        setLikes(number)
        fetch(`https://mid-news-server.vercel.app/posts/${_id}`, {
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

    const handleAddComments = (event) => {
        event.preventDefault();
        const form = event.target
        const comment = form.comment.value
        const names = user?.displayName
        const categoryId = form.categoryId.value
        const photoURL = user?.photoURL
        
        const commentPost ={

            name : names,
            img: photoURL,
            comment,
            categoryId
           
           
        }
       

        fetch('https://mid-news-server.vercel.app/comments', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(commentPost)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success("comment Successfully done")
                form.reset()
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='mb-8 shadow-lg rounded-lg mt-20 border'>
            <div className='hidden'>
                {_id}
            </div>
            <div className='p-3 border-b-4 mb-3 flex justify-between items-center'>
                <div className='flex items-center'>
                {photo === null ?<span className='mr-1'><FaUserCircle className='text-3xl'></FaUserCircle></span>  : <img src={photo} alt=""  className='rounded-full h-10' />}
                <p className='font-bold'>{names}</p>
                </div>
                <p className='font-bold'>Date- {date}</p>
            </div>
            <div>
                <img src={image} alt="" className='rounded w-full' />
            </div>
            <h3 className='text-2xl font-bold pl-3'>{title}</h3>
            <div className='p-3 border-b-4'>
                <p>{details?.slice(1, 200)}...<span> <Link to={`/posts/${_id}`}><button className="p-1 rounded-lg hover:bg-slate-200 font-bold">read more</button></Link> </span></p> 
                <p><Link to={`/comments/${_id}`}><button className="p-1 rounded-lg hover:bg-slate-200 font-bold">see comments..</button></Link></p>

            </div>
            <div className='p-3 flex items-center'>
            
                  <p className='text-2xl'><button className='mr-3' title='Click twice on like button for 1 like'><span onClick={count} ><AiFillLike className={likes > 0 ? 'text-green-300' : ''}></AiFillLike></span> </button></p>
                    
                
                
                <p>{likes}</p>

                <div onClick={hides} className='text-2xl ml-10'> <p className={hide}><button><GoComment></GoComment></button></p></div>
               
                    <div className={show}>
                    <form onSubmit={handleAddComments} className='flex'>
                        <input placeholder='write your comment' name='comment' type="text" className='bg-gray-200 h-10 rounded-lg border w-96' required/>
                        <input name='categoryId' type='text' className='w-12 ml-2 rounded border' disabled defaultValue={_id} />
                     {user?.uid ? <button className="p-2 hover:bg-gray-400 rounded-3xl font-bold ml-2"><FiSend></FiSend> </button> : <button className="p-2 hover:bg-gray-400 rounded-3xl font-bold ml-2" disabled title='please login for comment'><FiSend></FiSend> </button>}   
                    </form>
                    </div>
           

            </div>
        </div>
    );
};<button className="p-2 hover:bg-gray-400 rounded-3xl font-bold ml-2"><FiSend></FiSend> </button>

export default MediaCard;