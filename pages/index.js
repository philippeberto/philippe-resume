import React from 'react'
import PageHead from '../components/head'
import Hero from '../Hero/index'



const Index = (props) => {
    return( 
        <div className="container mx-auto">
            <PageHead />
            <Hero />
            
            <div className=' bg-white p-4 text-center rounded-lg shadow-lg'>
                <p>Programador Fullstack, desenvolvo sites e sistemas web baseados nas tecnologias Javascript, Node.js e React.</p>
            </div>

            <h3 className='text-center py-4 text-xl md:text-3xl uppercase text-green-500 font-bold'>Minha Formação</h3>
            <div className=' bg-white p-4 rounded-lg shadow-lg'>
                <div className='grid grid-cols-2 ml-6'>
                    <div>
                        <h2 className='text-green-500 uppercase'>Graduação</h2>
                        <h3 className='text-sm md:text-xl uppercase'>Análise e Desenvolvimento de Sistemas</h3>
                        <h4 className='text-xs md:text-sm'>UCL - Faculdade do Centro Leste, Serra - Brasil</h4>
                    </div>
                    <div className='ml-10'>
                        <h2 className='text-sm md:text-xl text-green-500 uppercase'>Extras</h2>
                        <h3 className='text-sm md:text-xl uppercase'>Fulstack Master</h3>
                        <h4 className='text-xs md:text-sm'>Curso Online - DevPleno</h4>  
                    </div>           
                </div>
            </div>
            <h3 className='text-center mt-4 text-xl md:text-3xl uppercase text-green-500 font-bold'>Minhas Contribuições</h3>
            <p className='text-center'>Public Repos: {props.user.public_repos} | Public Gists: {props.user.public_gists} | Followers: {props.user.followers}</p>
                    
            {props.repos.map (repo => {
                return (
                    <a href={'https://github.com/philippeberto/'+repo.name}><div key={repo.id} className="rounded bg-green-200 mx-8 my-4 p-4 shadow-xl hover:shadow-lg hover:bg-green-300 hover:border-solid">
                        <h3 className="font-bold">{repo.name}</h3>
                        <p>{repo.description}</p>
                    </div></a>
                )
            })}
            <div className='bg-gray-800 border border-green-500 mt-8'></div>
            <div className='text-center text-sm mt-2'>
                <p>Este site foi criado durante o curso Fullstack Master. Foram utilizados NextJS + SSR (Server Side Rendering)<br />
                + Vercel (como platforma). Tu podes encontrar o código-fonte deste projeto em:: <br />
                <a href='https://github.com/philippeberto/philippe-resume'>https://github.com/philippeberto/philippe-resume</a></p>            
            </div>
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