'use client';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import Cube from './components/Cube';
import Image from 'next/image';
// import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
// import NavElement from './components/NavElement';
import TechnologyPill from './components/TechnologyPill';import Navbar from './components/Navbar';
;
// import { useEffect, useState } from 'react';

export default function HomePage() {
  // For cards
  const cardIcon = "/favicon.ico"
  const cardtitle = "They are watching";
  const cardDescription = "They are Watching game, made along with StraGeo Studios for the Brackeys GameJam 2025-1";
  // const technologies = ["Godot", "Git"];
  const cardTech = "Next";

  // For pills
  const pillIcon = "/icons/nextjs.svg"
  const pillName = "Next.js";




  return (
    <div>
      <Navbar/>
    <div className='p-25'>
      <div className='flex'>
        {/* Profile */}
        <div className='flex flex-col justify-center w-80 h-120'>
          <Image src='/images/profile-picture.webp' alt='Profile picture' width={300} height={300} className='rounded-full' />
          <h1 className='mt-4 text-center text-3xl'>Slyv</h1>
          <h2 className='text-center text-2'>Software Engineer / UI Designer</h2>
          <p className='mt-4 text-sm px-2'>I‘m a fullstack programmer and absolutley love designing. I also enjoy everything in the tech industry and a continuous open sours comunity developer</p>
        </div>

        {/* Part 2 */}
        <div className='mx-4'>

          {/* Sections */}
          {/* <div className='bg-[#232323] mb-4'>
            <div className='flex'>
              <NavElement />
            </div>
          </div> */}

          {/* Languages */}

          <div className='flex gap-4'>
            <TechnologyPill setPillName={pillName} setPillIcon={pillIcon}/>
          </div>

          {/* Projects */}
          <div className='mt-3 grid grid-cols-3 gap-4'>
            <ProjectCard setCardIcon={cardIcon} setCardTitle={cardtitle} setCardDescription={cardDescription} setCardTechnologies={cardTech}/>
          </div>

        </div>
      </div>

      {/* <div className='w-100 h-100 absolute top-0 left-0'>
        <Canvas className="h-7" camera={{ position: [3, 3, 3] }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Cube position={[0, 0, 0]} />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div> */}
    </div>
    </div>


  );
}