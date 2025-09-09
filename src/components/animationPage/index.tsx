"use client";

import { useEffect } from "react";
import { Btn } from "@/components";

import img_1 from "../../../public/images/img-1.webp";
import img_2 from "../../../public/images/img-2.webp";
import img_3 from "../../../public/images/img-3.webp";
import img_4 from "../../../public/images/img-4.webp";
import img_5 from "../../../public/images/img-5.webp";
import img_6 from "../../../public/images/img-6.webp";
import img_7 from "../../../public/images/img-7.webp";
import img_8 from "../../../public/images/img-8.webp";
import img_9 from "../../../public/images/img-9.webp";

// import b_img from "../../../public/images/B_img.svg"



import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function AnimationPage() {
  useEffect(() => {

    const images1 = gsap.utils.toArray<HTMLElement>(".scroll-image1");
    images1.forEach((img) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }).to(img, { x: 50, duration: 5, ease: "power2.out" });
    });


    const images2 = gsap.utils.toArray<HTMLElement>(".scroll-image2");
    images2.forEach((img) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }).to(img, { y: -50, duration: 5, ease: "power2.out" });
    });


    const images3 = gsap.utils.toArray<HTMLElement>(".scroll-image3");
    images3.forEach((img) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }).from(img, { x: 50, duration: 5, ease: "power2.out" });
    });


  }, []);


  return (
    <section className="bg-black px-6 md:px-18 py-30 md:py-60 overflow-x-hidden">

      <div className="flex justify-center">

        <div className="xl:w-[1405px] relative">

          <div>

            <div className="bg-[#ede7dd] rounded-l-[60px] rounded-b-[60px] relative px-6 md:px-74 text-center py-18 md:py-26 flex flex-col justify-center items-center">

              {/* <Image src={b_img} alt="Background image" className="absolute w-full hidden" /> */}

              <h3 className="text-3xl z-10">A network of like-minded specialists</h3>

              <p className="text-xl mt-10 leading-relaxed z-10">
                At Bluetech, you don&apos;t work alone. You&apos;re part of a close-knit
                community where knowledge sharing, growth, and fun are a given.
              </p>

              <p className="font-light mt-10 z-10">
                Workshops, meet-ups and knowledge sessions
              </p>

              <p className="font-light mt-3 z-10">
                Team outings, celebrating successes and connecting
              </p>

              <p className="font-light mt-3 z-10">
                Personal contact, also outside of work
              </p>

              <div className="mt-5 md:mt-10 z-10">
                <Btn
                  text="More about our community"
                  bgColor="bg-[#ede7dd]"
                  borderColor="border border-black"
                  textColor="text-black"
                  hoverBgColor="hover:bg-black"
                  hoverTextColor="hover:text-white"
                />

              </div>

            </div>

            <Image
              src={img_1}
              alt="Image 1"
              className="md:w-44 w-24 top-19 absolute md:-top-28 -left-20 scroll-image1 hidden md:block"
            />

            <Image
              src={img_2}
              alt="Image 1"
              className="w-20 md:w-42 absolute top-110 md:top-44 left-0 md:left-0 scroll-image1 hidden md:block"
            />

            <Image
              src={img_3}
              alt="Image 1"
              className="md:w-38 w-20 absolute bottom-16 md:-bottom-20 -left-20 scroll-image1 hidden md:block"
            />

            <Image
              src={img_4}
              alt="Image 1"
              className="md:w-56 w-30 absolute bottom-10 md:-bottom-40 right-20 md:right-16 hidden md:block"
            />

            <Image
              src={img_5}
              alt="Image 1"
              className="md:w-38 w-26 absolute -bottom-20 left-30 md:left-56 scroll-image2 hidden md:block"
            />

            <Image
              src={img_6}
              alt="Image 1"
              className="md:w-62 w-48 absolute top-22 md:-top-10 right-30 md:right-120 scroll-image2 hidden md:block"
            />

            <Image
              src={img_7}
              alt="Image 1"
              className="md:w-68 w-59 absolute -bottom-24 right-10 md:right-60 scroll-image3 hidden md:block"
            />

            <Image
              src={img_8}
              alt="Image 1"
              className="md:w-64 w-64 absolute md:top-36 top-70 -right-30 md:-right-50 scroll-image3 hidden md:block"
            />

            <Image
              src={img_9}
              alt="Image 1"
              className="md:w-40 w-30 absolute top-24 md:-top-16 -right-10 scroll-image3 hidden md:block"
            />


          </div>

        </div>

      </div>

    </section>

  );
}

export default AnimationPage;
