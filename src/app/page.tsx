import { Btn, Navbar, AnimationPage, HomePage, Footer } from "@/components";

import volkerRailImg from "../../public/images/volkerrail_black.png"
import schipholImg from "../../public/images/schiphol_black.png"
import bamImg from "../../public/images/bam_black.png"
import heijmansImg from "../../public/images/heijmans_black.png"
import croonwolterWitImg from "../../public/images/croonwolter-wit_black.png"
import spieImg from "../../public/images/spie_black.png"

import menImg from "../../public/images/men-img.jpg";
import gardenImg from "../../public/images/garden-img.jpg";

import buildingLightImg from "../../public/images/buildings-light.svg"
import infrastructureImg from "../../public/images/Infrastructure.svg"
import securityImg from "../../public/images/security.svg"
import energyImg from "../../public/images/energy.svg"

import menImg2 from "../../public/images/men-img2.jpg";
import menImg3 from "../../public/images/men-img3.webp";

import gardenImgBorder from "../../public/images/garden-img-border.svg"
import Image from "next/image";

import originalLogo from "../../public/images/original_logo.png";
import linkedInImg from "../../public/images/Linkedin-img.svg";
import instagramImg from "../../public/images/Instagram-img.svg";
import facebookImg from "../../public/images/Facebook-img.svg";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#ede7dd] overflow-y-auto">

      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      <HomePage />


      <div className="relative mt-[97vh] md:mb-[97vh] 2xl:mb-[52vh] z-50 bg-[#ede7dd] border-t border-t-black w-full">



        <section className="flex overflow-x-auto md:overflow-x-hidden w-full justify-start md:justify-center items-center gap-6 md:gap-20 p-8 md:p-10">

          <Image src={volkerRailImg} alt="VolkerRail" className="w-38"></Image>

          <Image src={schipholImg} alt="Schiphol" className="w-38"></Image>

          <Image src={bamImg} alt="BAM" className="w-38"></Image>

          <Image src={heijmansImg} alt="Heijmans" className="w-38"></Image>

          <Image src={croonwolterWitImg} alt="CroonwolterWit" className="w-38"></Image>

          <Image src={spieImg} alt="SPIE" className="w-38"></Image>

        </section>


        <section className="bg-black px-6 md:px-18 pt-20 md:pb-4">

          <div className="flex justify-center">

            <div className="xl:w-[1405px]">

              <div className="flex flex-col -space-y-6">

                <h2 className="text-white text-[70px] hidden md:block">Your career in technology</h2>

                <h2 className="text-white text-[70px] hidden md:block">starts here</h2>

              </div>

              <h2 className="text-white text-[40px] md:hidden block">Your career in technology starts here</h2>

              <p className="text-white mt-2 hidden md:block">Whether you&apos;re just starting out or have been around for years, at Bluetech you&apos;ll find the challenge that suits <br /> you. Together, we&apos;ll choose a path that aligns with your talents, ambitions, and desires.</p>

              <p className="text-white text-sm mt-2 md:hidden block">Whether you&apos;re just starting out or have been around for years, at Bluetech you&apos;ll find the challenge that suits <br /> you. Together, we&apos;ll choose a path that aligns with your talents, ambitions, and desires.</p>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:gap-6 -space-y-6 ">

                <div className="overflow-hidden cursor-pointer">

                  <Image src={menImg} alt="Men image" className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
                  ></Image>

                  <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>


                  <div className="relative bottom-24 left-6 md:w-64 flex flex-col text-white">

                    <h3 className="text-xl md:text-2xl">Traineeship</h3>

                    <p className="text-sm md:text-[16px] mt-6">Kickstart your career with guidance, training, and real-world experience.</p>

                    <p className="mt-6 text-xl underline">Read more</p>


                  </div>


                </div>

                <div className="overflow-hidden cursor-pointer">

                  <Image src={menImg} alt="Men image" className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />

                  <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>


                  <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">

                    <h3 className="text-xl md:text-2xl">Interim assignments</h3>

                    <p className="text-sm md:text-[16px] mt-6">Kickstart your career with guidance, training, and real-world experience.</p>

                    <p className="mt-6 text-xl underline">Read more</p>


                  </div>


                </div>

                <div className="overflow-hidden cursor-pointer">

                  <Image src={menImg} alt="Men image" className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />

                  <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>


                  <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">

                    <h3 className="text-xl md:text-2xl">Inhouse Creator</h3>

                    <p className="text-sm md:text-[16px] mt-6">Kickstart your career with guidance, training, and real-world experience.</p>

                    <p className="mt-6 text-xl underline">Read more</p>


                  </div>


                </div>

                <div className="overflow-hidden cursor-pointer">

                  <Image src={menImg} alt="Men image" className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />

                  <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>


                  <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">

                    <h3 className="text-xl md:text-2xl">self-employed</h3>

                    <p className="text-sm md:text-[16px] mt-6">Kickstart your career with guidance, training, and real-world experience.</p>

                    <p className="mt-6 text-xl underline">Read more</p>


                  </div>


                </div>


              </div>

            </div>

          </div>

        </section>


        <section className="bg-[#ede7dd] px-6 md:px-18 py-20 md:py-22">

          <div className="flex justify-center">

            <div className="xl:w-[1405px]">

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
                <Btn
                  text="Schedule an introductory meeting"
                  bgColor="bg-[#ede7dd]"
                  borderColor="border border-black"
                  textColor="text-black"
                  hoverBgColor="hover:bg-black"
                  hoverTextColor="hover:text-white"
                />

              </div>

            </div>

          </div>

        </section>


        <section className="bg-black px-6 md:px-18 py-24">

          <div className="flex justify-center">

            <div className="xl:w-[1405px]">

              <h2 className="text-[42px] md:text-[70px] text-white">Why choose Bluetech?</h2>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 ">


                <div className="bg-[#ede7dd] flex justify-center items-center py-20 px-8 rounded-l-[60px] rounded-b-[60px]">

                  <div>

                    <h3 className="text-[30px]">Working on large, complex projects</h3>

                    <p className="font-light mt-3">From smart infrastructure and sustainable utility solutions to high-tech security systems, your expertise makes the difference.</p>
                  </div>

                </div>



                <div className="bg-[#ede7dd] flex justify-center items-center py-20 px-8 rounded-l-[60px] rounded-b-[60px]">

                  <div>

                    <h3 className="text-[30px]">Working on large, complex projects</h3>

                    <p className="font-light mt-3">From smart infrastructure and sustainable utility solutions to high-tech security systems, your expertise makes the difference.</p>
                  </div>

                </div>



                <div className="bg-[#ede7dd] flex justify-center items-center py-20 px-8 rounded-l-[60px] rounded-b-[60px]">

                  <div>

                    <h3 className="text-[30px]">Working on large, complex projects</h3>

                    <p className="font-light mt-3">From smart infrastructure and sustainable utility solutions to high-tech security systems, your expertise makes the difference.</p>
                  </div>

                </div>

              </div>

              <div className="mt-5 md:mt-14">
                <Btn
                  text="Get to know us and discover how we can support you"
                  bgColor="bg-white"
                  borderColor="border border-white"
                  textColor="text-black"
                  hoverBgColor="hover:bg-white"
                  hoverTextColor="hover:text-black"
                />

              </div>

            </div>

          </div>

        </section>


        <section className="bg-[#ede7dd] px-6 md:px-18 pt-14 md:pt-26">

          <div className="flex justify-center">

            <div className="xl:w-[1405px]">

              <div className="relative">

                <div className="relative w-full">

                  <Image src={gardenImgBorder} alt="Garden border" className="absolute z-50 h-full w-full right-[32%]" />

                  <Image src={gardenImg} alt="Garden image" className="opacity-80 w-full" />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#dfdacf]"></div>


                </div>

                <div className="absolute md:flex flex-col items-end bottom-[5%] right-[2%] hidden">

                  <h3 className="text-4xl">A former colleague recommended</h3>

                  <h3 className="text-4xl">Bluetech to me. Best</h3>

                  <h3 className="text-4xl">decision of my</h3>

                  <h3 className="text-4xl">career.</h3>

                  <p className="mt-2 font-semibold text-lg">You sense that Bluetech is all</p>

                  <p className="font-semibold text-lg">about people, not CVs and targets. That, for me, is the added</p>

                  <p className="font-semibold text-lg">value of Bluetech. The variety of assignments and the direct</p>

                  <p className="font-semibold text-lg">approach make working here ideal.</p>

                  <p className="font-light mt-4">— Tom</p>

                </div>

                <div className="absolute top-[4%] left-[4%] right-[4%] flex flex-col items-end md:hidden">

                  <p className="mt-2 font-semibold text-sm">You sense that Bluetech is all about people, not CVs and targets. That, for me, is the added value of Bluetech. The variety of assignments and the direct approach make working here ideal.</p>

                  <p className="font-light mt-4">— Tom</p>

                </div>

              </div>

            </div>

          </div>

        </section>


        <section className="bg-[#ede7dd] px-6 pt-14 md:pt-20 md:px-18 pb-18 md:pb-26">

          <div className="flex justify-center">

            <div className="xl:w-[1405px]">

              <div className="flex flex-col -space-y-2 md:-space-y-7">

                <h2 className="text-[42px] md:text-[70px]">Working on technical</h2>

                <h2 className="text-[42px] md:text-[70px]">projects that make an</h2>

                <h2 className="text-[42px] md:text-[70px]">impact</h2>

              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8">

                <div className="flex flex-col">

                  <div className="flex items-end gap-2.5">

                    <Image src={buildingLightImg} alt="building image" className="w-10" />

                    <h3 className="text-xl md:text-[28px] relative top-2 md:font-semibold">Utilit eit</h3>

                  </div>

                  <p className="mt-6 font-light">Smart building installations for hospitals, schools and offices.</p>

                </div>


                <div className="flex flex-col">

                  <div className="flex items-end gap-2.5">

                    <Image src={infrastructureImg} alt="building image" className="w-10" />

                    <h3 className="text-xl md:text-[28px] relative top-2 md:font-semibold">Infrastructure</h3>

                  </div>

                  <p className="mt-6 font-light">Safe, efficient infrastructure. From tunnels and locks to traffic systems.</p>

                </div>


                <div className="flex flex-col">

                  <div className="flex items-end gap-2.5">

                    <Image src={securityImg} alt="building image" className="w-10" />

                    <h3 className="text-xl md:text-[28px] relative top-2 md:font-semibold">Security</h3>

                  </div>

                  <p className="mt-6 font-light">Advanced fire safety and access control systems.</p>

                </div>


                <div className="flex flex-col">

                  <div className="flex items-end gap-2.5">

                    <Image src={energyImg} alt="building image" className="w-9" />

                    <h3 className="text-xl md:text-[28px] relative top-2 md:font-semibold">Energy</h3>

                  </div>

                  <p className="mt-6 font-light">Sustainable solutions for energy storage and smart grids.</p>

                </div>

              </div>

              <div className="mt-10 md:mt-14">
                <Btn
                  text="View all our project cases"
                  bgColor="bg-[#ede7dd]"
                  borderColor="border border-black"
                  textColor="text-black"
                  hoverBgColor="hover:bg-black"
                  hoverTextColor="hover:text-white"
                />

              </div>

            </div>

          </div>

        </section>


        <AnimationPage />


        <section className="bg-[#ede7dd] px-6 md:px-18 py-20 pb-6">

          <div className="flex justify-center">

            <div className="xl:w-[1405px]">

              <h2 className="text-[42px] md:text-[70px]">Stories of Bluetechers</h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:gap-8 gap-0">


                <div className="relative">

                  <Image src={menImg2} alt="Men image 2" className="rounded-l-[60px] rounded-b-[60px]" />

                  <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>

                  <div className="flex flex-col space-y-5 absolute bottom-[24%] left-[8%]">

                    <p className="border border-white rounded-full py-1 px-3 text-white w-fit">Trainee</p>

                    <h3 className="text-white text-3xl">Daan Jansen: From traineeship to own projects</h3>

                    <p className="text-white text-xl font-semibold underline">Read more</p>

                  </div>


                </div>


                <div className="relative">

                  <Image src={menImg2} alt="Men image 2" className="rounded-l-[60px] rounded-b-[60px]" />

                  <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>

                  <div className="flex flex-col space-y-5 absolute bottom-[24%] left-[8%]">

                    <p className="border border-white rounded-full py-1 px-3 text-white w-fit">Inhouse Creator</p>

                    <h3 className="text-white text-3xl">Bryan Tobben: Always looking for what can be done smarter, faster and more scalable</h3>

                    <p className="text-white text-xl font-semibold underline">Read more</p>

                  </div>

                </div>


                <div className="relative">

                  <Image src={menImg2} alt="Men image 2" className="rounded-l-[60px] rounded-b-[60px]" />

                  <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>

                  <div className="flex flex-col space-y-5 absolute bottom-[24%] left-[8%]">

                    <h3 className="text-white text-3xl">Mariska: First modular substation in the Netherlands installed</h3>

                    <p className="text-white text-xl font-semibold underline">Read more</p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        <section className="bg-gradient-to-r from-[#52b2b8] to-[#b0e8eb] overflow-x-hidden px-6 md:px-18 py-20 md:py-22">

          <div className="flex justify-center">

            <div className="xl:w-[1405px]">

              <div className="flex flex-col md:flex-row justify-between">

                <div className="flex flex-col space-y-4 md:space-y-8 md:w-1/2 mt-4">

                  <h2 className="text-[42px] md:text-[70px] leading-13 md:leading-20">Would you like to get acquainted to see if there is a match?</h2>

                  <p className="font-light text-[22px]">Do you have a question, want to meet up, or simply discuss your options? Get in touch; we&apos;d love to discuss your needs.</p>

                  <div className="mt-2">

                    <Btn
                      text="Schedule an introductory meeting"
                      bgColor="bg-black"
                      borderColor="border border-black"
                      textColor="text-white"
                      hoverBgColor="hover:bg-black"
                      hoverTextColor="hover:text-white"
                    />

                  </div>

                </div>

                <Image src={menImg3} alt="Men image 3" className="md:w-110 md:h-110 mt-12 rounded-l-[60px] rounded-b-[60px]" />

              </div>

            </div>

          </div>

        </section>


        <section
          className={`bg-black md:hidden block w-full pt-40 p-10`}>

          <div className="flex justify-center">

            <div>

              <div className="flex flex-col px-6 ">

                <div className="flex flex-col items-center">

                  <Image src={originalLogo} alt="logo white" className="w-50" />

                  <div className="flex gap-8 mt-10 ">

                    <Image src={linkedInImg} alt="Linked in image" className="w-14" />

                    <Image src={instagramImg} alt="Instagram image" className="w-14" />

                    <Image src={facebookImg} alt="Facebook image" className="w-14" />

                  </div>

                </div>

                <div className="flex flex-col border-l border-gray-500 pl-16 mt-4 pb-10 ml-10 ">

                  <ul className="flex flex-col text-white mt-14 md:mt-24 text-lg">

                    <li className="cursor-pointer hover:underline">Vacancies</li>

                    <li className="cursor-pointer hover:underline">Trainee</li>

                    <li className="cursor-pointer hover:underline">Interim manager</li>

                    <li className="cursor-pointer hover:underline">Client</li>

                  </ul>

                  <div className="text-white border border-white py-1 px-4 mt-10 rounded-3xl w-fit duration-500 transform transition-transform hover:translate-x-2.5 cursor-pointer">
                    Contact us
                  </div>

                </div>

              </div>

              <div className="border-t border-gray-500 mt-6 pt-6 md:pt-9">

                <ul className="flex w-full flex-wrap justify-center items-center text-white underline text-sm md:text-[17px] gap-5 md:gap-9">

                  <li className="cursor-pointer">Privacy statement</li>

                  <li className="cursor-pointer">Disclaimer</li>

                  <li className="cursor-pointer">General terms and conditions</li>

                </ul>

              </div>

            </div>

          </div>

        </section>


      </div>


      <Footer />

    </div>
  );
}
