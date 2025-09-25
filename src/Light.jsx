import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./light.css";

gsap.registerPlugin(ScrollTrigger);

export default function Light() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const spotRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      tl.fromTo(
        spotRef.current,
        { clipPath: "polygon(50% 0%, 49.7% 100%, 50.3% 100%)" }, 
        { clipPath: "polygon(50% 0%, -20% 100%, 120% 100%)", duration: 0.6 }
      );

      tl.to([leftTextRef.current, rightTextRef.current], { opacity: 0, duration: 0.5 }, 0.2);

      tl.to([stageRef.current, sectionRef.current], {
        backgroundColor: "var(--bg-lit)",
        duration: 0.4,
      }, 0.4);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <div ref={stageRef} className="darkness">
        <div ref={spotRef} className="light-spot" />
        <h1 ref={leftTextRef} className="head-title left">Smart OR</h1>
        <h1 ref={rightTextRef} className="head-title right">AI Lighting</h1>
      </div>
    </section>
  );
}
