import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

interface TeamMemberCardProps {
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

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ avatar, name, role, description, links }) => {
  return (
    <div className="relative flex items-center" style={{ zIndex: 2 }}>
      {/* Card horizontal con media circunferencia izquierda y contenido a la derecha */}
      <div className="flex items-center bg-[#11787A] border-2 border-[#86A869] shadow-lg overflow-hidden" style={{ borderRadius: '130px 20px 20px 130px', height: '260px', minWidth: '600px' }}>
        {/* Imagen dentro del círculo a la izquierda */}
        <div className="relative w-[260px] h-[260px] flex-shrink-0 overflow-hidden" style={{ borderRadius: '130px 0 0 130px' }}>
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="260px"
            priority
          />
        </div>
        {/* Contenido de texto a la derecha */}
        <div className="flex flex-col justify-center pl-8 pr-8 py-6 flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 text-left">{name}</h3>
          <p className="text-lg md:text-xl text-[#D4E157] font-semibold mb-2 uppercase text-left">{role}</p>
          <p className="text-white text-base mb-4 leading-relaxed text-left">{description}</p>
          <div className="flex gap-4 mt-2">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#86A869]">
                <FaGithub size={24} />
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#86A869]">
                <FaLinkedin size={24} />
              </a>
            )}
            {links.portfolio && links.portfolio !== 'no tengo' && (
              <a href={links.portfolio} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#86A869]">
                <FaGlobe size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;