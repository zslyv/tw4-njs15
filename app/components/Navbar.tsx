import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NavElement from './NavElement';

const Navbar = () => {
    return (
        <header className='px-5 py-2 bg-[#232323] shadow-sm'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/favicon.ico" alt="Logo" width={25} height={25} />
                </Link>

                <div className='flex items-center gap-3'>
                    <NavElement setNavIcon='/icons/vscode.svg' setNavTitle='Programming'/>
                    <NavElement setNavIcon='/icons/blender.svg' setNavTitle='3D Renders'/>
                    <NavElement setNavIcon='/icons/illustrator.svg' setNavTitle='My drawings'/>
                    <NavElement setNavIcon='/icons/threejs.svg' setNavTitle='Videos'/>
                    <NavElement setNavIcon='/icons/unity.svg' setNavTitle='Blog'/>

                </div>
            </nav>
        </header>
    )
}

export default Navbar