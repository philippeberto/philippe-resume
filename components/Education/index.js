import React from 'react'

const Education = () => {
    return(
        <div>
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
        </div>
    )
}

export default Education