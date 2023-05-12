import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const canvasRef = useRef(null);
  const uiPreviewRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 1944;
    canvas.height = 1050;

    const frameCount = 150;
    const currentFrame = (index) =>
      `https://gineousc.sirv.com/Images/Landing%20Page%20Resources/animated-series/${index
        .toString()
        .padStart(9, "0")}.png`;

    const images = [];
    const animation = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const animationTimeline = gsap.timeline({
      paused: true,
      onUpdate: render,
    });

    animationTimeline.to(animation, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
    });

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[animation.frame], 0, 0);
    }

    const uiPreviewElement = uiPreviewRef.current;
    const previewRect = uiPreviewElement.getBoundingClientRect();

    const animationTrigger = ScrollTrigger.create({
      trigger: uiPreviewElement,
      start: "25% center",
      end: "bottom center",
      onEnter: () => animationTimeline.play(),
      onLeaveBack: () => animationTimeline.reverse(),
    });    

    return () => {
      animationTrigger.kill();
    };
  }, []);

  return (
    <div className="ui-preview" ref={uiPreviewRef}>
      <canvas id="hero-lightpass" ref={canvasRef} />
    </div>
  );
};

export default Hero;
