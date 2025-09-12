import { Btn, Navbar, AnimationPage, HomePage, Footer } from "@/components";

import volkerRailImg from "../../public/images/volkerrail_black.png"
import schipholImg from "../../public/images/schiphol_black.png"
import bamImg from "../../public/images/bam_black.png"
import heijmansImg from "../../public/images/heijmans_black.png"
import croonwolterWitImg from "../../public/images/croonwolter-wit_black.png"
import spieImg from "../../public/images/spie_black.png"
import menImg from "../../public/images/men-img.jpg";
import gardenImg from "../../public/images/garden-img.jpg";

import healthCare from "../../public/images/healthcare.png";
import finTech from "../../public/images/fintech.png";
import climate_change from "../../public/images/climate-change.png"
import connected_car from "../../public/images/connected-car.png"
import learning from "../../public/images/learning.png"
import protection from "../../public/images/protection.png"
import school from "../../public/images/school.png"
import smart_cities from "../../public/images/smart-cities.png"
import solar_energy from "../../public/images/solar-energy.png"
import space from "../../public/images/space.png"

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
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <HomePage />

      <div className="relative mt-[97vh] lg:mb-[97vh] 2xl:mb-[54vh] z-50 bg-[#ede7dd] border-t border-t-black w-full">

        <section className="flex overflow-x-auto xl:overflow-x-hidden w-full justify-start xl:justify-center items-center gap-6 lg:gap-18 2xl:gap-25 p-4">
          <Image src={volkerRailImg} alt="VolkerRail" className="max-w-38 flex-shrink-0" />
          <Image src={schipholImg} alt="Schiphol" className="max-w-38 flex-shrink-0" />
          <Image src={bamImg} alt="BAM" className="max-w-38 flex-shrink-0" />
          <Image src={heijmansImg} alt="Heijmans" className="max-w-38 flex-shrink-0" />
          <Image src={croonwolterWitImg} alt="CroonwolterWit" className="max-w-38 flex-shrink-0" />
          <Image src={spieImg} alt="SPIE" className="max-w-38 flex-shrink-0" />
        </section>

        <section className="bg-black px-4 sm:px-6 md:px-10 pt-10 md:pt-20 md:pb-4">
          <div className="flex justify-center">
            <div className="xl:w-[1405px]">

              <div className="flex flex-col md:space-y-2">
                <h2 className="text-white text-5xl lg:text-[70px] hidden md:block">Stay Ahead in the</h2>
                <h2 className="text-white text-5xl lg:text-[70px] hidden md:block">Startup World</h2>
              </div>

              <h2 className="text-white text-2xl md:hidden block">Stay Ahead in the Startup World</h2>
              <p className="text-white mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:w-[80%]">The startup ecosystem moves fast — new trends, disruptive ideas, and bold strategies emerge every day.</p>
              <p className="text-white mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:w-[80%]">Our blog brings you sharp insights, founder stories, and the latest developments across sectors, so you&apos;re always one step ahead.</p>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 md:gap-6 -space-y-12">

                <div className="overflow-hidden cursor-pointer">
                  <Image src={menImg} alt="Men image" className="w-full h-32 object-cover transform transition-transform duration-500 hover:scale-110"></Image>

                  <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>

                  <div className="relative bottom-24 left-6 md:w-64 flex flex-col text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl">Emerging Tech & DeepTech</h3>
                    <p className="text-sm md:text-[16px] mt-6"> Explore how AI, quantum, and space tech are reshaping tomorrow&apos;s industries.</p>
                    <p className="mt-6 text-lg underline">Read more</p>
                  </div>
                </div>

                <div className="overflow-hidden cursor-pointer">
                  <Image src={menImg} alt="Men image" className="w-full h-32 object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>

                  <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl">Funding & Growth</h3>
                    <p className="text-sm md:text-[16px] mt-6"> Insights on raising capital, scaling globally, and building sustainable growth strategies.</p>
                    <p className="mt-6 text-lg underline">Read more</p>
                  </div>
                </div>

                <div className="overflow-hidden cursor-pointer">
                  <Image src={menImg} alt="Men image" className="w-full h-32 object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>

                  <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl">Founder Playbooks</h3>
                    <p className="text-sm md:text-[16px] mt-6">Real stories, hard lessons, and proven methods from entrepreneurs who&apos;ve been there.</p>
                    <p className="mt-6 text-lg underline">Read more</p>
                  </div>
                </div>

                <div className="overflow-hidden cursor-pointer">
                  <Image src={menImg} alt="Men image" className="w-full h-32 object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="relative bottom-16 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>

                  <div className="relative bottom-24 left-6 md:w-64 w-full flex flex-col text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl">Global Startup Trends</h3>
                    <p className="text-sm md:text-[16px] mt-6">Stay tuned to what&apos;s happening across ecosystems — from Silicon Valley to Singapore.</p>
                    <p className="mt-6 text-lg underline">Read more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 py-16 md:py-22">
          <div className="flex justify-center">
            <div className="xl:w-[1405px]">
              <h2 className="text-2xl md:text-5xl lg:text-[70px] lg:leading-20 xl:w-[90%]">Access the Right Expertise, Instantly</h2>

              <p className="mt-3 md:mt-7 text-sm sm:text-base md:text-lg font-light xl:w-[80%]">At G10X, you don&apos;t waste time searching. Each sector circle is packed with founders, domain mentors, and industry experts ready to share knowledge, solve challenges, and accelerate execution.</p>

              <p className="mt-3 text-sm sm:text-base md:text-lg font-light xl:w-[80%]">Whether you&apos;re building in healthcare, fintech, mobility, or space, you&apos;ll always find the right people to guide, collaborate, and multiply your growth.</p>

              <p className="mt-3 md:mt-7 text-sm sm:text-base md:text-lg font-light flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Sector-specific mentors and advisors who&apos;ve solved similar challenges
              </p>

              <p className="mt-2 text-sm sm:text-base md:text-lg font-light flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Peer founders who collaborate instead of compete
              </p>

              <p className="mt-2 text-sm sm:text-base md:text-lg font-light flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="#4fb1b6" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                A trusted circle where expertise and insights flow freely
              </p>

              <div className="mt-5 md:mt-8">
                <Btn
                  text="Join a Sector Circle"
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

        <section className="bg-black px-4 sm:px-6 md:px-10 py-10 md:py-20 lg:py-24">
          <div className="flex justify-center">
            <div className="xl:w-[1405px]">
              <h2 className="text-2xl md:text-5xl lg:text-[70px] text-white">Why Choose G10X?</h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 ">

                <div className="bg-[#ede7dd] flex justify-center items-center py-10 px-6 lg:py-14 lg:px-8 rounded-l-[60px] rounded-b-[60px]">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl md:text-[25px] lg:text-[30px]">Sector-Focused Ecosystems</h3>
                    <p className="text-sm sm:text-base md:text-lg font-light">10 categories. 10 growth tracks</p>
                    <p className="text-sm sm:text-base md:text-lg font-light">Every startup belongs to a well-defined circle — healthcare, fintech, mobility, deep tech, and more. This focus ensures targeted conversations, sharper insights, and stronger collaborations.</p>
                  </div>
                </div>

                <div className="bg-[#ede7dd] flex justify-center items-center py-10 px-6 lg:py-14 lg:px-8 rounded-l-[60px] rounded-b-[60px]">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl md:text-[25px] lg:text-[30px]">Collective Growth Philosophy</h3>
                    <p className="text-sm sm:text-base md:text-lg font-light">When one grows, all grow.</p>
                    <p className="text-sm sm:text-base md:text-lg font-light">Members share playbooks, breakthroughs, and lessons — multiplying impact instead of competing for spotlight.</p>
                  </div>
                </div>

                <div className="bg-[#ede7dd] flex justify-center items-center py-10 px-6 lg:py-14 lg:px-8 rounded-l-[60px] rounded-b-[60px]">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl md:text-[25px] lg:text-[30px]">Built for Founders, by Founders</h3>
                    <p className="text-sm sm:text-base md:text-lg font-light">No noise, no dilution.</p>
                    <p className="text-sm sm:text-base md:text-lg font-light">Every policy, program, and initiative in G10X is designed to protect fairness, foster collaboration, and keep the founder&apos;s journey at the center.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 md:mt-14">
                <Btn
                  text="Get to know us and thrive with G10X"
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

        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 pt-14 md:pt-20 lg:pt-26">
          <div className="flex justify-center">
            <div className="xl:w-[1405px]">
              <div className="relative">

                <div className="relative w-full">
                  <Image src={gardenImgBorder} alt="Garden border" className="absolute z-50 h-full w-full right-[32%]" />
                  <Image src={gardenImg} alt="Garden image" className="opacity-80 w-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#dfdacf]"></div>
                </div>

                <div className="absolute md:flex flex-col w-[50%] items-end bottom-[5%] z-50 right-[2%] hidden">
                  <p className="mt-2 font-semibold text-lg">“Joining G10X was a turning point in my founder journey.</p>
                  <p className="font-semibold text-lg">The sector-focused circle connected me with peers and mentors who understood my exact challenges. It&apos;s not just a community — it&apos;s where my startup found momentum.”</p>
                  <p className="font-light mt-4 text-lg">— Person 1, ABC Company</p>
                </div>

                <div className="flex flex-col items-end md:hidden relative bottom-10 z-50">
                  <p className="mt-2 font-semibold text-sm">“Joining G10X was a turning point in my founder journey. The sector-focused circle connected me with peers and mentors who understood my exact challenges. It&apos;s not just a community — it&apos;s where my startup found momentum.”</p>
                  <p className="font-light mt-4 text-sm">— Person 1, ABC Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 pt-4 md:pt-12 lg:pt-20 pb-18 md:pb-26">
          <div className="flex justify-center">
            <div className="xl:w-[1405px]">

              <div className="xl:flex flex-col -space-y-2 md:-space-y-7 hidden">
                <h2 className="text-[70px]">Building ventures that</h2>
                <h2 className="text-[70px]">make an impact across</h2>
                <h2 className="text-[70px]">industries</h2>
              </div>

              <div className="flex flex-col -space-y-2 xl:hidden">
                <h2 className="text-2xl md:text-5xl">Building ventures that make an impact across industries</h2>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={healthCare} alt="building image" className="w-10" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">Healthcare</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light"> Innovative solutions transforming patient care and medical ecosystems.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={finTech} alt="building image" className="w-10" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">Fintech</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">Smarter, inclusive financial systems built for the digital age.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={connected_car} alt="building image" className="w-10" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">Mobility</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">From EVs to logistics, reimagining how the world moves.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={solar_energy} alt="building image" className="w-9" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">Energy</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">Clean, sustainable solutions powering the future.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={learning} alt="building image" className="w-9" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">Deep Tech</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">AI, robotics, and frontier tech redefining what&apos;s possible.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={climate_change} alt="building image" className="w-9 lg:mb-4" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">Climate & Sustainability</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">Driving green initiatives and circular economies.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={space} alt="building image" className="w-9" />
                    <h3 className="text-lg md:text-xl lg:text-[28px] relative top-l lg:font-semibold">Space</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">Unlocking opportunities beyond Earth.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={school} alt="building image" className="w-9" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">EdTech</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">Reinventing how people learn and upskill.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={protection} alt="building image" className="w-9 lg:mb-1 xl:mb-4" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">Consumer & Lifestyle</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">Products and platforms shaping daily life.</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-end gap-2.5">
                    <Image src={smart_cities} alt="building image" className="w-10 lg:mb-1 xl:mb-4" />
                    <h3 className="text-md md:text-xl lg:text-[28px] relative top-2 lg:font-semibold">Smart Infrastructure</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-6 font-light">Next-gen cities, security, and connected systems.</p>
                </div>
              </div>

              <div className="mt-10 md:mt-14">
                <Btn
                  text="Get started with G10x now…"
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

        <section className="bg-[#ede7dd] px-4 sm:px-6 md:px-10 md:py-16 py-10 lg:py-20 pb-0 md:pb-2 lg:pb-6">
          <div className="flex justify-center">
            <div className="xl:w-[1405px]">
              <h2 className="text-2xl md:text-5xl xl:text-[70px]">Stories of G10X Founders</h2>
              <p className="text-sm sm:text-base md:text-lg font-light mt-2 xl:w-[80%]">Every founder in G10X has a story. These are journeys of resilience, collaboration, and growth — powered by focus and community.</p>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 -space-y-14 md:gap-6">

                <div className="relative">
                  <Image src={menImg2} alt="Men image 2" className="rounded-l-[60px] rounded-b-[60px] sm:w-full" />
                  <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>
                  <div className="flex flex-col space-y-5 absolute bottom-[24%] sm:bottom-[16%] md:bottom-[24%] lg:bottom-[22%] left-[4%] p-4">
                    <p className="border border-white rounded-full py-1 px-3 text-white w-fit text-sm sm:text-base md:text-lg">Healthcare Circle</p>
                    <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:3xl"> Dr. Ananya: How her startup reduced patient wait time in rural clinics by 40% with AI triage.</h3>
                    <p className="text-white text-sm sm:text-base md:text-lg font-semibold underline">Read more</p>
                  </div>
                </div>

                <div className="relative">
                  <Image src={menImg2} alt="Men image 2" className="rounded-l-[60px] rounded-b-[60px] sm:w-full" />
                  <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>
                  <div className="flex flex-col space-y-5 absolute bottom-[24%] sm:bottom-[16%] md:bottom-[24%] lg:bottom-[22%] left-[4%] p-4">
                    <p className="border border-white rounded-full py-1 px-3 text-white w-fit text-sm sm:text-base md:text-lg">Fintech Circle</p>
                    <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:3xl">Arjun Mehta: Scaling a cross-border payments platform with mentorship from the G10X Fintech track.</h3>
                    <p className="text-white text-sm sm:text-base md:text-lg font-semibold underline">Read more</p>
                  </div>
                </div>

                <div className="relative">
                  <Image src={menImg2} alt="Men image 2" className="rounded-l-[60px] rounded-b-[60px] sm:w-full" />
                  <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>
                  <div className="flex flex-col space-y-5 absolute bottom-[24%] sm:bottom-[16%] md:bottom-[34%] lg:bottom-[28%] xl:bottom-[22%] left-[4%] p-4">
                    <p className="border border-white rounded-full py-1 px-3 text-white w-fit text-sm sm:text-base md:text-lg">Mobility Circle</p>
                    <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:3xl">Lena Torres: From prototype to pilot — building sustainable EV charging hubs with G10X</h3>
                    <p className="text-white text-sm sm:text-base md:text-lg font-semibold underline">Read more</p>
                  </div>
                </div>

                <div className="relative">
                  <Image src={menImg2} alt="Men image 2" className="rounded-l-[60px] rounded-b-[60px] sm:w-full" />
                  <div className="relative bottom-27 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-[60px]"></div>
                  <div className="flex flex-col space-y-5 absolute bottom-[24%] sm:bottom-[16%] md:bottom-[26%] lg:bottom-[22%] xl:bottom-[22%] left-[4%] p-4">
                    <p className="border border-white rounded-full py-1 px-3 text-white w-fit text-sm sm:text-base md:text-lg">DeepTech Circle</p>
                    <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:3xl">Ravi & team: Turning a university project into a funded robotics startup with guidance from G10X mentors.</h3>
                    <p className="text-white text-sm sm:text-base md:text-lg font-semibold underline">Read more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#52b2b8] to-[#b0e8eb] overflow-x-hidden px-4 sm:px-6 md:px-10 py-14 md:py-18 lg:py-22 xl:py-22">
          <div className="flex justify-center">
            <div className="xl:w-[1405px]">
              <div className="flex flex-col lg:flex-row lg:space-x-30 justify-between">

                <div className="flex flex-col space-y-4 md:space-y-8 mt-4">
                  <h2 className="text-2xl md:text-5xl xl:text-[70px] lg:leading-14 xl:leading-20">Ready to scale with focus and thrive with us?</h2>
                  <p className="font-light text-sm sm:text-base md:text-lg lg:xl">Whether you&apos;re a founder looking to grow in your sector, a mentor eager to guide, or an innovator seeking collaboration — G10X is the place where focus meets scale. Let&apos;s connect and explore how you can be part of this global founder community.
                  </p>
                  <div className="mt-2">
                    <Btn
                      text="Schedule an Introductory Call"
                      bgColor="bg-black"
                      borderColor="border border-black"
                      textColor="text-white"
                      hoverBgColor="hover:bg-black"
                      hoverTextColor="hover:text-white"
                    />
                  </div>
                </div>

                <Image src={menImg3} alt="Men image 3" className="lg:w-1/3 md:h-110 mt-12 rounded-l-[60px] rounded-b-[60px] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className={`bg-black lg:hidden block w-full pt-40`}>
          <div className="flex justify-center">
            <div>
              <div className="flex flex-col px-4">

                <div className="flex flex-col items-center">
                  <Image src={originalLogo} alt="logo white" className="w-50" />
                  <div className="flex gap-8 mt-10 ">
                    <Image src={linkedInImg} alt="Linked in image" className="w-14" />
                    <Image src={instagramImg} alt="Instagram image" className="w-14" />
                    <Image src={facebookImg} alt="Facebook image" className="w-14" />
                  </div>
                </div>

                <div className="flex flex-col border-l border-gray-500 pl-16 mt-4 pb-10 ml-18 ">
                  <ul className="flex flex-col text-white mt-14 md:mt-24 text-sm">
                    <li className="cursor-pointer hover:underline">Vacancies</li>
                    <li className="cursor-pointer hover:underline">Trainee</li>
                    <li className="cursor-pointer hover:underline">Interim manager</li>
                    <li className="cursor-pointer hover:underline">Client</li>
                  </ul>
                  <div className="text-white border border-white py-1 px-4 mt-10 rounded-3xl w-fit duration-500 transform transition-transform hover:translate-x-2.5 cursor-pointer text-sm text-nowrap">
                    Contact us
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-500 mt-6 pt-6 md:pt-9 pb-6 w-full">
                <ul className="flex flex-wrap justify-center items-center text-white underline text-sm gap-5 md:gap-9">
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
