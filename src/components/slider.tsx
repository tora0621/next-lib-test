import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//lib
import Slider from 'react-slick';
//style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider from '/src/styles/slider.module.scss';
//types
import { SliderType } from '../types/slider';

export const DefaultSlider = (props: any) => {
  console.log(props);
  // slickoption
  const settings = {
    // dots: true,
    Infinity: true,
    speed: 500,
    // autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //slide単体,imgタグのurlは親から受け取る
  const SlideList = props.data.map((i: any) => {
    return (
      <div key={i.title}>
        <Image src={i.img} width={1920} height={800} objectFit={'cover'} alt={i.title}></Image>
        <h3>1</h3>
      </div>
    );
  });

  return (
    <Slider {...settings} className={slider.contaier}>
      {SlideList}
    </Slider>
  );
};

export default DefaultSlider;
