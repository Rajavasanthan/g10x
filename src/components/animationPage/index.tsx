"use client";

import { useEffect } from "react";
import { Btn } from "@/components";

import image1 from "../../../public/images/img1.png"
import image2 from "../../../public/images/img2.png"
import image3 from "../../../public/images/img3.png"
import image4 from "../../../public/images/img4.png"
import image5 from "../../../public/images/img5.png"
import image6 from "../../../public/images/img6.png"
import image7 from "../../../public/images/img7.png"
import image8 from "../../../public/images/img8.png"
import image9 from "../../../public/images/img9.png"
import image10 from "../../../public/images/img10.png"
import image11 from "../../../public/images/img11.png"
import image12 from "../../../public/images/img12.png"
import image13 from "../../../public/images/img13.png"

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
    <section className="bg-black px-4 sm:px-6 md:px-10 py-16 md:py-30 overflow-x-hidden">
      <div className="flex justify-center">
        <div className="xl:w-[1405px]">
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="flex space-x-1.5 md:space-x-4 ">

              <div className="flex flex-col space-y-1.5 md:space-y-4 relative top-10 md:top-24">
                <Image src={image1} alt="Image1" className="h-fit rounded-sm md:rounded-lg object-cover image2" />
                <Image src={image12} alt="Image12" className="h-fit rounded-sm md:rounded-lg object-cover image2" />
              </div>

              <div className="flex flex-col space-y-1.5 md:space-y-4">
                <Image src={image2} alt="Image2" className="h-fit rounded-sm md:rounded-lg object-cover image2" />
                <Image src={image3} alt="Image3" className="h-fit rounded-sm md:rounded-lg object-cover image2" />
              </div>

              <div className="flex space-x-1.5 md:space-x-4">
                <div>
                  <Image src={image4} alt="Image4" className="max-h-fit rounded-sm md:rounded-lg object-cover image4 relative top-8 md:top-22" />
                </div>
                <div>
                  <Image src={image5} alt="Image5" className="max-h-fit rounded-sm md:rounded-lg object-cover image" />
                </div>
                <div>
                  <Image src={image6} alt="Image6" className="max-h-fit rounded-sm md:rounded-lg object-cover image relative top-6 md:top-14" />
                </div>
                <div>
                  <Image src={image7} alt="Image7" className="max-h-fit rounded-sm md:rounded-lg object-cover image3" />
                </div>
                <div>
                  <Image src={image8} alt="Image8" className="max-h-fit rounded-sm md:rounded-lg object-cover image relative top-8 md:top-22" />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5 md:space-y-4">
                <Image src={image9} alt="Image9" className="h-fit rounded-sm md:rounded-lg object-cover image3" />
                <Image src={image10} alt="Image10" className="h-fit rounded-sm md:rounded-lg object-cover image3" />
              </div>

              <div className="flex flex-col space-y-1.5 md:space-y-4 relative top-10 md:top-24">
                <Image src={image11} alt="Image11" className="h-fit rounded-sm md:rounded-lg object-cover image" />
                <Image src={image13} alt="Image12" className="h-fit rounded-sm md:rounded-lg object-cover image2" />
              </div>

            </div>

            <div className="text-white max-w-2xl mt-20 md:mt-30 lg:mt-20 xl:mt-10">
              <h3 className="text-2xl md:text-3xl z-10">A network of founders who thrive together</h3>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-6 leading-relaxed z-10">
                At G10X, you&apos;re never building in isolation. You&apos;re part of a global founder circle where knowledge flows, partnerships spark, and growth compounds.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 leading-relaxed z-10">
                Each category is a close-knit ecosystem — but the strength multiplies when we connect across sectors and borders.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-4 md:mt-6 z-10">
                Workshops & Masterclasses → Learn directly from peers, mentors, and industry leaders.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-3 z-10">
                Collaboration over Competition → Share resources, co-create, and grow together.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-3 z-10">
                Global Connections → Meet founders from across the world, united by shared focus.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-3 z-10">
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
