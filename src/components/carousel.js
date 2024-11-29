import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import styles from "./carousel.module.css";

const Carousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [WheelGesturesPlugin()])

  return (
    <section className={styles.carousel}>
      <div className={styles.carouselViewport} ref={emblaRef}>
        <div className={styles.carouselContainer}>
          {slides.map((item, i) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                "--accent": `${item.accent}`
              }}
              href={item.href}
              title={`Open ${item.title}`}
              className={styles.carouselSlide}
              key={i}
            >
              <svg width="2em" height="2em" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_4230_15343)"> <path d="M17.5002 8.5L7.5835 18.4166" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path> <path d="M8.6665 7.58325H18.4165V17.3333" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_4230_15343"> <rect width="26" height="26" fill="white"></rect> </clipPath> </defs> </svg>
              <div className={styles.carouselSlideTitle}>{item.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel