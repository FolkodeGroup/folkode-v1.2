'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFolder } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  id: string;
  avatar: string;
  name: string;
  role: string;
  description: string;
  links: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    avatar: "/laura-gimenez.webp",
    name: "Laura Giménez",
    role: "FRONTEND DEVELOPER",
    description: "Apasionada por crear experiencias digitales memorables que conectan personas y tecnología.",
    links: {
      github: 'https://github.com/Laura-gim',
      portfolio: '#',
    },
  },
  {
    id: "member-2",
    avatar: "/celi.webp",
    name: "Celina Pereyra",
    role: "FRONTEND DEVELOPER",
    description: "Construyendo soluciones con pasión por la tecnología.",
    links: {
      github: 'https://github.com/CelinaJP',
      linkedin: 'https://www.linkedin.com/in/celina-pereyra',
      portfolio: '#',
    },
  },
  {
    id: "member-3",
    avatar: "/Daro.webp",
    name: "Daro Giménez",
    role: "FULL STACK DEVELOPER",
    description: "Creando experiencias de usuario memorables y funcionales.",
    links: {
      github: 'https://github.com/dgimenezdeveloper',
      linkedin: 'https://www.linkedin.com/in/daseg/',
      portfolio: '#',
    },
  },
  {
    id: "member-4",
    avatar: "/gabrielsosa.webp",
    name: "Gabriel Sosa",
    role: "FULL STACK DEVELOPER",
    description: "Programar es construir puentes entre ideas y realidad usando lógica y creatividad.",
    links: {
      github: 'https://github.com/OGabrielSosa',
      linkedin: 'https://linkedin.com/in/carlos',
      portfolio: '#'
    },
  },
  {
    id: "member-5",
    avatar: "/matias.webp",
    name: "Matias Daniel Alessandrello",
    role: "FULL STACK DEVELOPER",
    description: "Los detalles importan. Cada línea de código cuenta para lograr un producto excepcional.",
    links: {
      github: 'https://github.com/malessan4',
      linkedin: '#',
      portfolio: '#',
    },
  },
  {
    id: "member-6",
    avatar: "/Ovejero.webp",
    name: "Agustin Ovejero",
    role: "BACKEND DEVELOPER",
    description: "Desarrollando soluciones innovadoras con un enfoque en la usabilidad.",
    links: {
      github: 'https://github.com/agustin-ovejero',
      linkedin: 'https://www.linkedin.com/in/agustin-ovejero-2a0439344/',
      portfolio: '#',
    },
  },
  {
    id: "member-8",
    avatar: "/fede.webp",
    name: "Fede Paal",
    role: "FRONTEND DEVELOPER",
    description: "Cada decisión en el frontend es una decisión sobre la experiencia del usuario",
    links: {
      github: 'https://github.com/FedericoPaal',
      linkedin: 'https://linkedin.com/in/federico-paal ',
      portfolio: '#',
    },
  },
  {
    id: "member-9",
    avatar: "/mauri.webp",
    name: "Mauricio Barreras",
    role: "FRONTEND DEVELOPER",
    description: "Un diseño consistente es la base de la confianza del usuario",
    links: {
      github: 'https://github.com/MauricioBarreras',
      linkedin: 'https://www.linkedin.com/in/mauricio-barreras-235b8128a',
      portfolio: '#',
    },
  },
  {
    id: "member-10",
    avatar: "/sasha.webp",
    name: "Sasha Porchia",
    role: "FRONTEND DEVELOPER",
    description: "Cada decisión en el frontend es una decisión sobre la experiencia del usuario",
    links: {
      github: 'https://github.com/SashaPorchia',
      linkedin: '#',
      portfolio: '#',
    },
  },
  {
    id: "member-11",
    avatar: "/nahue.webp",
    name: "Nahue Dalesio",
    role: "FULL STACK DEVELOPER",
    description: "El software funcionando es la principal medida de progreso.",
    links: {
      github: 'https://github.com/Nahuel-Dalesio',
      linkedin: 'https://ar.linkedin.com/in/nahuel-dalesio-183498213',
      portfolio: '#',
    },
  },
  {
    id: "member-12",
    avatar: "/Mai.webp",
    name: "Maia Avalos",
    role: "FULL STACK DEVELOPER",
    description: "Nunca me conformo; el progreso constante es la clave del éxito.",
    links: {
      github: 'https://github.com/maiavalos',
      linkedin: 'https://www.linkedin.com/in/maia-avalos-a37098345',
      portfolio: 'no tengo',
    },
  },
  {
    id: "member-13",
    avatar: "/Facu.webp",
    name: "Facu Carrizo",
    role: "FULL STACK DEVELOPER",
    description: "El buen código resuelve problemas, el excelente los previene.",
    links: {
      github: 'https://github.com/',
      linkedin: '#',
      portfolio: '#',
    },
  },
  {
    id: "member-7",
    avatar: "/cuqui.webp",
    name: "Lucas Echavarria",
    role: "BACKEND DEVELOPER",
    description: "El mejor código no es el que funciona, sino el que otros pueden entender y mantener.",
    links: {
      github: 'https://github.com/Lucasechavarria',
      linkedin: 'https://linkedin.com/in/lucas-echavarria',
      portfolio: '#',
    },
  },
];

export default function TeamMemberSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const topRowMembers = teamMembers.slice(0, 7);
  const bottomRowMembers = teamMembers.slice(7);

  // Tamaños responsivos del círculo
  const circleSize = {
    mobile: 200,    // 320px - 639px
    tablet: 240,    // 640px - 1023px  
    desktop: 280    // 1024px+
  };
  const circleRadius = circleSize.desktop / 2;

  const handleMemberChange = (member: TeamMember) => {
    if (member.id !== selectedMember.id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedMember(member);
        setIsTransitioning(false);
      }, 500); // Tiempo optimizado para transición suave
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Triángulo invertido verde decorativo superior */}
      <div 
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{
          height: '140px',
          background: '#56743C',
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          zIndex: 1
        }}
      />
      {/* Título dentro del triángulo */}
      <div className="w-full flex flex-col items-center" style={{ position: 'absolute', top: '40px', left: 0, zIndex: 10 }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white px-4">
          Nuestro equipo
        </h2>
      </div>

      <div className="flex flex-col items-center w-full max-w-6xl mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-10 px-4 sm:px-6 md:px-8" style={{marginTop: '120px'}}>
        {/* Contenedor principal - Layout vertical en móvil, horizontal en desktop */}
        <div className="flex flex-col items-center justify-center w-full mb-8 sm:mb-12">
          {/* Wrapper para círculo y tarjeta */}
          <div className="flex flex-col lg:flex-row items-center justify-center relative w-full max-w-4xl">
            {/* Círculo con imagen */}
            <div className="relative flex-shrink-0 z-10 w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0
                  }}
                  className="w-full h-full"
                >
                  <div 
                    className="w-full h-full rounded-full overflow-hidden shadow-2xl relative"
                    style={{ background: '#025159', transform: 'translateZ(0)' }}
                  >
                    <Image
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 240px, 280px"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tarjeta de información - Vertical en móvil, horizontal en desktop */}
            <AnimatePresence mode="wait">
              {!isTransitioning && (
                <motion.div
                  key={selectedMember.id + '-card'}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.3 // Delay para que aparezca después de la imagen
                  }}
                  className="relative overflow-hidden w-full mt-6 lg:mt-0 lg:ml-[-140px] lg:w-auto"
                  style={{
                    zIndex: 0
                  }}
                >
                <div
                  className="h-full flex flex-col justify-center shadow-xl w-full rounded-[20px] lg:rounded-l-none lg:rounded-r-[20px] lg:min-h-[280px] lg:min-w-[480px]"
                  style={{
                    background: '#0B4F50',
                  }}
                >
                  <div className="px-6 py-6 lg:pl-[180px] lg:pr-10">  
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 text-center lg:text-left"
                    >
                      {selectedMember.name}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal mb-3 sm:mb-4 text-center lg:text-left"
                    >
                      {selectedMember.role}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="text-white text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-center lg:text-left"
                    >
                      {selectedMember.description}
                    </motion.p>
                  
                    {/* Enlaces sociales */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      className="flex gap-4 justify-center lg:justify-start"
                    >
                      {selectedMember.links.github && selectedMember.links.github !== '#' && (
                        <a 
                          href={selectedMember.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors"
                        >
                          <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
                        </a>
                      )}
                      {selectedMember.links.linkedin && selectedMember.links.linkedin !== '#' && (
                        <a 
                          href={selectedMember.links.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors"
                        >
                          <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                        </a>
                      )}
                      {selectedMember.links.portfolio && selectedMember.links.portfolio !== '#' && selectedMember.links.portfolio !== 'no tengo' && (
                        <a 
                          href={selectedMember.links.portfolio} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors"
                        >
                          <FaFolder className="w-6 h-6 sm:w-7 sm:h-7" />
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Grid de miembros - Grid flexible que se envuelve en todas las pantallas */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center w-full mt-6 sm:mt-8">
          {/* Fila superior */}
          <motion.div 
            className="backdrop-blur-sm flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-9 rounded-[30px] md:rounded-[40px] py-4 sm:py-5 md:py-6 shadow-xl w-full"
            style={{ 
              background: 'linear-gradient(90deg, #04AEBF -100%, #025760 50%, #000000 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 23%, black 100%)',
              width: '100%',
              paddingLeft: '12px',
              paddingRight: '12px'
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {topRowMembers.map((member) => (
              <motion.button
                key={member.id}
                onClick={() => handleMemberChange(member)}
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                className={`team-thumb relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 transition-all duration-300 isolate ${
                  selectedMember.id === member.id 
                    ? 'border-[#86A869] scale-110 shadow-lg shadow-[#86A869]/50' 
                    : 'border-[#025159] hover:border-[#86A869]/50 hover:scale-105'
                }`}
                whileHover={{ scale: selectedMember.id === member.id ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Fila inferior */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 rounded-[30px] md:rounded-[40px] py-4 sm:py-5 md:py-6 shadow-md-xl w-full"
            style={{ 
              background: 'linear-gradient(90deg, #04AEBF -100%, #025760 00%, #000000 100%)',
              WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 100%)',
              maskImage: 'linear-gradient(to left, transparent 0%, black 23%, black 100%)',
              width: '100%',
              paddingLeft: '12px',
              paddingRight: '12px'
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {bottomRowMembers.map((member) => (
              <motion.button
                key={member.id}
                onClick={() => handleMemberChange(member)}
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                className={`team-thumb relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 transition-all duration-300 isolate ${
                  selectedMember.id === member.id 
                    ? 'border-[#86A869] scale-110 shadow-lg shadow-[#86A869]/50' 
                    : 'border-[#025159] hover:border-[#86A869]/50 hover:scale-105'
                }`}
                whileHover={{ scale: selectedMember.id === member.id ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
