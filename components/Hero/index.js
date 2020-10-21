import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
    return (
        <div className='md:grid md:grid-cols-2 m-2 lg:mt-4'> 
            <div className='lg:ml-8'>
                <h1 className="text-xl uppercase leading-none lg:mt-8">Olá, eu sou o Philippe Berto</h1>
                <h3 className="inline font-bold text-2xl uppercase leading-none lg:text-3xl">Fullstack Developer</h3>
                <p className='block'>Em formação</p>
                <ContactMe />
            </div>
            <div className='my-4 flex justify-center'>
                <img className='w-1/3 md:w-1/2 rounded-full border-4 lg:border-8 border-green-500' src='images/iphonex.JPG' alt='minha imagem' />
            </div> 
        </div>
    )
}

export default Hero