"use client";

import {
  useEffect,
  useRef,
  useState,
  MouseEvent,
  TouchEvent,
  ReactNode,
} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type TiltedCardProps = {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: ReactNode;
  displayOverlayContent?: boolean;
  className?: string;
};

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "260px",
  containerWidth = "100%",
  imageHeight = "260px",
  imageWidth = "100%",
  scaleOnHover = 1.06,
  rotateAmplitude = 14,
  showMobileWarning = false,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
  className,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => {
      mq.removeEventListener("change", update);
    };
  }, []);

  type PointerEvent = MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>;

  function handlePointerMove(e: PointerEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const point =
      "touches" in e && e.touches.length > 0 ? e.touches[0] : (e as MouseEvent<HTMLDivElement>);

    const offsetX = point.clientX - rect.left - rect.width / 2;
    const offsetY = point.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(point.clientX - rect.left);
    y.set(point.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handlePointerEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handlePointerLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      className={`tilted-card-figure ${className ?? ""}`}
      style={{
        height: isMobile ? "300px" : containerHeight,
        width: containerWidth,
      }}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          This effect is best experienced on desktop.
        </div>
      )}

      <motion.div
        ref={ref}
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: isMobile ? "300px" : imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
        onMouseMove={handlePointerMove}
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
        onTouchStart={handlePointerEnter}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerLeave}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: isMobile ? "300px" : imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="tilted-card-overlay"
            style={{ opacity: isMobile ? 1 : opacity }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}

