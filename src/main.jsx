import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Pages/Root.jsx';
import Home from './Pages/Home.jsx';
import Allgames from './Pages/Allgames.jsx';
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import Resetpass from './Pages/Resetpass.jsx';
import Error from './Pages/Error.jsx';
import Profile from './Pages/Profile.jsx';
import Update from './Pages/Update.jsx';
import Loading from './Pages/Loading.jsx';
import Provider from './Provider/Provider.jsx';
import GameDetails from './Pages/GameDetails.jsx';
import Details from './Pages/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component :Root,
    children : [
      { index: true, 
        path : '/',
        Component: Home,
      },
      {  
        path : '/allgames',
        Component: Allgames,
      },
      {  
        path : '/game/:id',
        Component : GameDetails,
        loader : () => fetch("/popular.json")
      },
      {  
        path : '/games/:id',
        Component : Details,
        loader : () => fetch("/data.json")
      },
       {  
        path : '/registration',
        Component: Registration,
      },
      {  
        path : '/login',
        Component: Login,
      },
      {  
        path : '/reset',
        Component: Resetpass,
      },
      {  
        path : '/profile',
        Component: Profile,
      },
      {  
        path : '/update',
        Component: Update,
      },
      {  
        path : '/*',
        Component: Error,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode >
     <Provider>
      <RouterProvider router={router} />
     </Provider>
  </StrictMode>
)
