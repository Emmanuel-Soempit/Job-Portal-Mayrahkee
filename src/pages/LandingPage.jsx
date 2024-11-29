import React from 'react'
import Hero from '../components/Landing/Hero';
import Navbar from '../components/Landing/Navbar'
import Experience from '../components/Landing/Experience'
import Banner from '../components/Landing/Banner'
import UserCategory from '../components/Landing/UserCategory'
import JobBanner from '../components/Landing/JobBanner'
import Jobs from '../components/Landing/Jobs'
import News from '../components/Landing/News'
const LandingPage = () => {
  return (
    <div className='relative max-w-[1200px] w-full mx-auto'>
      <Navbar />
      <main className="relative top-20 px-5">
        <Hero />
        <Experience />
        <Banner 
        title="Choose Your Path" 
        desc="Choose the path that aligns with your goals and unlock new opportunities for growth" />
        <UserCategory />
        <JobBanner />
        <Jobs />
        <Banner 
        title="insights and updates" 
        desc="stay informed with experts articles, industry news and tips to help you grow personally and professionally" />
        <News />
      </main>
    </div>    
  )
}

export default LandingPage