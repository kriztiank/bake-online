import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="https://kris530s.apache.techcollege.dk/img/slide1.jpg" alt="bread" />
          {/* <h3>Sample caption 1</h3> */}
        </div>
        <div>
          <img src="https://kris530s.apache.techcollege.dk/img/slide2.jpg" alt="bread" />
          {/* <h3>Sample caption 2</h3> */}
        </div>
        <div>
          <img src="https://kris530s.apache.techcollege.dk/img/slide3.jpg" alt="bread" />
          {/* <h3>Sample caption 3</h3> */}
        </div>
      </Carousel>
    </div>
  )
}
