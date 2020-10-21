import React from 'react'

const Education = () => {
    return(
        <div>
            <h3 className='text-center py-4 text-xl md:text-3xl uppercase text-green-500 font-bold'>Minha Formação</h3>
            <div className=' bg-white p-4 rounded-lg shadow-lg'>
                <div className='lg:grid lg:grid-cols-2 lg:ml-6 block ml-0'>
                    <div>
                        <h2 className='text-sm md:text-xl text-green-500 uppercase'>Graduação</h2>
                        <h3 className='text-sm md:text-xl uppercase'>Análise e Desenvolvimento de Sistemas</h3>
                        <h4 className='text-xs md:text-sm'>UCL - Faculdade do Centro Leste, Serra - Brasil</h4>
                    </div>
                    <div className='mt-4 lg:ml-10 lg:mt-0'>
                        <h2 className='text-sm md:text-xl text-green-500 uppercase'>Extras</h2>
                        <h3 className='text-sm md:text-xl uppercase'>Fulstack Master</h3>
                        <h4 className='text-xs md:text-sm'>Curso Online - DevPleno</h4>  
                    </div>           
                </div>
            </div>
        </div>
    )
}

export default Education