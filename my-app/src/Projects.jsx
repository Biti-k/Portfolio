import { useState, useEffect } from 'react';
import './App.css';

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Project 1",
      image: "/src/assets/projectRace.png",
      url: "https://github.com/yourusername/project1",
      description: "Description of project 1"
    },
    {
      title: "Project 2",
      image: "/src/assets/projectsPlanet.gif",
      url: "https://github.com/yourusername/project2",
      description: "Description of project 2"
    },
    {
      title: "Project 3",
      image: "/src/assets/project3.png",
      url: "https://github.com/yourusername/project3",
      description: "Description of project 3"
    },
  ]);

  const svgs = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,186.7C384,160,480,128,576,138.7C672,149,768,203,864,208C960,213,1056,171,1152,176C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,181.3C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>`
  ];

  useEffect(() => {
    // Barajar los proyectos una sola vez
    setProjects(prev => [...prev].sort(() => Math.random() - 0.5));

    // Animación de entrada
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, []);

  return (
    <div className='mainContainer bg-green-400/35 bg-gris h-full'>
      <div className='text-2xl text-white gap-6 justify-center w-full h-full'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='absolute rounded-lg transition-all duration-500 w-full'
            onClick={() => window.open(project.url, '_blank')}
            style={{
              opacity: 1,
              bottom: `${index * 100}px`,
              zIndex: projects.length - index,
            }}
          >
            <div className='projectWave'>
                {
                (index+1) % 2 === 0 ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="transition-transform duration-300" style={{ transformOrigin: "bottom center", pointerEvents: "visiblePainted", }}><path className='pathHover transition duration-200 cursor-pointer' fill={`rgba(200,${150 / (index+1)},100, 1)`} fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,181.3C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                : 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="transition-transform duration-300" style={{ transformOrigin: "bottom center", pointerEvents: "visiblePainted", }}><path className='pathHover transition duration-200 cursor-pointer' fill={`rgba(200,${150 / (index+1)},100, 1)`} fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,186.7C384,160,480,128,576,138.7C672,149,768,203,864,208C960,213,1056,171,1152,176C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                }
                <div className='h-[200px] w-full -mt-[1px] fillSquare cursor-pointer'
                style={{
                    backgroundColor: `rgba(200,${150 / (index+1)},100, 1)`,
                }}
                />
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
