import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import * as styles from "../styles/Swiper.module.css"

export default function Swiper() {
  const SliderWrapper = styled.div`
    width: calc(100% - 50px);

    .slick-prev:before,
    .slick-next:before {
      color: black;
    }
  `

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" className={styles.slidingImages} />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </SliderWrapper>
  )
}
