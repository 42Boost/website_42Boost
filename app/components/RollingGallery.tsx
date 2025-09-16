import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform, type PanInfo, type ResolvedValues } from 'motion/react';

// Import local images
import aiImage from '../../assets/images/rolling_gallery/ai .jpg';
import blockchainImage from '../../assets/images/rolling_gallery/Block Chain Technology | Technology Trends | Technology.jpg';
import cyberSecurityImage from '../../assets/images/rolling_gallery/Cyber Security.jpg';
import devopsImage from '../../assets/images/rolling_gallery/devops.jpg';
import webdevImage from '../../assets/images/rolling_gallery/webdev.png';

const IMGS: string[] = [
  aiImage,
  blockchainImage,
  cyberSecurityImage,
  devopsImage,
  webdevImage,
  // Repeat images to fill the carousel
  aiImage,
  blockchainImage,
  cyberSecurityImage,
  devopsImage,
  webdevImage,
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('lg');
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScreenSize('sm');
      } else if (width <= 768) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const cylinderWidth: number = screenSize === 'sm' ? 1200 : screenSize === 'md' ? 2000 : 3000;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = screenSize === 'sm' 
    ? (cylinderWidth / faceCount) * 1.1 
    : screenSize === 'md' 
    ? (cylinderWidth / faceCount) * 1.6 
    : (cylinderWidth / faceCount) * 2.0;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val: number) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay && isClient) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, isClient]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  // Don't render until client-side hydration
  if (!isClient) {
    return (
      <div className="relative h-[400px] w-full overflow-hidden bg-gray-900 flex items-center justify-center">
        <span className="text-gray-400">Loading gallery...</span>
      </div>
    );
  }

  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-[24px] sm:w-[36px] md:w-[48px] z-10"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)'
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[24px] sm:w-[36px] md:w-[48px] z-10"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)'
        }}
      />
      <div className="flex h-full items-center justify-center [perspective:600px] sm:[perspective:800px] md:[perspective:900px] lg:[perspective:950px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[2%] [backface-visibility:hidden] md:p-[1%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="pointer-events-none h-[100px] w-[140px] rounded-[12px] border-[2px] border-white object-cover transition-transform duration-300 ease-out sm:h-[120px] sm:w-[180px] md:h-[140px] md:w-[220px] lg:h-[150px] lg:w-[240px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
