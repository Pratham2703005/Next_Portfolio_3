import Image from 'next/image';
import Footer from '@/components/shared/Footer';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ContactEnhanced from '@/components/ContactEnhanced';
import { Boxes } from '@/components/ui/background-boxes';
import AnimatedShapes from '@/components/ui/AnimatedShapes';
import { Achievements } from '@/components/Achievements';

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
        <Boxes className='z-1'/>
        <AnimatedShapes />
        <div className="w-full max-w-7xl mx-auto px-4 pb-12 pt-24">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center ">
            <div className="w-full lg:w-2/3 text-center lg:text-left space-y-4">
              <div className="relative inline-block">
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--military-accent)] tracking-wider uppercase">
                  PRATHAM ISRANI
                </h1>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--military-tactical)]"></div>
              </div>

              {/* Role */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-[var(--military-tactical)] text-xl font-bold">&gt;&gt;</span>
                <p className="text-2xl md:text-3xl text-[var(--military-text)] font-bold uppercase tracking-wide">
                  Full-Stack Developer
                </p>
              </div>

              <div className="military-card p-6 space-y-4 relative !z-2">
                <div className="flex items-center gap-2 border-b border-[var(--military-border)] pb-2">
                  <span className="text-[var(--military-tactical)] font-bold text-sm">STATUS:</span>
                  <span className="text-[var(--military-accent)] font-bold text-sm uppercase">Active Deployment</span>
                </div>
                
                <p className="text-[var(--military-text)] leading-relaxed">
                  <span className="text-[var(--military-accent)] font-bold">MISSION:</span> Building high-impact web solutions 
                  that solve real-world problems. Specialized in creating interactive experiences with cutting-edge technology.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--military-border)]">
                  <div>
                    <p className="text-[var(--military-tactical)] text-xs font-bold uppercase">LeetCode Solved</p>
                    <p className="text-[var(--military-accent)] text-2xl font-bold">600+</p>
                  </div>
                  <div>
                    <p className="text-[var(--military-tactical)] text-xs font-bold uppercase">SIH 2024</p>
                    <p className="text-[var(--military-accent)] text-2xl font-bold">TOP 48</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[var(--military-tactical)] text-[var(--military-dark)] font-bold uppercase tracking-wider hover:bg-[var(--military-accent)] transition-all border-2 border-transparent hover:border-[var(--military-accent)] text-center !z-2"
                >
                  [ CONTACT ]
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border-2 border-[var(--military-border)] text-[var(--military-text)] font-bold uppercase tracking-wider hover:border-[var(--military-accent)] hover:text-[var(--military-accent)] transition-all text-center !z-2"
                >
                  [ DOWNLOAD RESUME ]
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center ">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative border-4 border-[var(--military-accent)] overflow-hidden !z-2">
                  <Image 
                    src="/profile1.jpg" 
                    alt="Pratham Israni" 
                    fill 
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    priority 
                  />
                  
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--military-tactical)]"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[var(--military-tactical)]"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[var(--military-tactical)]"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--military-tactical)]"></div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-[var(--military-dark)] border-2 border-[var(--military-accent)] px-4 py-2 !z-2">
                  <p className="text-[var(--military-accent)] font-bold text-sm">ID: MAR-2703</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      {/* <MyApproach /> */}
      <Achievements />
      <Skills />
      <ContactEnhanced />

      <Footer />
    </div>
  );
};

export default Home;