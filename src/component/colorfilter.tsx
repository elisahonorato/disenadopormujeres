import React from 'react';

// Define the CSS class inside a style block or in a separate .css file
const styles = {
    grayscaleImage: {
      filter: 'grayscale(100%)',
    },
  };
  
  interface ColorFilterProps {
    image: string;
    customStyles?: React.CSSProperties;
    alt?: string;
  }
  
  function ColorFilter({ image, alt, customStyles }: ColorFilterProps) {
    return (
      <div>
        <img src={image} alt={alt} style={{ ...customStyles, filter: 'grayscale(100%)' }} />
      </div>
    );
  }
  
  export default ColorFilter;