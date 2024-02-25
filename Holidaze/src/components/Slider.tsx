import Carousel from "react-bootstrap/Carousel";

import { Image } from "react-bootstrap";

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{ borderRadius: "25px" }}>
        <Image
          alt="beach"
          src="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "25px",
            height: "500px",
          }}
        ></Image>
        <Carousel.Caption>
          <h3>Holidaze</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ borderRadius: "25px" }}>
        <Image
          alt="beach"
          src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "25px",
            height: "500px",
          }}
        ></Image>
        <Carousel.Caption>
          <h3>Holidaze</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ borderRadius: "25px" }}>
        <Image
          alt="beach"
          src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600"
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "25px",
            height: "500px",
          }}
        ></Image>
        <Carousel.Caption>
          <h3>Holidaze</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
