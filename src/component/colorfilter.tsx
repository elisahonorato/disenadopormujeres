import React, { CSSProperties } from 'react';

const styles = {
  grayscaleImage: {
    filter: 'grayscale(100%)',
    transition: 'transform 0.3s',
  },
};

interface ColorFilterProps {
  image: string;
  customStyles?: React.CSSProperties;
  alt?: string;
  hover: boolean;
  align?: CSSProperties['textAlign'];
}

class ColorFilter extends React.Component<ColorFilterProps> {
  render() {
    const { image, alt, customStyles, align, hover } = this.props;

    return (
      <img
        src={image}
        alt={alt}
        style={{
          ...customStyles,
          ...styles.grayscaleImage,
          transform: hover ? 'scale(1.1)' : 'scale(1)',
          textAlign: align,
        }}
      />
    );
  }
}

export default ColorFilter;
