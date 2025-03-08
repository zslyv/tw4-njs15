import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TechnologyPill = ({setPillName, setPillIcon}: {setPillName: string, setPillIcon: string}) => {
    return (
        <div>
            <Link href={`/`} className='bg-[#232323] p-3 rounded-4xl hover:bg-[#3c3c3c]'>
                <Image src={setPillIcon} alt='pfp' width={25} height={25} className='rounded-full inline' />
                <span className='line-clamp-1 inline pl-3'>{setPillName}</span>
            </Link>
        </div>
    )
}

export default TechnologyPill