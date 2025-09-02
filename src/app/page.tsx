import { Btn, Navbar } from "@/components";
import meetingImg from "../../public/images/meeting-img.jpg";

export default function Home() {




  return (
    <div className="flex flex-col w-full h-screen bg-[#ede7dd] p-10">

      {/* <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div> */}

      <section className="w-full h-full flex-col md:flex-row overflow-hidden">

        <div className="flex flex-col space-y-8 w-1/2 z-50 md:absolute mt-[8%]">

          <div className="text-7xl">
            Help us build the technology of tomorrow
          </div>

          <p className="text-xl">
            From sustainable building installations to smart infrastructure: <br />
            your expertise makes the difference. Together, we create <br />
            technical solutions that make an impact.
          </p>

          <div className="flex">
            <Btn/>
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

        {/* Working div  */}
      <div className="absolute bottom-10 left-10 text-3xl">
        <div className="flex flex-col gap-10">
          <div className="w-50 h-50 bg-white"></div>

          <div className="w-50 h-50 bg-white"></div>

          <div className="w-50 h-50 bg-white"></div>

          <div className="w-50 h-50 bg-white"></div>
          <div className="w-50 h-50 bg-white"></div>
        </div>
      </div>


    </div>
  );
}
