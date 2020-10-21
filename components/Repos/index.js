import React from 'react'

const Repos = ({user, repos}) => {
    return(        
        <div>
            <h3 className='text-center mt-4 text-xl md:text-3xl uppercase text-green-500 font-bold'>Minhas Contribuições</h3>
            <p className='text-center'>Public Repos: {user.public_repos} | Public Gists: {user.public_gists} | Followers: {user.followers}</p>
                {repos.map(repo => {
                    return (
                        
                        <a key={repo.id} href={'https://github.com/philippeberto/'+repo.name}>
                            
                                <div className="rounded bg-green-200 mx-8 my-4 p-4 shadow-xl hover:shadow-lg hover:bg-green-300 hover:border-solid">
                                    <h3 className="font-bold">{repo.name}</h3>
                                    <p>{repo.description}</p>
                                </div>
                            
                        </a>
                    )
                })}  
        </div>
    )

}

export default Repos