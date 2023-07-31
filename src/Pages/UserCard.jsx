// UserCard.js
import React from 'react';

const UserCard = ({ usersData }) => {
    if (!usersData) {
        return null; // Return null if no user data is available
    }

    const { avatar_url, login, name, bio, followers, following, public_repos, repos_url, html_url } = usersData;
    // const top10Repos = public_repos.slice(0, 10)
    return (
        <div className="bg-black text-white p-4 rounded-lg shadow-lg">
            <img src={avatar_url} alt={login} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center"><a href={html_url}>{name || login}</a></h2>
            <p className="text-gray-600">{bio}</p>
            <div className="flex justify-center mt-4">
                <span className="mr-2">
                    Followers: <strong>{followers}</strong>
                </span>
                <span className="mr-2">
                    Following: <strong>{following}</strong>
                </span>
                <span className="mr-2">
                    Repositories: <strong>{public_repos}</strong>
                </span>

            </div>
            {/* <div className='mt-8'>
                <h3 className='text-lg font-semibold mb-4'>Top 10 Repositories: </h3>
                <ul className='text-white'>
                    {top10Repos.map((repo) => {
                        <li key={repo.id}>{repo.name}</li>
                    })}
                </ul>
            </div> */}
        </div>
    );
};

export default UserCard;
