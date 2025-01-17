'use client'

import Image from "next/image";
import Link from "next/link";
import EventHome from "./EventsHome";
import HeroTextAnimation from "./HeroTextAnimation";

const MlsaTexts = ["Student", "Developer", "Leader", "Student"];

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 max-w-[1920px] mx-auto">
        <Image
          src="/heroLeft.png"
          alt="hero left gradient"
          width={700}
          height={700}
          className="z-1 absolute left-0 top-0 h-[60%] w-[80%] md:h-full md:w-[50%] max-w-[1920px] "
        />
        <div className="z-2 absolute right-0 top-0 h-[120vh] w-[50%] max-w-[1920px] lg:h-[150vh] lg:w-[40%]">
          <Image
            src="/heroRight.png"
            alt="hero right gradient"
            width={1000}
            height={800}
            className="h-full w-full"
          />
        </div>
        <Image
          src="/heroVector.png"
          alt="hero vector"
          width={1920}
          height={1080}
          className="h-[40%] top-[25%] lg:top-0 lg:h-full w-full absolute"
        />
      </div>
      <div className="relative mx-auto h-[75vh] md:h-[85vh] lg:h-screen w-screen  max-w-[1920px] overflow-x-hidden overflow-hidden">
        <div className="absolute left-0 right-0 top-0 z-30 flex justify-center">
          <EventHome
            Classname="z-30 mt-[100px]"
            eventName="Our upcoming event will be notified here"
            registrationClosed={true}
            display={true}
          />
        </div>
        <div className="z-29 absolute top-0 z-0 ml-6 md:ml-0 flex h-[90vh] w-screen max-w-[1920px] flex-col items-center justify-center text-2xl font-semibold text-white delay-100 duration-150 transition-all md:mt-8 md:h-screen md:text-4xl lg:mt-0 lg:leading-[40px] 2xl:leading-[6vh]">
          <div className="pl-[30px] flex">
            Microsoft Learn
            <HeroTextAnimation texts={MlsaTexts} />
          </div>
          <span className="mr-8 md:mr-0">Ambassadors</span>
          <span className="font-normal mr-8 md:mr-0">KIIT Chapter</span>
          <Link href="">
            <span>
              <button className="mr-8 md:mr-0 bg-gradient-blue rounded-full bg-gradient-to-r from-[#0070C5] to-[#3BABCF] px-4 py-1.7 text-sm text-white md:px-7 md:py-4 md:text-[22px] lg:mt-8 font-medium hover:bg-gradient-to-r hover:from-[#1e00c7] hover:to-[#52a8ff]">
                Join Us Now
              </button>

            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;

