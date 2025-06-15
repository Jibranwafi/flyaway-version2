'use client';

import { useEffect, useState } from 'react';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaBook, FaCloud } from 'react-icons/fa';

const sections = [
  { id: 'greeting', icon: FaHome, label: 'Home' },
  { id: 'description', icon: FaUser, label: 'Description' },
  { id: 'skills', mobileId: 'mobile-skills', icon: FaCode, label: 'Skills' },
  { id: 'experience', icon: FaBriefcase, label: 'Experience' },
  { id: 'contact', icon: FaEnvelope, label: 'Contact' },
  { id: 'novel', icon: FaBook, label: 'Novel' },
  { id: 'dream', icon: FaCloud, label: 'Dream' },
];

interface NavbarProps {
  isPdfModalOpen?: boolean;
}

export default function Navbar({ isPdfModalOpen = false }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('greeting');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, mobileId?: string) => {
    e.preventDefault();
    const targetId = window.innerWidth < 768 && mobileId ? mobileId : id;
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (isPdfModalOpen) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-4 md:bottom-auto md:left-1/2 md:transform md:-translate-x-1/2 z-50">
      <div className="flex justify-around md:justify-center gap-2 md:gap-4 bg-white/50 border border-t-white backdrop-blur-sm rounded-t-3xl md:rounded-full p-2 shadow-lg md:max-w-fit mx-auto">
        {sections.map(({ id, icon: Icon, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id, (sections.find(s => s.id === id) as any)?.mobileId)}
            className={`p-3 md:p-2 rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'bg-orange-800 text-white scale-110'
                : 'text-gray-600 hover:bg-orange-800/20'
            }`}
            title={label}
          >
            <Icon size={24} className="md:w-5 md:h-5" />
          </a>
        ))}
      </div>
    </nav>
  );
}
