import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveCarrousel, testimonials } from "../../helpers/index.js";
import { ValueCard } from "./ValueCard.jsx";
export const Carrousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={true}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsiveCarrousel}
      rewind
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      swipeable
    >
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <ValueCard name={testimonial.name} message={testimonial.message} />
        </div>
      ))}
    </Carousel>
  )
}
