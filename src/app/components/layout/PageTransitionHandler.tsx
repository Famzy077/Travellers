'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Preloader from '../ui/Preloader';

const PageTransitionHandler = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // We start a timer when the path changes.
    // This gives the illusion of loading for 2 seconds.
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);

  }, [pathname]); // This effect runs every time the page URL changes

  // We only show the preloader if isLoading is true
  return isLoading ? <Preloader /> : null;
};

export default PageTransitionHandler;