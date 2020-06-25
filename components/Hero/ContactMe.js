import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const ContactMe = () => {
    return (
        <div className='border-2 border-green-500 rounded-lg p-2 md:px-4 mt-6 md:mt-4 lg:mt-8'>
            <h3 className='absolute rounded-lg text-xl text-white uppercase font-bold bg-green-500 px-2 -mt-6 ml-8'>Contato</h3>
            <p className='mt-4 ml-8'>
                <a href='https://www.linkedin.com/in/philippeberto/'><FaLinkedin className='text-4xl inline-block' /></a>
                <a href='https://github.com/philippeberto'><FaGithubSquare className='text-4xl inline-block ml-4' /></a><br />
                <span className='inline-block mt-2 text-sm'> philippeberto@outlook.com</span>
                
            </p>
        </div>
    )
}

export default ContactMe