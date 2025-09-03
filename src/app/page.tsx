import { Btn, Navbar } from "@/components";
import meetingImg from "../../public/images/meeting-img.jpg";

import volkerRailImg from "../../public/images/VolkerRail.svg"
import schipholImg from "../../public/images/Schiphol.svg"
import bamImg from "../../public/images/bam.svg"
import heijmansImg from "../../public/images/Heijmans.svg"
import croonwolterWitImg from "../../public/images/croonwolter-wit.svg"
import spieImg from "../../public/images/SPIE.svg"

import menImg from "../../public/images/men-img.jpg";
import gardenImg from "../../public/images/garden-img.jpg";

import buildingLightImg from "../../public/images/buildings-light.svg"
import infrastructureImg from "../../public/images/Infrastructure.svg"
import securityImg from "../../public/images/security.svg"
import energyImg from "../../public/images/energy.svg"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#ede7dd] overflow-y-auto">

      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>


      <section className="fixed top-0 left-0 w-full h-screen p-10 overflow-hidden">

        <div className="flex flex-col space-y-8 w-1/2 z-50 absolute mt-[8%]">

          <div className="text-7xl">
            Help us build the technology of tomorrow
          </div>

          <p className="text-xl">
            From sustainable building installations to smart infrastructure: <br />
            your expertise makes the difference. Together, we create <br />
            technical solutions that make an impact.
          </p>

          <div className="flex">
            <Btn text="Find your challenge" bg_color="[#e83a77]" border_color="[#e83a77]" text_color="black" hover_bg_color="[#e83a77]" hover_text_color="white" arrow_bg_color="[#e83a77]" />
          </div>
        </div>

        <div className="flex-1 flex justify-end opacity-40 items-center">
          <img
            src={meetingImg.src}
            alt="Meeting image"
            className="h-screen w-[70%] object-cover"
          />
        </div>
      </section>


      <div className="relative mt-[97vh] bg-[#ede7dd] border-t border-t-black w-full">



        <section className="flex overflow-auto justify-center items-center gap-20 p-10 h-44">

          <img src={volkerRailImg.src} alt="VolkerRail" className="h-10 fill-black" />
          <img src={schipholImg.src} alt="Schiphol" className="h-16 fill-black" />
          <img src={bamImg.src} alt="BAM" className="h-10 fill-black" />
          <img src={heijmansImg.src} alt="Heijmans" className="h-20 fill-black" />
          <img src={croonwolterWitImg.src} alt="CroonwolterWit" className="h-8 fill-black" />
          <img src={spieImg.src} alt="SPIE" className="h-12 fill-black" />

        </section>


        <section className="bg-black px-6 md:px-18 pt-20 md:pb-4">

          <div className="flex flex-col -space-y-6">
            <h2 className="text-white text-[70px] hidden md:block">Your career in technology</h2>
            <h2 className="text-white text-[70px] hidden md:block">starts here</h2>
          </div>

          <h2 className="text-white text-[40px] md:hidden block">Your career in technology starts here</h2>

          <p className="text-white mt-2 hidden md:block">Whether you're just starting out or have been around for years, at Bluetech you'll find the challenge that suits <br /> you. Together, we'll choose a path that aligns with your talents, ambitions, and desires.</p>

          <p className="text-white text-sm mt-2 md:hidden block">Whether you're just starting out or have been around for years, at Bluetech you'll find the challenge that suits <br /> you. Together, we'll choose a path that aligns with your talents, ambitions, and desires.</p>

          <div className="mt-14 flex flex-col md:flex-row md:gap-6 -space-y-6 ">

            <div className="md:w-74 w-full overflow-hidden cursor-pointer">
              <img src={menImg.src} alt="Men image" className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />

              <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>


              <div className="relative bottom-24 left-6 md:w-64 flex flex-col text-white">

                <h3 className="text-xl md:text-2xl">Traineeship</h3>

                <p className="text-sm md:text-[16px] mt-6">Kickstart your career with guidance, training, and real-world experience.</p>

                <p className="mt-6 text-xl underline">Read more</p>


              </div>


            </div>

            <div className="md:w-74 w-full overflow-hidden cursor-pointer">
              <img src={menImg.src} alt="Men image" className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />

              <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>


              <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">

                <h3 className="text-xl md:text-2xl">Interim assignments</h3>

                <p className="text-sm md:text-[16px] mt-6">Kickstart your career with guidance, training, and real-world experience.</p>

                <p className="mt-6 text-xl underline">Read more</p>


              </div>


            </div>

            <div className="md:w-74 w-full overflow-hidden cursor-pointer">
              <img src={menImg.src} alt="Men image" className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />

              <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>


              <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">

                <h3 className="text-xl md:text-2xl">Inhouse Creator</h3>

                <p className="text-sm md:text-[16px] mt-6">Kickstart your career with guidance, training, and real-world experience.</p>

                <p className="mt-6 text-xl underline">Read more</p>


              </div>


            </div>

            <div className="md:w-74 w-full overflow-hidden cursor-pointer">
              <img src={menImg.src} alt="Men image" className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />

              <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>


              <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">

                <h3 className="text-xl md:text-2xl">self-employed</h3>

                <p className="text-sm md:text-[16px] mt-6">Kickstart your career with guidance, training, and real-world experience.</p>

                <p className="mt-6 text-xl underline">Read more</p>


              </div>


            </div>


          </div>

        </section>


        <section className="bg-[#ede7dd] px-6 md:px-18 py-20 md:py-22">

          <div className="flex flex-col -space-y-6">
            <h2 className="text-[70px] hidden md:block">Looking for technical</h2>
            <h2 className="text-[70px] hidden md:block">experts for your project?</h2>
          </div>

          <h2 className="md:text-2xl text-[40px] md:hidden block">Looking for technical experts for your project?</h2>

          <p className="mt-3 md:mt-7 text-lg font-light">Our specialists are ready to step in immediately, with in-depth knowledge and a passion for technology.</p>

          <p className="mt-3 md:mt-7 text-lg font-light flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Specialist knowledge of complex projects
          </p>

          <p className="mt-2 text-lg font-light flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Immediately available for short and long-term assignments
          </p>

          <p className="mt-2 text-lg font-light flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Completely unburdened thanks to our team and guidance
          </p>

          <div className="mt-5 md:mt-8">
            <Btn text="Schedule an introductory meeting" bg_color="[#ede7dd]" border_color="black" text_color="black" hover_bg_color="black" hover_text_color="white" arrow_bg_color="[#e83a77]" />
          </div>


        </section>

        <section className="bg-black px-6 md:px-18 py-24">

          <h2 className="text-[42px] md:text-[70px] text-white">Why choose Bluetech?</h2>

          <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-8">

            <div className="bg-[#ede7dd] px-6 py-10 rounded-xl w-full md:w-98">
              <h3 className="text-[30px]">Working on large, complex projects</h3>

              <p className="font-light mt-3">From smart infrastructure and sustainable utility solutions to high-tech security systems, your expertise makes the difference.</p>
            </div>

            <div className="bg-[#ede7dd] px-6 py-10 rounded-xl w-full md:w-98">
              <h3 className="text-[30px]">Personal growth and craftsmanship</h3>

              <p className="font-light mt-3">With the Bluetech Academy, you'll develop both technically and personally. Training, coaching, and guidance are key.</p>
            </div>

            <div className="bg-[#ede7dd] px-6 py-10 rounded-xl w-full md:w-98">
              <h3 className="text-[30px]">Learning from and with each other</h3>

              <p className="font-light mt-3">You'll be part of a network of over 100 experts. There's always someone to bounce ideas off, laugh with, and learn from.</p>
            </div>

          </div>

          <div className="mt-5 md:mt-14">
            <Btn text="Get to know us and discover how we can support you" bg_color="white" border_color="black" text_color="black" hover_bg_color="white" hover_text_color="black" arrow_bg_color="[#e83a77]" />
          </div>

        </section>

        <section className="bg-[#ede7dd] px-6 md:px-18 py-20 md:py-26">

          <div className="relative">

            <div className="relative w-full">

              <img src={gardenImg.src} alt="interview image" className="opacity-40 w-full" />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#dfdacf]"></div>

            </div>

            <div className="absolute flex flex-col items-end top-75 right-10">

              <h3 className="text-4xl">A former colleague recommended</h3>
              <h3 className="text-4xl">Bluetech to me. Best</h3>
              <h3 className="text-4xl">decision of my</h3>
              <h3 className="text-4xl">career.</h3>

              <p className="mt-10 font-semibold">You sense that Bluetech is all</p>
              <p className="font-semibold">about people, not CVs and targets. That, for me, is the added</p>
              <p className="font-semibold">value of Bluetech. The variety of assignments and the direct</p>
              <p className="font-semibold">approach make working here ideal.</p>
              <p className="font-light mt-4">— Tom</p>

            </div>

          </div>

        </section>

        <section className="bg-[#ede7dd] px-6 md:px-18 pb-18 md:pb-26">

          <div className="flex flex-col -space-y-7">
            <h2 className="text-[42px] md:text-[70px]">Working on technical</h2>

            <h2 className="text-[42px] md:text-[70px]">projects that make an</h2>

            <h2 className="text-[42px] md:text-[70px]">impact</h2>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-8">

            <div className="flex flex-col w-74">

              <div className="flex items-end gap-2.5">
                <img src={buildingLightImg.src} alt="building image" className="w-10" />
                <h3 className="text-[28px] relative top-2 font-semibold">Utilit eit</h3>
              </div>

              <p className="mt-6 font-light">Smart building installations for hospitals, schools and offices.</p>

            </div>

            <div className="flex flex-col w-68 md:ml-2">

              <div className="flex items-end gap-2.5">
                <img src={infrastructureImg.src} alt="building image" className="w-10" />
                <h3 className="text-[28px] relative top-2 font-semibold">Infrastructure</h3>
              </div>

              <p className="mt-6 font-light">Safe, efficient infrastructure. From tunnels and locks to traffic systems.</p>

            </div>


            <div className="flex flex-col w-64 md:ml-8">

              <div className="flex items-end gap-2.5">
                <img src={securityImg.src} alt="building image" className="w-10" />
                <h3 className="text-[28px] relative top-2 font-semibold">Security</h3>
              </div>

              <p className="mt-6 font-light">Advanced fire safety and access control systems.</p>

            </div>

            <div className="flex flex-col w-60 md:ml-8">

              <div className="flex items-end gap-2.5">
                <img src={energyImg.src} alt="building image" className="w-9" />
                <h3 className="text-[28px] relative top-2 font-semibold">Energy</h3>
              </div>

              <p className="mt-6 font-light">Sustainable solutions for energy storage and smart grids.</p>

            </div>

          </div>


        </section>






      </div>

    </div>
  );
}
