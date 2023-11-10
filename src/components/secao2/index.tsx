import React from 'react'

export default function Secao2() {




  return (
    <div className='w-full gap-8 flex flex-col p-8'>
        <h3 className='text-lg font-boldf'>Já pensou em ter um site que direciona os seus clientes direto para o seu WhatsApp?</h3>

         
         <div className='h-48 flex flex-col justify-between p-4 text-white hover:h-52 transition-all bg-blue-700 rounded-lg'>
            <h3>IR MAIS LONGE</h3>
            <p>Mais alcance para o seu negócio</p>
         </div>


         <div className='h-48 p-4 flex flex-col justify-between  hover:h-52 transition-all bg-green-600 rounded-lg'>
            <h3>div card</h3>
         </div>

         <div className='h-48 p-4 flex flex-col justify-between  hover:h-52 transition-all text-black bg-zinc-300 rounded-lg'>
            <h3>div card</h3>
         </div>
      
    </div>
  )
}
