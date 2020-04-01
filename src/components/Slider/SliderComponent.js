import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import background2x from '../../assets/images/Data@2x.png';
import background from '../../assets/images/Data.png';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderComponent = () => (
  <section className="slide-content">
    <AutoplaySlider
      className="slider"
      organicArrows={false}
      play
      cancelOnInteraction={false}
      interval={4000}
    >
      <div className="slider-item">
        <img
          srcSet={`${background2x} 2x`}
          src={background}
          className="slider-img"
          alt="Marcenas mattis egestas"
        />
        <p className="slider-title">Marcenas mattis egestas</p>
        <p className="slider-text">
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </div>

      <div className="slider-item">
        <img
          srcSet={`${background2x} 2x`}
          src={background}
          className="slider-img"
          alt="Marcenas mattis egestas"
        />
        <p className="slider-title">Marcenas mattis egestas</p>
        <p className="slider-text">
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </div>
      <div className="slider-item">
        <img
          srcSet={`${background2x} 2x`}
          src={background}
          className="slider-img"
          alt="Marcenas mattis egestas"
        />
        <p className="slider-title">Marcenas mattis egestas</p>
        <p className="slider-text">
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </div>
    </AutoplaySlider>
  </section>
);

export default SliderComponent;
