import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/app/auth'
import SearchForm from './SearchForm'

const Navbar = async () => {
    
    const session = await auth()

    return (
        <header className='px-5 py-3 bg-[#161616] shadow-sm'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/favicon.ico" alt="Logo" width={25} height={25} />
                </Link>
                <SearchForm/>
                <div className='flex items-center gap-5'>
                    {session && session?.user ? (
                        // Render the content you want or can be the following one:
                        <>
                            <Link href="/user">
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" });
                            }}>
                                <button type='submit'>
                                    <span className='bg-[#202020]  p-2 px-3 text-sm rounded-sm'>Logout</span>
                                </button>
                            </form>


                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form onClick={async () => {
                            "use server";
                            await signIn('github');
                        }}>
                            <button type='submit'>
                                <span className='bg-[#202020]  p-2 px-3 text-sm rounded-sm'>Login</span>
                            </button>
                        </form>
                    )}

                </div>
            </nav>
        </header>
    )
}

export default Navbar