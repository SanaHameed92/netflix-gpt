import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'




const Body = () => {

    
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {

        }
    ]);

    


  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
  );
};

export default Body