import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const StartupCard = ({post}: {post: StartupTypeCard}) => {
    const {_createdAt, views, author: {authorId, name}, title, category, _id, image, description} = post;

  return (
    <li className='startup-card group'>
        <div>
            <Link href={`/user/${authorId}`}>
                <Image src="https://placehold.co/30x30" alt='pfp' width={30} height={30} className='rounded-full inline'/>
                <span className='line-clamp-1 inline pl-3'>{name} • {_createdAt}</span>
            </Link>
        </div>

        <div className='flex-between mt-5'>
            <div className='flex-1'>
                <Link href={`/startup/${_id}`}>
                    <h3 className='line-clamp-1 inline'>{title} • </h3>
                </Link>
                <span className='justify-end'>{views} views</span>
            </div>
        </div>
        <Link href={`/startup/${_id}`}>
            <p className='mb-4'>{description}</p>
        </Link>
        <Link href={`/?query=${category.toLowerCase()}`}>
            <p className='bg-[#141414] inline p-1 px-3 rounded-2xl'>{category}</p>
        </Link>
        <img src={image} alt="placehold" className='rounded-[5px] mt-5' />
    </li>
  )
}

export default StartupCard