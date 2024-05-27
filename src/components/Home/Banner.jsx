import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
function Banner() {
  return (
    <Carousel className="carousel-main">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7081136/pexels-photo-7081136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption className="custom-caption">
          <h2>
            Discover the Latest Fashion Trends – Shop Our New Arrivals Now!
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8387838/pexels-photo-8387838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />

        <Carousel.Caption className="custom-caption">
          <h2>Elevate Your Wardrobe with Our Chic and Timeless Pieces</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8307678/pexels-photo-8307678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption className="custom-caption">
          <h2>Find Your Perfect Outfit – From Casual Comfort to Office Chic</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
