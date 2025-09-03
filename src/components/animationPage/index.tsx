"use client";

import { useEffect } from "react";
import { Btn } from "@/components";

import img_1 from "../../../public/images/img-1.webp";
import img_2 from "../../../public/images/img-2.webp";
import img_3 from "../../../public/images/img-3.webp";
import img_4 from "../../../public/images/img-4.webp";



import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimationPage() {
  useEffect(() => {
    const images = gsap.utils.toArray(".scroll-image") as HTMLElement[];

    images.forEach((img) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5, 
        },
      });

      tl.to(img, { x: 50, duration: 5, ease: "power2.out" });
    });
  }, []);

  return (
    <section className="bg-black px-6 md:px-18 py-30 relative">
      
      <div className="bg-[#ede7dd] rounded-2xl px-6 md:px-74 text-center py-18 md:py-26 flex flex-col justify-center items-center">
        <h3 className="text-3xl">A network of like-minded specialists</h3>

        <p className="text-xl mt-10 leading-relaxed">
          At Bluetech, you don't work alone. You're part of a close-knit
          community where knowledge sharing, growth, and fun are a given.
        </p>

        <p className="font-light mt-10">
          Workshops, meet-ups and knowledge sessions
        </p>
        <p className="font-light mt-3">
          Team outings, celebrating successes and connecting
        </p>
        <p className="font-light mt-3">
          Personal contact, also outside of work
        </p>

        <div className="mt-5 md:mt-10">
          <Btn
            text="More about our community"
            bgColor="bg-[#ede7dd]"
            borderColor="border border-black"
            textColor="text-black"
            hoverBgColor="hover:bg-black"
            hoverTextColor="hover:text-white"
            arrowBgColor="bg-[#e83a77]"
          />
        </div>
      </div>

      <img
        src={img_1.src}
        alt="Image 1"
        className="w-44 absolute top-28 left-0 scroll-image"
      />

      <img
        src={img_2.src}
        alt="Image 1"
        className="h-28 absolute top-98 left-16 scroll-image"
      />

       <img
        src={img_3.src}
        alt="Image 1"
        className="w-38 absolute bottom-16 left-8 scroll-image"
      />

      <img
        src={img_4.src}
        alt="Image 1"
        className="w-60 absolute bottom-8 right-26"
      />
    </section>
  );
}

export default AnimationPage;
