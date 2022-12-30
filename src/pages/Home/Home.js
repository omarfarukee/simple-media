import React from 'react';
import { Link } from 'react-router-dom';
import PrivateRoute from '../../Private/PrivateRoute';
import AddPost from '../AddPost/AddPost';
import MostReact from '../MostReact/MostReact';
import './Home.css'
const Home = () => {
    return (
        <div >
           <div className='mb-10 pt-28 flex justify-center'>
            <div className='homes'>
           <Link to='/addPost'><button className="btn btn-wide">post your creativity</button></Link> 
            </div>
           </div>
            
            <MostReact></MostReact>
        </div>
    );
};

export default Home;