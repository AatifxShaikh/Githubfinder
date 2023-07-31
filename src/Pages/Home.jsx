import React from 'react'
import Github from '../assets/git.png'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div >
            <nav className='flex box-border m-auto  justify-between'>
                <div className='flex p-4'>
                    <img className='h-14' src={Github} />
                    <img className='h-14' src={Logo} />
                </div>
                <Link to="/Search" className='text-white font-extrabold text-2xl p-4 hover:underline'>Search</Link>
            </nav>
            <div className=' justify-center items-center h-screen'>
                <h1 className='text-white text-center font-extrabold text-2xl  mt-4'>Welcome to the GitHub User Finder!</h1>
                <p className='text-white font-bold text-center  mt-8 min-w-min'>Discover and explore GitHub users like never before with our intuitive and powerful user search app.
                    Whether you're looking to connect with fellow developers, find potential collaborators, or simply want to explore interesting profiles, we've got you covered.</p>
                <p className='text-white font-bold text-center  mt-8 min-w-min'>Using the GitHub API, our user-friendly app allows you to search for users by their username and view detailed profiles, including their repositories, followers, following, and more. With real-time data updates, you'll always have the latest information at your fingertips.</p>
                <img className='mt-4 h-1/2  justify-center items-center m-auto' src='https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?resize=1200%2C630' />
            </div>

        </div>
    )
}

export default Home