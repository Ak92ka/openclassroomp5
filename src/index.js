import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Annonce from './pages/Annonce'
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import Accueil from './pages/Accueil'

  const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Accueil />,
	},
	{
		path: "/a-propos",
		element: <div>A propos</div>,
	  },  
	  {
		path: "/annonce/:id",
		element: <Annonce />,
	  },  

  ]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('root')
)




