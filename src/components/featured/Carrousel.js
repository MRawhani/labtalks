import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../resources/images/slide_one.jpg';
import slide2 from '../../resources/images/slide_two.jpg';
import slide3 from '../../resources/images/slide_three.jpg';

export default () => {
    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }
  return (
    <div
    className="carrousel_wrapper"
    >
      <Slider {...settings}>
      <div>
            <div className="carrousel_image"
                 style={{
                     backgroundImage: `url(${slide1})`,
                     height:'100vh',
                     
                 }}
            >
            </div>
        </div>
        <div> 
        <div className="carrousel_image"
                 style={{
                     backgroundImage: `url(${slide2})`,
                     height:'100vh',
                   
                     

                 }}
            >
            </div>
        </div>
        <div>
        <div className="carrousel_image"
                 style={{
                     backgroundImage: `url(${slide3})`,
                     height:'100vh',
                     
                 }}
            >
            </div>
        </div>

      </Slider>
    </div>
  )
}
