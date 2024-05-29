import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Singleblogs from './pages/Singleblogs.jsx';
import Singleblogpost from './pages/Singleblogpost.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blogs />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/service",
        element: <Services />
      },
      {
        path: "/blogs/:id",                   
        element: <Singleblogs />,              
        loader: ({ params }) => fetch(`http://127.0.0.1:8000/api/blogs/${params.id}`)
                                              
    },
    {
      path: '/blogposts/:id',
      element: <Singleblogpost />,
      loader: ({ params }) => fetch(`http://127.0.0.1:8000/api/blogposts/${params.id}`),
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
