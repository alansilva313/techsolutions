

import React from 'react'

export default function Secao1() {

  return (
    <div className='flex flex-col mt-20 gap-4 p-8 pt-24'>
        <h3 className='text-3xl'>Olá, bem-vindo(a) a TechSolutions</h3>
        <p className='text-lg'>Somos especializados em desenvolvimento de sites e lading pages para o seu negócio</p>

        <div className='w-full flex items-center justify-center mt-10 p-10'>
            <a href="https://api.whatsapp.com/send?phone=5518997763224&text=Preciso%20de%20uma%20landing%20page." target='_blank'>
            <button className='bg-blue-800 p-4 rounded text-white'>Preciso de um site!</button>
            </a>
        </div>

    </div>
  )
}
