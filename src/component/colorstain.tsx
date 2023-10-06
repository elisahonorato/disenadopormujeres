import React from 'react';
import vidrio from '../assets/texturas/vidrio.png';
import { Paper } from '@mui/material';

interface ColorStainProps {
  color: string;
  marginTop: string;
  marginLeft: string;
  marginRight?: string;
  zIndex: number;
}

const ColorStain: React.FC<ColorStainProps> = ({
  color, zIndex,
}) => {
  color = color || 'black';
  const stainStyle: React.CSSProperties = { 
    position: 'absolute',
    display: 'inline-block',
    overflow: 'hidden',
    width: '150px',
    height: '300px',
    marginLeft: 'calc(50% + 2vh)',
    borderRadius: '60%',
    opacity: 0.6,
    zIndex: zIndex,
    backgroundImage: `
      radial-gradient(ellipse at center, ${color} 60%, transparent 100%),
      url(${vidrio})`,
    filter: 'blur(80px)', // Agrega un filtro de desenfoque
  };

  return <Paper style={stainStyle}></Paper>;
};

export default ColorStain;
