import React from 'react'
import Search from './Pages/Search'
import Home from './Pages/Home'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "Search",
            element: <Search />
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Routes