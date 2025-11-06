import { useState, useEffect } from 'react';
import './App.css';

function Projects() {
  const [projects, setProjects] = useState([
      {
      title: "Planets Exploration App",
      image: "/src/assets/projectsPlanet.gif",
      url: "https://github.com/yourusername/project2",
      description: "An application that allows users to explore different planets in our solar system and outside of it using data from NASA APIs."
    },
    {
      title: "Race Manager App",
      image: "/src/assets/projectRace.png",
      url: "https://github.com/yourusername/project1",
      description: "Description of project 1"
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

    // Animación de entrada
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, (index+1) * 200);
    });
  }, []);

  return (
    <div className='flex justify-center items-center bg-custom-dark h-full w-full flex-col gap-3 px-8 py-5'>
        {projects.map((project, index) => (
            <div key={index}
            className='group project-card h-[300px] w-[75%] flex  rounded-4xl p-2 shadow-green-300 shadow-xs hover:shadow-green-400 transition-all duration-300 opacity-0' 
            style={{backgroundColor: `rgba(100,${150 / (index+1)},100, 1)`,
                     transform: 'translateY(20px)', 
                    }}
            >
              <div className='flex items-center'>
                <svg className="ml-5 " width="200" height="200" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <mask id={`mask-${index}`}>
                      <rect width="1" height="1" fill="black" />
                      <path
                        d="M0.475097 0.020608 C0.480612 -0.006869 0.519388 -0.006869 0.524903 0.020608 L0.571269 0.251605 C0.575051 0.270448 0.597161 0.278588 0.612010 0.266604 L0.793792 0.119895 C0.815436 0.102427 0.845153 0.127617 0.831980 0.152266 L0.721096 0.359768 C0.712075 0.376650 0.723822 0.397229 0.742771 0.397739 L0.975238 0.403995 C1.002890 0.404739 1.009630 0.443354 0.983905 0.453651 L0.767467 0.540292 C0.749850 0.547345 0.745772 0.570735 0.759940 0.583470 L0.934130 0.740035 C0.954822 0.758634 0.935419 0.792584 0.909186 0.783681 L0.688795 0.708892 C0.670805 0.702787 0.652793 0.718074 0.655584 0.737078 L0.689853 0.970393 C0.693926 0.998124 0.657484 1.011520 0.643038 0.987606 L0.521679 0.786683 C0.511768 0.770275 0.488232 0.770275 0.478321 0.786683 L0.356962 0.987606 C0.342516 1.011520 0.306074 0.998123 0.310147 0.970393 L0.344416 0.737078 C0.347207 0.718074 0.329195 0.702787 0.311205 0.708892 L0.090814 0.783681 C0.064580 0.792584 0.045178 0.758634 0.065870 0.740035 L0.240060 0.583470 C0.254228 0.570735 0.250150 0.547345 0.232533 0.540292 L0.016095 0.453651 C-0.009629 0.443354 -0.002889 0.404739 0.024762 0.403995 L0.257229 0.397739 C0.276178 0.397229 0.287925 0.376650 0.278904 0.359768 L0.168020 0.152266 C0.154848 0.127617 0.184564 0.102427 0.206208 0.119895 L0.387990 0.266604 C0.402839 0.278588 0.424949 0.270448 0.428731 0.251605 L0.475097 0.020608 Z"
                        fill="white"
                      />
                    </mask>
                  </defs>

                  <image
                    href={project.image}
                    width="1"
                    height="1"
                    preserveAspectRatio="xMidYMid slice"
                    mask={`url(#mask-${index})`}
                  />
                </svg>
              </div>
              <svg className="relative -z-1 left-[23px]" width="210" height="210" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg" clipPathUnits="objectBoundingBox">
                <path clipPathUnits="objectBoundingBox"
                  d="M0.475097 0.020608 C0.480612 -0.006869 0.519388 -0.006869 0.524903 0.020608 L0.571269 0.251605 C0.575051 0.270448 0.597161 0.278588 0.612010 0.266604 L0.793792 0.119895 C0.815436 0.102427 0.845153 0.127617 0.831980 0.152266 L0.721096 0.359768 C0.712075 0.376650 0.723822 0.397229 0.742771 0.397739 L0.975238 0.403995 C1.002890 0.404739 1.009630 0.443354 0.983905 0.453651 L0.767467 0.540292 C0.749850 0.547345 0.745772 0.570735 0.759940 0.583470 L0.934130 0.740035 C0.954822 0.758634 0.935419 0.792584 0.909186 0.783681 L0.688795 0.708892 C0.670805 0.702787 0.652793 0.718074 0.655584 0.737078 L0.689853 0.970393 C0.693926 0.998124 0.657484 1.011520 0.643038 0.987606 L0.521679 0.786683 C0.511768 0.770275 0.488232 0.770275 0.478321 0.786683 L0.356962 0.987606 C0.342516 1.011520 0.306074 0.998123 0.310147 0.970393 L0.344416 0.737078 C0.347207 0.718074 0.329195 0.702787 0.311205 0.708892 L0.090814 0.783681 C0.064580 0.792584 0.045178 0.758634 0.065870 0.740035 L0.240060 0.583470 C0.254228 0.570735 0.250150 0.547345 0.232533 0.540292 L0.016095 0.453651 C-0.009629 0.443354 -0.002889 0.404739 0.024762 0.403995 L0.257229 0.397739 C0.276178 0.397229 0.287925 0.376650 0.278904 0.359768 L0.168020 0.152266 C0.154848 0.127617 0.184564 0.102427 0.206208 0.119895 L0.387990 0.266604 C0.402839 0.278588 0.424949 0.270448 0.428731 0.251605 L0.475097 0.020608 Z"
                  fill="#242424"
                />
              </svg>

              <div className='px-10 w-full'>
                <h2 className='text-3xl text-center font-bold text-white mb-2'>{project.title}</h2>
                <p className=''>{project.description}</p>
                <a href={project.url} className='font-bold text-cyan-200'>Github Link!</a>
              </div>
            </div>
        ))}
    </div>
  );
}

export default Projects;
