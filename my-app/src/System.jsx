import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import RotatedText from './components/rotatedText';

function System() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const navigate = useNavigate();

  const goToProjects = () => {
    projectsRef.current?.classList.remove('animate-ping');
    projectsRef.current?.classList.add('big-cercle');
    setTimeout(() => {
      navigate('/projects');
    }, 750);
  };

  const goToAboutMe = () => {
    aboutMeRef.current?.classList.remove('animate-ping');
    aboutMeRef.current?.classList.add('big-cercle-about-me');
  
    setTimeout(() => {
        navigate('/about-me');
    }, 750);
  };

  const goToExperience = () => {
    experienceRef.current?.classList.remove('animate-ping');
    experienceRef.current?.classList.add('big-cercle-experience');

    setTimeout(() => {
      navigate('/experience');
    }, 750);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        setTimeout(() => {
          section.style.opacity = '1';
        }, 10);
      });
    }, []);


  return (
    <div className='h-full w-full overflow-hidden bg-custom-dark md:p-8 p-2'>
      <div className='flex flex-wrap'>
        <div className='w-[100%] h-[33,33%] experience flex justify-end section transition duration-500' style={{opacity:0}}>
          <div className='bg-purple-800 rounded-full  w-[25vh] h-[25vh]  shadow-experience cursor-pointer' onClick={goToExperience}>
            <RotatedText text="EXPERIENCE" angle={0} />
            <div
              className='bg-custom-purple rounded-full w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping'
              ref={experienceRef}
            />
          </div>  
        </div>
        <div className='w-[100%] h-[33,33%] mt-12 mb-12 projects flex justify-center section ' >
          <div className='bg-green-400 rounded-full  w-[25vh] h-[25vh] shadow-star cursor-pointer' onClick={goToProjects}>
            <RotatedText text="PROJECTS" angle={0} />
            <div
              className='bg-green-300 rounded-full w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping'
              id="projects"
              ref={projectsRef}
            />
          </div> 
        </div>
        <div className='w-[100%] h-auto about-me flex justify-start section duration-500' style={{opacity:0}}>
          <div className='bg-orange-400 rounded-full  w-[25vh] h-[25vh] shadow-about cursor-pointer' onClick={goToAboutMe} >
            <RotatedText text="ABOUT ME" angle={0} />
            <div
              className='bg-orange-500 rounded-full w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw]  relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping' ref={aboutMeRef}
            />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default System;
