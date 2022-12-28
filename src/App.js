import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Lauout/Main';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home';
import SignUp from './pages/Signup/SignUp';
import Login from './pages/Login/Login';
import Media from './pages/Media/Media';

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
      ]
    }
  ])
  return (
    <div className='max-w-[1140px] mx-auto'>
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
