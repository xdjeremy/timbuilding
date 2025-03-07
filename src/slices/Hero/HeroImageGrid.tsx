import React from 'react';
import { PrismicNextImage } from '@prismicio/next';
import { Content } from '@prismicio/client';

interface HeroImageGridProps {
  images: Content.HeroSlice['primary']['images'];
}

export const HeroImageGrid = ({ images }: HeroImageGridProps) => {
  if (!images) return null;

  return (
    <div className="relative h-[30rem] overflow-hidden pr-0 pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
      <div className="z-20 grid w-full grid-cols-2 gap-x-4">
        <div className="animate-loop-vertically -mt-[120%] ml-3 grid size-full columns-2 grid-cols-1 gap-4 self-center">
          {images.slice(0, 6).map((image, index) => (
            <div className="grid size-full grid-cols-1 gap-4" key={index}>
              <div className="relative w-full pt-[120%]">
                <PrismicNextImage
                  field={image.image}
                  className="object-position: top neobrutalist-shadow absolute inset-0 size-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="animate-loop-vertically ml-4 grid size-full grid-cols-1 gap-4">
          {images.slice(6).map((image, index) => (
            <div className="grid size-full grid-cols-1 gap-4" key={index + 6}>
              <div className="relative w-full pt-[120%]">
                <PrismicNextImage
                  field={image.image}
                  className="object-position: top neobrutalist-shadow absolute inset-0 size-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bg */}
      <div className="absolute inset-0 -z-10 ml-auto w-1/2 border-l-4 border-black bg-black/10 md:w-3/4"></div>
    </div>
  );
};
