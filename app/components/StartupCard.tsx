import Link from 'next/link'
import React from 'react'

const StartupCard = ({post}: {post: StartupTypeCard}) => {
    const {_createdAt, views, author: {authorId, name}, title, category, _id, image} = post;

  return (
    <li className='startup-card group'>
        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/startup/${_id}`}>
                    <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                </Link>
            </div>
        </div>
        <div>
            <Link href={`/user/${authorId}`}>
                <span className='text-16-medium line-clamp-1'>{name} • {_createdAt}</span>
            </Link>
            <span className='text-16-medium'>{views}</span>
        </div>
    </li>
  )
}

export default StartupCard