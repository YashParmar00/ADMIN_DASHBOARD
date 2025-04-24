import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Footer = () => {
  const {currentMode} = useStateContext()
  return (
    <div
    className={`text-center p-2 ${
      currentMode === 'Dark'
        ? 'bg-[#1e1e1e] text-white'
        : 'bg-white text-black'
    }`}
  >
    <p>
      © 2025 All rights reserved by Shoppy.com
    </p>
  </div>
)}

export default Footer;
