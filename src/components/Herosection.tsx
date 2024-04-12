import React from 'react';

const HeroSection = () => {    
  return (
    <div className='relative w-full h-screen flex flex-col items-center justify-center bg-center bg-cover bg-fixed custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]' />
      <div className='p-5 text-white z-[2] content-justify-center text-wrap sm:shifte-left'>
        <h1 className='text-5xl font-bold hover:text-slate-950'> I'm Here To Represent my Self Ram</h1>
        <p className='py-5 text-xl'>Greetings! there, I'm Ram, Hailing in India, I'm a Fullstack developer passionate about building a modern web application that users love. </p>
        <h1 className='text-xl font-semibold'>Skills</h1>
          <p>Reactjs || Nextjs || JavaScript || HTML ||CSS ||Tailwind || NodeJS ...</p>
          <button className='px-8 py-2 border-2 mt-20 border-orange-300'><a href='http://localhost:3000/Resume' target='_blank' >Download CV</a> </button>
      </div>
     
    </div>
  );
};

export default HeroSection;
