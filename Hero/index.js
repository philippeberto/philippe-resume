import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='md:grid md:grid-cols-2 md:mt-8'> 
            <div className='m-2 lg:ml-20'>
                <h1 className="text-2xl uppercase leading-none">Olá, eu sou o Philippe Berto</h1>
                <h3 className="font-bold text-2xl uppercase leading-none">Fullstack Developer</h3>
                <div className='lg:absolute md:static sm:static border-2 border-green-500 rounded-lg p-2 md:px-4 mt-6 md:mt-4 lg:mt-8'>
                    <h3 className='absolute rounded-lg text-xl text-white uppercase font-bold bg-green-500 px-2 -mt-6 ml-2'>Contato</h3>
                    <p className='mt-4 ml-2'>
                        <a href='https://www.linkedin.com/in/philippe-berto-86b0701a9/'><FaLinkedin className='text-4xl inline-block' /></a>
                        <a href='https://github.com/philippeberto'><FaGithubSquare className='text-4xl inline-block ml-4' /></a><br />
                        <span className='inline-block mt-2 text-sm'> philippeberto@outlook.com</span>
                        
                    </p>
                </div>
            </div>
            <div className='w-1/2 flex items-start -mt-16 md:-mt-8 lg:-mt-12 lg:-ml-16'>
                <img className='float-right items-end mt-32' src='images/back.png' alt='minha imagem' /> 
                <img className='mt-8' src='images/logos_transparent.png' alt='logos' />                   
            </div> 
        </div>
    )
}

export default Hero