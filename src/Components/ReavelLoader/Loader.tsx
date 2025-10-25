import { memo, useEffect, useRef } from "react";
import "./Loader.css";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const Loader: React.FC = memo(() => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const customEaseOne = CustomEase.create("custom", ".87,0,.13,1");

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: customEaseOne } });

    tl.to(".hero", {
      clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
      duration: 1.5,
      delay: 1,
    })
      .to(".hero", {
        clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
        duration: 2,
        onStart: () => {
          gsap.to(".progress-bar", { width: "100vw", duration: 2 });
          gsap.to(counterRef.current, {
            innerHTML: 100,
            duration: 2,
            snap: { innerHTML: 1 },
          });
        },
      })
      .to(".hero", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        delay: 1,
      });
  }, []);

  return (
    <div className="hero">
      <div className="progress-bar">
        <p>Loading</p>
        <p>
          /<span ref={counterRef}>0</span>
        </p>
      </div>
    </div>
  );
});

export default Loader;
