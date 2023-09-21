import React from 'react';

const styles = {
  grayscaleImage: {
    filter: 'grayscale(100%)',
    transition: 'transform 0.3s',
  },
}
  
interface ColorFilterState {
    isHovered: boolean;
  }
  
interface ColorFilterProps {
    image: string;
    customStyles?: React.CSSProperties;
    alt?: string;
    hover: boolean;
  }
  
  class ColorFilter extends React.Component<ColorFilterProps, ColorFilterState> {
    constructor(props: ColorFilterProps) {
      super(props);
      this.state = {
        isHovered: false,
      };
    }
  
    handleMouseEnter() {
        if (this.props.hover){
            this.setState({ isHovered: true });

        }

      
    }
  
    handleMouseLeave() {
      this.setState({ isHovered: false });
    }
  
    render() {
      const { image, alt, customStyles } = this.props;
      const { isHovered } = this.state;
  
      return (
        <div
          className="color-filter"
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
        >
          <img
            src={image}
            alt={alt}
            style={{
              ...customStyles,
              ...styles.grayscaleImage,
              transform: isHovered  && this.props.hover ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        </div>
      );
    }
  }
  
  export default ColorFilter;
