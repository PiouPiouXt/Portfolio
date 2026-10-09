import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ResetScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // 1. Gestion de la visibilité (Scroll Y > 300px)
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Calcul du pourcentage de progression du scroll (0 à 100)
      if (scrollHeight > 0) {
        const progress = (currentScroll / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Rayon et circonférence pour l'anneau SVG
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retourner en haut"
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center 
        w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 focus:outline-none
        transition-all duration-700 ease-in-out transform
        ${isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      {/* Anneau de progression SVG */}
      <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        {/* Cercle d'arrière-plan (piste) */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="text-white/20"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
        />
        {/* Cercle de progression animé */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="text-white transition-all duration-150 ease-out"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>

      {/* Icône Flèche */}
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
