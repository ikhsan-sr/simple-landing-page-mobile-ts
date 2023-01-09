import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Grid, IconButton } from '@mui/material';

import { DATA } from './const';
import { StyledIntroduction } from './styles';


const Introduction = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1)
  const sliderRef = useRef<any>();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  const gotoNext = () => {
    sliderRef.current.slickNext();
    setActiveSlide(activeSlide + 1);
  }
    
  const gotoPrev = () => {
    sliderRef.current.slickPrev()
    setActiveSlide(activeSlide - 1);
  }

  return (
    <StyledIntroduction>
       <Slider {...settings} ref={sliderRef}>
        {DATA.map(({title, subtitle, desc}, index) => (
          <div key={index}>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
            <p>{desc}</p>
          </div>
        ))}
      </Slider>
      <Grid container>
        <Grid item xs={6}>
          <span className="active">{activeSlide}</span>
          <span className="total">
            <span>/</span>
            {DATA.length}
          </span>
        </Grid>
        <Grid item xs={6} className="arrow-wrapper">
          <IconButton onClick={gotoPrev}>
            <img src="/icons/arrow-left.png" alt="menu" height="18" />
          </IconButton>
          <IconButton onClick={gotoNext} className="next">
            <img src="/icons/arrow-right.png" alt="menu" height="18" />
          </IconButton>
        </Grid>
      </Grid>
    </StyledIntroduction>
  )
}

export default Introduction