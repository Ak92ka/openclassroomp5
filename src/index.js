import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Annonce from './pages/Annonce'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Erreur from './pages/Erreur'
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Accueil />,
	},
	{
		path: "/a-propos",
		element: <Apropos />,
	  },  
	  {
		path: "/annonce/:id",
		element: <Annonce />,
	  },
	  {
		path: "*",
		element: <Erreur />,
	  },
	  {		path: "/annonce/:/*",
		element: <Erreur />,
	  }
  ]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('root')
)




