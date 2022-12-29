import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Lauout/Main';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home';
import SignUp from './pages/Signup/SignUp';
import Login from './pages/Login/Login';
import Media from './pages/Media/Media';
import Details from './pages/Details/Details';
import About from './pages/About/About';
import FixedAbout from './pages/fixedAbout/FixedAbout';
import Modal from './pages/Modal/Modal';
import Edit from './pages/Edit/Edit';
import PrivateRoute from './Private/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/logIn',
          element:<Login></Login>
        },
        {
          path:'/media',
          element:<Media></Media>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/setInfo',
          element: <PrivateRoute><FixedAbout></FixedAbout></PrivateRoute> 
        },
        {
          path:'/posts/:id',
            element:<Details></Details>,
            loader:async ({params}) =>{
            return fetch(`http://localhost:5000/posts/${params.id}`)
            }
        },
        {
          path:'/about/:id',
            element:<Edit></Edit>,
            loader:async ({params}) =>{
            return fetch(`http://localhost:5000/about/${params.id}`)
            }
        },
      ]
    }
  ])
  return (
    // className='max-w-[1140px] mx-auto'

    <div >
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster></Toaster>
    </div>
    // hhh
  );
}

export default App;
