'use client';

import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    // Main modal container with a semi-transparent backdrop
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 bg-opacity-60 backdrop-blur-sm"
    >
      {/* Modal content panel */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the panel
        className="relative bg-white w-full max-w-2xl p-8 rounded-lg shadow-xl"
      >
        {/* Close button in the top corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
        >
          <FaTimes className="text-2xl cursor-pointer" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;