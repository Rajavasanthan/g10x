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
      duration: 0.8,
      stagger: 0.2,
    })


  }, []);


  return (
    <section className="bg-black px-6 md:px-18 py-16 md:py-30 overflow-x-hidden">

      <div className="flex justify-center">

        <div className="xl:w-[1405px]">

          <div className="w-full flex flex-col justify-center items-center ">

            <div className="flex space-x-1.5 md:space-x-4">

              <div className="flex flex-col space-y-1.5 md:space-y-4 mt-10 md:mt-24">
                <Image src={image1} alt="Image1" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
                <Image src={image12} alt="Image12" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
              </div>

              <div className="flex flex-col space-y-1.5 md:space-y-4">
                <Image src={image2} alt="Image2" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
                <Image src={image3} alt="Image3" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
              </div>

              <Image src={image4} alt="Image4" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image mt-8 md:mt-22" />
              <Image src={image5} alt="Image5" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
              <Image src={image6} alt="Image6" className="w-8 h-13 md:w-28 md:h-40 rounded-sm md:rounded-lg image mt-6 md:mt-14" />
              <Image src={image7} alt="Image7" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
              <Image src={image8} alt="Image8" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image mt-8 md:mt-22" />

              <div className="flex flex-col space-y-1.5 md:space-y-4">
                <Image src={image9} alt="Image9" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
                <Image src={image10} alt="Image10" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
              </div>

              <div className="flex flex-col space-y-1.5 md:space-y-4 mt-10 md:mt-24">
                <Image src={image11} alt="Image11" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
                <Image src={image13} alt="Image12" className="w-8 h-13 md:w-28 md:h-42 rounded-sm md:rounded-lg image" />
              </div>

            </div>

            <div className="text-white max-w-2xl mt-10 md:mt-0 md:relative left-[4%]">
              <h3 className="text-3xl z-10">A network of like-minded specialists</h3>

              <p className="text-xl mt-4 md:mt-10 leading-relaxed z-10">
                At Bluetech, you don&apos;t work alone. You&apos;re part of a close-knit
                community where knowledge sharing, growth, and fun are a given.
              </p>

              <p className="font-light mt-4 md:mt-10 z-10">
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
                  bgColor="bg-white"
                  borderColor="border border-black"
                  textColor="text-black"
                  hoverBgColor="hover:bg-white"
                  hoverTextColor="hover:text-black"
                />

              </div>
            </div>

          </div>




          {/* <div>

            <div className="bg-[#ede7dd] rounded-l-[60px] rounded-b-[60px] relative px-6 md:px-74 text-center py-18 md:py-26 flex flex-col justify-center items-center">

              <h3 className="text-3xl z-10">A network of like-minded specialists</h3>

              <p className="text-xl mt-4 md:mt-10 leading-relaxed z-10">
                At Bluetech, you don&apos;t work alone. You&apos;re part of a close-knit
                community where knowledge sharing, growth, and fun are a given.
              </p>

              <p className="font-light mt-4 md:mt-10 z-10">
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
              className="md:w-44 w-24 -top-20 absolute md:-top-28 -left-20 scroll-image1"
            />

            <Image
              src={img_2}
              alt="Image 1"
              className="w-20 md:w-42 absolute top-20 md:top-44 -left-20 md:left-0 scroll-image1"
            />

            <Image
              src={img_3}
              alt="Image 1"
              className="md:w-38 w-20 absolute -bottom-20 -left-10 md:-bottom-20 md:-left-20 scroll-image1"
            />

            <Image
              src={img_4}
              alt="Image 1"
              className="md:w-56 w-30 absolute -bottom-30 md:-bottom-40 right-0 md:right-16"
            />

            <Image
              src={img_5}
              alt="Image 1"
              className="md:w-38 w-26 absolute -bottom-20 left-20 md:left-56 scroll-image2"
            />

            <Image
              src={img_6}
              alt="Image 1"
              className="md:w-62 w-48 absolute -top-16 md:-top-10 right-10 md:right-120 scroll-image2"
            />

            <Image
              src={img_7}
              alt="Image 1"
              className="md:w-68 w-39 absolute -bottom-24 right-10 md:right-60 scroll-image3"
            />

            <Image
              src={img_8}
              alt="Image 1"
              className="md:w-64 w-64 absolute md:top-36 top-70 -right-60 md:-right-50 scroll-image3"
            />

            <Image
              src={img_9}
              alt="Image 1"
              className="md:w-40 w-30 absolute top-24 md:-top-16 -right-22 md:-right-10 scroll-image3"
            />


          </div> */}


        </div>

      </div>

    </section>

  );
}

export default AnimationPage;
