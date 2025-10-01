import {
  Navbar, AnimationPage, HomePage, Footer, SectionOne,
  SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix,
  SectionEight, SectionNine, SectionTen
} from "@/components";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#ede7dd] overflow-y-auto">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar
          items={[
            { label: "Home", href: "/" },
            { label: "Blogs", targetId: "blogs-section" },
            { label: "Community", targetId: "community-section" },
          ]}
        />
      </div>

      <HomePage />

      <div className="relative mt-[97vh] lg:mb-[97vh] 2xl:mb-[760px] z-50 bg-[#ede7dd] border-t border-t-black w-full">

        <SectionOne />

        <div id="blogs-section">
          <SectionTwo />
        </div>

        <SectionThree />

        <SectionFour />

        <SectionFive />

        <SectionSix />

        {/* <div id="community-section">
          <AnimationPage />
        </div> */}

        <SectionEight />

        <SectionNine />

        <SectionTen />
      </div>

      <Footer />
    </div>
  );
}
