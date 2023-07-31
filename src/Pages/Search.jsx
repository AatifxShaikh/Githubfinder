import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import UserCard from './UserCard'
//https://api/github.com/users
//https://api/github.com/users/{username}
//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
const Search = () => {
    // const octokit = new Octokit({
    //     auth: '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'
    // })

    // await octokit.request('GET /user', {
    //     headers: {
    //         'X-GitHub-Api-Version': '2022-11-28'
    //     }
    // })
    const [usersData, setUsersData] = useState(null)
    const [error, setError] = useState(null)
    const handleSearch = async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);

            if (response.ok) {
                const userData = await response.json();
                console.log(userData)
                setUsersData(userData);
                setError(null); // Reset any previous error if the request is successful
            } else {
                setUsersData(null); // Clear previous user data if the request fails
                setError('User not found'); // Set an error message if the user is not found or any other API error occurs
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUsersData(null); // Clear previous user data if there's an error
            setError('An error occurred. Please try again later.'); // Set a generic error message for any unexpected errors
        }
    };
    return (
        <div className='bg-black min-h-screen  mx-auto py-8'>
            <SearchBar onSearch={handleSearch} />
            <div className='mt-8'>
                {error ? <p className='text-white'>{error}</p> : <UserCard usersData={usersData} />}
            </div>
        </div>
    )
}

export default Search