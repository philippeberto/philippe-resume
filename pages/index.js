import React from 'react'
import PageHead from '../components/head'
import Hero from '../components/Hero/index'
import Summary from '../components/summary'
import Education from '../components/Education/index'
import Footer from '../components/footer'
import Repos from '../components/Repos/index'



const Index = ({repos, user}) => {
    return( 
        <div className="container mx-auto lg:w-3/4">
            <PageHead />
            <Hero />
            <Summary />
            <Education />
            <Repos user={user} repos={repos} />
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