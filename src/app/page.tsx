import {
  Navbar, AnimationPage, HomePage, Footer, SectionOne,
  SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix,
  SectionEight, SectionNine, SectionTen
} from "@/components";


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#ede7dd] overflow-y-auto">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <HomePage />

      <div className="relative mt-[97vh] lg:mb-[97vh] 2xl:mb-[54vh] z-50 bg-[#ede7dd] border-t border-t-black w-full">

        <SectionOne />

        <SectionTwo />

        <SectionThree />

        <SectionFour />

        <SectionFive />

        <SectionSix />

        <AnimationPage />

        <SectionEight />

        <SectionNine />

        <SectionTen />
      </div>

      <Footer />
    </div>
  );
}
