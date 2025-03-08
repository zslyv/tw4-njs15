import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ProjectCard = ({setCardIcon, setCardTitle, setCardDescription, setCardTechnologies}: {setCardIcon: string, setCardTitle: string, setCardDescription: string, setCardTechnologies: string}) => {
    return (
        <div className='bg-[#232323] p-3 rounded-2xl hover:bg-[#3c3c3c] w-[258px]'>
            <div>
                <Link href={setCardIcon}>
                    <Image src={setCardIcon} alt='pfp' width={30} height={30} className='rounded-full inline' />
                    <span className='line-clamp-1 inline pl-3'>{setCardTitle}</span>
                </Link>
            </div>
            {/* <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> */}
            <div className='flex-between mt-5'>
                <div className='flex-1'>
                    <Link href={`/`}>
                        <h3 className='line-clamp-1 inline'>{setCardDescription}</h3>
                    </Link>
                </div>
            </div>
            <Link href={`/`}>
                <p className='mb-4'>19/02/2024</p>
            </Link>
            <Link href={`/`}>
                <p className='bg-[#141414] inline p-1 pl-0 px-3 rounded-2xl'>
                    <Image src="/icons/nextjs.svg" alt='pfp' width={22} height={22} className='rounded-full inline mr-2' />
                    {setCardTechnologies}</p>
            </Link>
            
            {/* <Link href={`/`}>
                <p className='bg-[#141414] inline p-1 pl-0 px-3 rounded-2xl'>
                    <Image src="/icons/nextjs.svg" alt='pfp' width={22} height={22} className='rounded-full inline mr-2' />
                    Next.js</p>
            </Link> */}
            <Image src="/images/yeah_image.jpg" alt="placehold" className='rounded-[5px] mt-5' width={300} height={300} />
        </div>
    )
}

export default ProjectCard