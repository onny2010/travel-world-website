import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from '../../../Images/banner/banner1.jpg';
import banner2 from '../../../Images/banner/banner2.jpg';
import banner3 from '../../../Images/banner/banner3.jpg';

const Banner = () => {
  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50 banner-img"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="heading fw-bold">Amazing Tour In Hampshire</h3>
            <h4 className="sub-heading fw-bold">7 Days, 8 Night Tour</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50 banner-img"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="heading fw-bold">Amazing Tour In Indonasia</h3>
            <h4 className="sub-heading fw-bold">7 Days, 8 Night Tour</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50 banner-img"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="heading fw-bold">Amazing Tour In Madagascar</h3>
            <h4 className="sub-heading fw-bold">7 Days, 8 Night Tour</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Banner;
