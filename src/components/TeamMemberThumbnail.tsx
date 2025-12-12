import React from 'react';
import Image from 'next/image';

interface TeamMemberThumbnailProps {
  avatar: string;
  isSelected: boolean;
  onClick: () => void;
  animationDelay?: number;
}

const TeamMemberThumbnail: React.FC<TeamMemberThumbnailProps> = ({ avatar, isSelected, onClick, animationDelay = 0 }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 transition-all duration-300 ${
        isSelected
          ? 'border-[#86A869] scale-110 shadow-lg shadow-[#86A869]/50'
          : 'border-[#025159] grayscale hover:grayscale-0 hover:border-[#86A869]/50'
      }`}
      style={{ animationDelay: `${animationDelay}s`, animationName: 'fadeIn', animationDuration: '0.5s', animationFillMode: 'forwards' }}
    >
      <Image
        src={avatar}
        alt="Team member thumbnail"
        fill
        className="object-cover"
        sizes="96px"
      />
    </button>
  );
};

export default TeamMemberThumbnail;