"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";


const JoinUs: React.FC = () => {
  const textControls = useAnimation();
  const sliderControls = useAnimation();
  const handleSliderAnimationComplete = () => {
    textControls.start({ opacity: 1, x: 30, y: 0 }); //determines final  positionn of text after completion of animation
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      sliderControls.start({ opacity: 1, x: 200 });
    }, 0);

    return () => clearTimeout(timer);
  });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; //determines how much the user has scrolled
      const windowHeight = window.innerHeight; //determines the height of the  device the user is using

      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > windowHeight / .9) {
          const element = document.getElementById("myElement"); // gets the circle on top of the slider

          if (element) {
            setTimeout(() => {
              element.classList.add("shadow-magenta"); // Glow adder for slider
            }, 2500); // adds delay to the glow so that the glow starts after animation is complete
          }
        } else {
          const element = document.getElementById("myElement"); // gets the circle on top of the slider

          if (element) {
            element.classList.remove("shadow-magenta"); // Glow remover for slider
          }
        }
      });

      if (scrollPosition > windowHeight / .8) {
        controls.start({ opacity: 1, y: 0, x: 0 }); //Final position for slider
      } else {
        controls.start({ opacity: 0, y: 1300, x: 0 }); //Initial starting positionn for slider
      }
    };
    console.log("scroll", window.scrollY);
    console.log("inner", window.innerHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <>


      <div className="min-h-[100px] pb-20 relative z-0 flex flex-row max-w-[1920px] justify-center items-center mx-auto">


        <div className="mx-auto flex -translate-y-[60vh] md:-translate-y-[30vh] sm:ml-[80px]">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 1000 }} //before scrolling position of slider
            animate={controls} //refer to line 20
            transition={{ duration: 1 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
            onAnimationComplete={handleSliderAnimationComplete}
          >
            <div className="flex flex-col items-center">
              <div
                className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#3BABCF] bg-gradient-to-b from-[#3B61CF]  to-[#fff]/30 shadow-dotShadowBlue duration-700 transition 
              "
              >
                <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
              </div>


              <div className="h-[350px] sm:h-[500px] w-[5px]  bg-gradient-to-b from-[#3BABCF] to-transparent duration-700 transition ">

                <Image src='/joinus.svg' alt="vector" height={80} width={50} className="absolute h-[30%] w-[8%] sm:w-[5%] sm:h-[40%] top-[23%]" />
              </div>


            </div>
          </motion.div>

          <div className="  w-[85vw] ">


            <div className="flex  justify-between w-full items-center  pl-[11px] sm:pl-[9px] md:pl-[16px] 2xl:pl-[57px]">

              <motion.div

                // className="flex justify-between flex-nowrap"
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 1.2 }}
                onAnimationComplete={handleSliderAnimationComplete}
              >
                <div className="mt-6 flex  font-bold  md:mr-10 justify-between items-center ">
                  <div className=" ">
                    <div className="pl-6 sm:pl-[40px] md:pl-[60px] lg:pl-[80px] pt-[70px] text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold">
                      <h1 className="bg-gradient-to-r  from-[#0070C5] to-[#3BABCF] text-transparent bg-clip-text">Join</h1>
                      <div className="duration-50 my-2  h-[4px] w-[140%] bg-gradient-to-r from-[#456FDC] to-transparent  sm:my-3 "></div>

                      <h1>
                        Micrsoft Learn <span className=" bg-gradient-to-r  from-[#0070C5] to-[#3BABCF] text-transparent bg-clip-text">Student</span>
                      </h1>
                      <h1>Amabasder</h1>
                      <h1 className="font-normal">KIIT Chapter</h1>
                    </div>
                    <Link href="#" className="">
                      <button className="text-xs md:text-sm lg:text-md my-[15px]  ml-5 sm:ml-[42px] md:ml-[62px] lg:ml-[82px]  flex items-center justify-center whitespace-nowrap rounded-[100px]  bg-gradient-to-r font-normal from-[#0070C5] to-[#3BABCF] px-4 py-[7px]  text-white ">
                        Contact Us
                      </button>
                    </Link>
                  </div>

                </div>
              </motion.div>
              <motion.div
                className="flex w-[40%] justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                transition={{ duration: 1.4 }}
                onAnimationComplete={handleSliderAnimationComplete}

              >


                <Image width={400} height={300} src="/mlsaLogo.png" alt="rectangle " className="w-full h-[100%] pt-16 pr-6" />

              </motion.div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;