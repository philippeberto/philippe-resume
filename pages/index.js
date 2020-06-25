import React from 'react'
import PageHead from '../components/head'
import Hero from '../components/Hero/index'
import Summary from '../components/summary'
import Education from '../components/Education/index'
import Footer from '../components/footer'
import Repos from '../components/Repos/index'



const Index = (props) => {
    return( 
        <div className="container mx-auto lg:w-3/4">
            <PageHead />
            <Hero />
            <Summary />
            <Education />
            <h3 className='text-center mt-4 text-xl md:text-3xl uppercase text-green-500 font-bold'>Minhas Contribuições</h3>
            <p className='text-center'>Public Repos: {props.user.public_repos} | Public Gists: {props.user.public_gists} | Followers: {props.user.followers}</p>
                    
            {props.repos.map (repo => {
                return (
                    <a key={repo.id} href={'https://github.com/philippeberto/'+repo.name}><div className="rounded bg-green-200 mx-8 my-4 p-4 shadow-xl hover:shadow-lg hover:bg-green-300 hover:border-solid">
                        <h3 className="font-bold">{repo.name}</h3>
                        <p>{repo.description}</p>
                    </div></a>
                )
            })}        
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context){
    const resRepos = await fetch('https://api.github.com/users/philippeberto/repos')
    const resUser = await fetch('https://api.github.com/users/philippeberto')
    const originalRepos = await resRepos.json()
    const user = await resUser.json()

    
    //Para criar filtros para a exibição
    const dontShowRepos = ['appAcademy']

    const isNotFork = repo => !repo.fork
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.name) === -1
    const extractData = repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count 
    })
    const repos = originalRepos
                        .filter(isNotFork)
                        .filter(dontShowFilter)
                        .map(extractData)
    
    return {
        props:{
            repos,
            user
        }
    }
}

export default Index