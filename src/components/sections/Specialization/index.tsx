import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { IconButton } from '@mui/material';

import { DATA, SETTINGS } from './const';
import { StyledSpecialization } from './styles';

const Specialization = () => {
  const sliderRef = useRef<any>();
  
  const gotoNext = () => {
    sliderRef.current.slickNext();
  }
    
  const gotoPrev = () => {
    sliderRef.current.slickPrev()
  }

  useEffect(() => sliderRef.current.slickNext(), []);

  return (
    <StyledSpecialization>
      <div className="card">
        <div className="title">Our Speciality</div>
        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</div>
        
        <Slider {...SETTINGS} ref={sliderRef}>
          {DATA.map(({title, image, desc}, index) => (
            <div key={index} className="slide-item">
              <img src={image} alt={title} />
              <h6>{title}</h6>
              <p>{desc}</p>
            </div>
          ))}
        </Slider>
        <div className="overlay" />

        <div className="arrow-wrapper">
          <IconButton onClick={gotoPrev}>
            <img src="/icons/arrow-left.png" alt="menu" height="18" />
          </IconButton>
          <IconButton onClick={gotoNext} className="next">
            <img src="/icons/arrow-right-dark.png" alt="menu" height="18" />
          </IconButton>
        </div>
      </div>
    </StyledSpecialization>
  )
}

export default Specialization