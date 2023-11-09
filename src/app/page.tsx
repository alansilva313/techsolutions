import Header from '@/components/header'
import Secao1 from '@/components/secao1'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <div className='flex flex-col'>
    <Header />
     
     <Secao1 />
   </div>
   </>
  )
}
