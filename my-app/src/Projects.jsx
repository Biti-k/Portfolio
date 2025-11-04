import { useState, useRef, useEffect } from 'react';
import Starfield from './components/Starfield.jsx';
import './App.css';

function Projects() {
    //   const flashRef = useRef(null); // Creamos una ref para el div flashOff
    //   const projectsRef = useRef(null); // Ref para la rotacion de texto de proyectos
    //   const welcomeTextRef = useRef(null); // Ref para el texto de bienvenida


    //   const animateGalaxy = (e) => {
    //     const galaxy = e.currentTarget; 
    //     galaxy.classList.remove('animateGalaxy');

    //     void galaxy.offsetWidth; // Forzar reflow
    //     galaxy.classList.add('animateGalaxyIn');

    //     if (welcomeTextRef.current) {
    //       welcomeTextRef.current.classList.remove('flex');
    //       welcomeTextRef.current.classList.add('hidden');
    //     }
    const [projects] = useState([
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
        // Add more projects as needed
    ]);

    useEffect(() => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, []);

    return (
        <div>
            <div className='mainContainer bg-green-400/35 bg-gris'>
                <div className='bg-green-400 w-[90vw] h-[90vh] m-10 rounded-3xl flex items-center flex-col shadow-amber-200 shadow-2xs'>
                    <h1 className='text-5xl mb-6 mt-6 text-custom-purple text-shadow-amber-200 text-shadow-2xs font-bold text-center'>
                        My Projects
                    </h1>
                    <div className='text-2xl text-white m-10 projectsContainer flex flex-wrap justify-center items-center gap-4'>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className='project-card shadow-amber-200 shadow-2xs p-4 rounded-lg cursor-pointer transition-all duration-500 w-[400px] hover:scale-[1.02]'
                                onClick={() => window.open(project.url, '_blank')}
                                style={{
                                    opacity: 0,
                                    transform: 'translateY(50px)',
                                }}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-48 object-cover rounded-lg mb-4'
                                />
                                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                                <p className='text-sm'>{project.description}</p>
                            </div>
                        ))}
                        <svg className="absolute bottom-0 z-2 hover:scale-125 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,181.3C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                        <svg className="absolute bottom-[120px] z-1 hover:scale-125 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#24245D" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,181.3C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                        <svg className="absolute bottom-[200px] z-0 hover:scale-125 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#24242E" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,181.3C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div> 
        </div>

);
}
export default Projects;