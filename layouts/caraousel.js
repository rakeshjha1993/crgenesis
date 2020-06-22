import { Carousel } from "react-bootstrap";
import "../styles/caraousel.scss";

const images = [
  {
    id: "1",
    name: "salon1",
    link: "/images/salon_3.jpg",
  },
  {
    id: "2",
    name: "salon2",
    link: "/images/salon_6.jpg",
  },
  {
    id: "3",
    name: "mahindra",
    link: "/images/salon_8.jpg",
  },
];

export default function CarouselLayout() {
  const renderedCarousel = images.map((image) => {
    return (
      <Carousel.Item>
        <div className="image d-flex align-items-center justify-content-center">
          <img
            className="d-block caraousel-image"
            src={image.link}
            alt={image.name}
            key={`${image.name}_${image.id}`}
          />
        </div>
      </Carousel.Item>
    );
  });
  return (
    <Carousel className="mainCarousel" pause={false}>
      {renderedCarousel}
    </Carousel>
  );
}
