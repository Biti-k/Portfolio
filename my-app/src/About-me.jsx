import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './App.css';

function AboutMe() {
  const navigate = useNavigate();
  const redScreen = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.about-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, (index + 1) * 300);
    });
  }, []);

  const animateReturn = () => {
    containerRef.current?.classList.add('animation-back-left-bottom');
    redScreen.current?.classList.remove('opacity-0');
    redScreen.current?.classList.add('opacity-100', 'z-20');
    setTimeout(() => {
      navigate("/system");
    }, 700);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-full h-auto w-full gap-4 px-8 py-5 overflow-x-hidden overflow-y-hidden text-white"
      ref={containerRef}
    >
      {/* 🔹 Fondo de ondas rojas/naranjas - CONTENIDO */}
      <div className="absolute inset-0 -z-10 opacity-90 overflow-hidden">
        <div className="relative w-full h-full">
          <svg
            className="absolute bottom-0 h-auto animate-waveMove w-[200%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ff5500"
              fillOpacity="1"
              d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-0 opacity-60 animate-waveMove2 w-[200%] h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffbb33"
              fillOpacity="1"
              d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,122.7C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Pantalla de transición */}
      <div
        className="bg-amber-500 absolute w-full h-full z-0 opacity-0 transition duration-1000"
        ref={redScreen}
      ></div>

      <div
        className="absolute text-2xl z-10 text-white left-3 top-3 border border-yellow-300 p-3 rounded-3xl cursor-pointer bg-red-600/60 hover:bg-red-600 transition-all"
        onClick={animateReturn}
      >
        <p>Return <span>🚀</span></p>
      </div>

      {/* 🔸 Sección principal */}
      <div className="about-section opacity-0 transform translate-y-6 bg-gradient-to-br from-red-700 to-yellow-600 p-8 rounded-3xl shadow-lg shadow-yellow-400/30 w-[80%] max-w-3xl transition-all duration-700">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg leading-relaxed text-center">
          I'm <span className="font-bold text-yellow-300">Diego De Luca</span>, a passionate
          <span className="text-orange-300"> fullstack developer</span> with a strong curiosity
          for science, art, technology, and how things work.  
          I love building interactive web applications that combine clean design and solid logic.  
        </p>
      </div>

      <div className="about-section opacity-0 transform translate-y-6 bg-gradient-to-br from-orange-700 to-red-600 p-8 rounded-3xl shadow-lg shadow-orange-400/30 w-[80%] max-w-3xl transition-all duration-700">
        <h2 className="text-3xl font-semibold mb-3 text-center">🎓 Studies</h2>
        <p className="text-lg leading-relaxed text-center">
          📘 <b>Degree in Web Development</b> — specialized in backend and frontend technologies.  
          <br />👨‍💻 Currently studying a <b>Physics degree</b> while working in tech.
        </p>
      </div>

      <div className="about-section opacity-0 transform translate-y-6 bg-gradient-to-br from-yellow-600 to-red-500 p-8 rounded-3xl shadow-lg shadow-red-400/30 w-[80%] max-w-3xl transition-all duration-700">
        <h2 className="text-3xl font-semibold mb-3 text-center">🧠 Skills</h2>
        <p className="text-lg leading-relaxed text-center">
            React • Javascript • C# • .NET • PHP • Laravel • MySQL • MicrosoftSQL • TailwindCSS  
            <br />
            Git • REST APIs • Agile Methodologies • Problem Solving • Teamwork • Adaptability
        </p>
      </div>

      <div className="about-section opacity-0 transform translate-y-6 bg-gradient-to-br from-red-700 to-orange-600 p-8 rounded-3xl shadow-lg shadow-red-400/30 w-[80%] max-w-3xl transition-all duration-700 mb-8">
        <h2 className="text-3xl font-semibold mb-3 text-center">🌍 Languages</h2>
        <p className="text-lg leading-relaxed text-center">
          Spanish — Native  
          <br /> English — Advanced
          <br /> Catalan — Advanced
        </p>
      </div>
    </div>
  );
}

export default AboutMe;