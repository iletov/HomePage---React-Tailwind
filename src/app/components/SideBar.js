import Link from 'next/link'
import React from 'react'

const data = [
  'Item-1', 'Item-2', 'Item-3', 'Item-4', 'Item-5',
]

const SideBar = () => {
  return (
    <aside className=' 
      bg-component text-slate-100 p-4 
      min-w-[20%] h-full fixed'>
      <nav className='
        flex flex-col gap-2 justify-center items-center '>
        {data.map((item, index) => (
          <Link href={`#`} key={index} className='hover:text-slate-600 w-full flex items-center justify-center'>{item}</Link>
        ))}
      </nav>
    </aside>
  )
}

export default SideBar