import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [username, setUsername] = useState("")
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(username)
    }

    return (
        <form className='justify-center items-center text-center' onSubmit={handleSubmit}>
            <input
                type='text'
                value={username}
                onChange={handleChange}
                placeholder='Enter Github UserName'
                className=' border-white p-2 rounded-lg' />
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-2'>Search</button>
        </form>
    )
}

export default SearchBar