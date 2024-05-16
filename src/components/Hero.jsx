import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import Lottie from "lottie-react";
import Animation from "../assets/animation.json";


const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[90px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-row items-start gap-5">
          <div className="relative bg-transparent p-6 rounded-lg">
            <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#0000a4]">Ady</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white`}>
                Studying Commerce & Computer Science  <br className='sm:block hidden' />
                at UNSW with a knack for 
                <a className="ml-2 underline underline-offset-4 decoration-white text-[#0000a4]"> 
                  <TypeAnimation
                    sequence={[
                      'Programming',
                      1500,
                      'Design',
                      1500,
                      'Marketing',
                      1500,
                      'Cyber Security',
                      1500
                    ]}
                    wrapper="span"
                    speed={25}
                    repeat={Infinity}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="list-none hidden sm:flex flex-row gap-10 flex flex-1 justify-end items-center absolute -top-40 right-10 mb-7">
          <Lottie animationData={Animation} />
        </div>
      </div>
      
      
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;