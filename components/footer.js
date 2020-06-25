import React from 'react'

const Footer = () => {
    return(
        <div>
            <div className='bg-gray-800 border border-green-500 mt-8'></div>
                <div className='text-center text-sm m-3'>
                    <p>Este site foi criado durante o curso Fullstack Master. Foram utilizados NextJS + SSR (Server Side Rendering)
                    + Vercel (como platforma). Podes encontrar o código-fonte deste projeto em:
                    <a href='https://github.com/philippeberto/philippe-resume' className='hover:underline'> https://github.com/philippeberto/philippe-resume</a></p>            
                </div>
        </div>
    )
}

export default Footer