//imports do reacct
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
//import do css global
import './index.css'
//import dos componentes(paths)
import App from './App.jsx'
import Charts from './Charts.jsx';
import Contact from './Contact.jsx';
import Products from './Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/charts",
    element:<Charts/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
  {
    path: "/product",
    element:<Products/>,
  },
]);

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />,
)
