"use client";

import { useEffect } from "react";
import { Btn } from "@/components";


import image1 from "../../../public/images/image1.jpg"
import image2 from "../../../public/images/image2.jpg"
import image3 from "../../../public/images/image3.webp"
import image4 from "../../../public/images/image4.jpg"
import image5 from "../../../public/images/image5.webp"
import image6 from "../../../public/images/image6.webp"
import image7 from "../../../public/images/image7.jpg"
import image8 from "../../../public/images/image8.jpg"
import image9 from "../../../public/images/image9.jpg"
import image10 from "../../../public/images/image10.jpg"
import image11 from "../../../public/images/image11.png"
import image12 from "../../../public/images/image12.jpg"
import image13 from "../../../public/images/image13.jpg"


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function AnimationPage() {

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {

    gsap.from(".image", {
      scrollTrigger: {
        trigger: ".image",
        start: "top 85%",
        toggleActions: "restart pause resume reset",
      },
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".image2", {
      scrollTrigger: {
        trigger: ".image",
        start: "top 85%",
        toggleActions: "restart pause resume reset",
      },
      opacity: 0,
      y: 50,
      duration: 0.1,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".image3", {
      scrollTrigger: {
        trigger: ".image",
        start: "top 85%",
        toggleActions: "restart pause resume reset",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".image4", {
      scrollTrigger: {
        trigger: ".image",
        start: "top 85%",
        toggleActions: "restart pause resume reset",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });


  }, []);


  return (
    <section className="bg-black px-6 md:px-18 py-16 md:py-30 overflow-x-hidden">

      <div className="flex justify-center">

        <div className="xl:w-[1405px]">

          <div className="w-full flex flex-col justify-center items-center ">

            <div className="flex space-x-1.5 md:space-x-4">

              <div className="flex flex-col space-y-1.5 md:space-y-4 mt-10 md:mt-24">
                <Image src={image1} alt="Image1" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image2" />
                <Image src={image12} alt="Image12" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image2" />
              </div>

              <div className="flex flex-col space-y-1.5 md:space-y-4">
                <Image src={image2} alt="Image2" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image2" />
                <Image src={image3} alt="Image3" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image2" />
              </div>

              <Image src={image4} alt="Image4" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image4 mt-8 md:mt-22" />
              <Image src={image5} alt="Image5" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
              <Image src={image6} alt="Image6" className="w-10 h-13 md:w-28 md:h-40 rounded-sm md:rounded-lg image mt-6 md:mt-14" />
              <Image src={image7} alt="Image7" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image3" />
              <Image src={image8} alt="Image8" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image mt-8 md:mt-22" />

              <div className="flex flex-col space-y-1.5 md:space-y-4">
                <Image src={image9} alt="Image9" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image3" />
                <Image src={image10} alt="Image10" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image3" />
              </div>

              <div className="flex flex-col space-y-1.5 md:space-y-4 mt-10 md:mt-24">
                <Image src={image11} alt="Image11" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
                <Image src={image13} alt="Image12" className="w-10 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image2" />
              </div>

            </div>

            <div className="text-white max-w-2xl mt-10 md:mt-0 md:relative left-[4%]">
              <h3 className="text-3xl z-10">A network of founders who thrive together</h3>

              <p className="text-xl mt-4 md:mt-6 leading-relaxed z-10">
                At G10X, you're never building in isolation. You're part of a global founder circle where knowledge flows, partnerships spark, and growth compounds.
              </p>

              <p className="text-xl mt-4 leading-relaxed z-10">
                Each category is a close-knit ecosystem — but the strength multiplies when we connect across sectors and borders.
              </p>

              <p className="font-light mt-4 md:mt-6 z-10">
                Workshops & Masterclasses → Learn directly from peers, mentors, and industry leaders.
              </p>

              <p className="font-light mt-3 z-10">
                Collaboration over Competition → Share resources, co-create, and grow together.
              </p>

              <p className="font-light mt-3 z-10">
                Global Connections → Meet founders from across the world, united by shared focus.
              </p>

              <p className="font-light mt-3 z-10">
                Celebrating Wins → From funding milestones to product launches, we cheer each other on.
              </p>

              <div className="mt-5 md:mt-10 z-10">
                <Btn
                  text="Discover the G10X Community"
                  bgColor="bg-white"
                  borderColor="border border-black"
                  textColor="text-black"
                  hoverBgColor="hover:bg-white"
                  hoverTextColor="hover:text-black"
                />

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default AnimationPage;
