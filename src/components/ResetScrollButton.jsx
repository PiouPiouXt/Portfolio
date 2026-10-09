import { useState, useEffect } from 'react';

export function ResetScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center 
          w-10 h-10 md:w-12 md:h-12 fixed bottom-8 right-8 z-50 p-4 bg-primary 
          text-white rounded-full shadow-lg hover:bg-primary/80 
          transition-all duration-300 ease-in-out focus:outline-none"
          title="Retourner en haut"
        >
          <a className='bold'>
            ↑
          </a>
        </button >
      )
      }
    </>
  );
}