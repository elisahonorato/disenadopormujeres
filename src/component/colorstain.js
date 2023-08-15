import React from 'react';
import vidrio from '../assets/texturas/vidrio.png';

const ColorStain = ({ color, size, marginTop, marginLeft, marginRight, zIndex }) => {
  const stainStyle = {
    marginTop: marginTop,
    marginLeft: marginLeft,
    marginRight: marginRight,
    position: 'absolute',
    width: size,
    height: size,
    borderRadius: '60%',
    opacity: 0.6,
    zIndex: zIndex,
    backgroundImage: `
      radial-gradient(ellipse at center, ${color} 60%, transparent 100%),
      url(${vidrio})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(80px)', // Agrega un filtro de desenfoque
  };

  return <div style={stainStyle}></div>;
};

export default ColorStain;
