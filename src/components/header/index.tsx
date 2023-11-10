import React from 'react'

export default function Header() {
  return(
    <div className='flex fixed bg-white z-10 items-center justify-between pt-12 p-5 w-full h-16'>
    <h3 className='text-2xl'>Tech Solutions</h3>
    <a href="https://api.whatsapp.com/send?phone=5518997763224&text=Preciso%20de%20uma%20landing%20page." target="_blank">
    <button className='bg-blue-600 p-2 rounded-lg text-slate-200'>Saber mais</button>
    </a>
    </div>
  )
}
