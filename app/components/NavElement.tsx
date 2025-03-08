import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const NavElement = ({setNavIcon, setNavTitle}: {setNavIcon: string, setNavTitle: string}) => {
  return (
    <div className='bg-[#202020] p-1 px-3 rounded-sm hover:bg-[#3c3c3c]'>
        <Link href={`/`} >
        <Image src={setNavIcon} alt='pfp' width={18} height={18} className='inline' />
            <span className='line-clamp-1 inline pl-3 text-[12px]'>{setNavTitle}</span>
        </Link>
    </div>
  )
}

export default NavElement