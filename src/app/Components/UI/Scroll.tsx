'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import {FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
  
      // --- Logic for the Scroll to Top button ---
      const [isVisible, setIsVisible] = useState(false);
    
      // Show button when page is scrolled down
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      // Set up the event listener
      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);
    
      // Handle the scroll-to-top action
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <div>
      <div className="fixed z-30 bottom-8 right-8">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-[#E02454] cursor-pointer border-2 border-[#003865] text-white w-11 h-11 lg:w-13 lg:h-13 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-80 transition-opacity"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </div>
  )
}

export default ScrollButton