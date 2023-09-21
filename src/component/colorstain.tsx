import React from 'react';
import vidrio from '../assets/texturas/vidrio.png';

interface ColorStainProps {
  color: string;
  size: string;
  marginTop: string;
  marginLeft: string;
  marginRight?: string;
  zIndex: number;
}

const ColorStain: React.FC<ColorStainProps> = ({
  color, size, marginTop, marginLeft, marginRight, zIndex,
}) => {
  color = color || 'black';
  size = size || '300px';
  marginTop = marginTop || '0px';
  marginLeft = marginLeft || '0px';
  marginRight = marginRight || '0px';
  const stainStyle: React.CSSProperties = {
    marginTop: marginTop,
    marginLeft: marginLeft,
    marginRight: marginRight,
    position: 'fixed',
    overflow: 'hidden',
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
