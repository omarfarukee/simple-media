import React, { useContext, useEffect, useState } from 'react';
import { FaBookReader, FaHome, FaUserCircle } from 'react-icons/fa';
import {GrMultimedia } from 'react-icons/gr';
import {BsFillInfoSquareFill} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {

    const {logOut, user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch(error => console.error(error))
        navigate('/')
      }
      const [info, setInfo] = useState([])
    useEffect(() => {
        fetch(`https://mid-news-server.vercel.app/about?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setInfo(data))

    }, [user?.email])
    const headItems = <>
            <li><Link to='/home'><FaHome></FaHome>home</Link></li>
            <li><Link to='/media'><GrMultimedia></GrMultimedia> media</Link></li>
            <li><Link to='/setInfo'><FaBookReader></FaBookReader> about</Link></li>
           {
            user?.uid && <>
            {
              info[0]?.university ? <></> : <li><Link to='/about'><BsFillInfoSquareFill></BsFillInfoSquareFill> Info-set</Link></li> 
            }
            </>
           } 
            
            
    </>
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-2xl rounded-lg fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {headItems}
                        </ul>
                    </div>
                 <Link to='/home'><a className="btn normal-case text-xl">OFP MEDIA</a></Link>   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {headItems}
                    </ul>
                </div>
                <div className="navbar-end">
                {
            user?.uid ? <p className='mr-3 font-bold text-sm'>'{ user.displayName}'</p> : <p className='font-bold text-sm mr-3'>'user not login'</p>
          } 
          {
            user?.photoURL  ? <img src={user?.photoURL} alt=""  className='rounded-full h-10 mr-3' /> : <span className='mr-1'><FaUserCircle className='text-3xl'></FaUserCircle></span>
          }
                    {
                        user?.uid ? <a className="btn" onClick={handleLogOut}>Log-out</a> :
                           <Link to='/logIn'><a className="btn">Log in</a></Link> 
                    }
                 
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Header;