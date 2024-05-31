'use client'

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from '@/node_modules/next/image';


function renderThumbs(value) {
  return value.map((img, index) => (
      <div key={index}>
          <Image className="max-w-[3.5em] max-h-[4.5em]" src={img} alt={`Thumbnail ${index + 1}`} width={50} height={75} />
      </div>
  ));
}

function GlobalCarousel({ value }) {
  return (
      <div>
          <Carousel
              showArrows={false}
              showStatus={false}
              swipeable={true}
              emulateTouch={true}
              renderThumbs={() => renderThumbs(value)} // Aquí pasamos value como argumento a renderThumbs
          >
              {value.map((val, index) => (
                  <div key={index}><Image className="rounded-lg" src={val} alt={`Image ${index + 1}`} width={500} height={500} /></div>
              ))}
          </Carousel>
      </div>
  );
}

export default GlobalCarousel;
