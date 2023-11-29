import Image from 'next/image'
import { HeroSection } from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#101010]">
      <div className='mb-20'>
        <Navbar />
      </div>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <div className='mb-20'>
          <HeroSection />
        </div>

        <div className='p-24'></div>
        <div className='mb-20'>
          <AboutSection />
        </div>

        <div className='p-24'></div>
        <div className='mb-20'>
          <ProjectSection />
        </div>

        <div className='p-24'></div>
        <div>
          <EmailSection />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
