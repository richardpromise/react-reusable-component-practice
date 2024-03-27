import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import image from "../assets/imgs/Image 1.svg";
import star from "../assets/imgs/sata gra (2).svg";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      {/* construction begins */}
      <div className="flex justify-center items-center  flex-col  bg-slate-50 ">
        {/* header */}
        <div className=" lg:container  p-5 ">
          <AnimatePresence>
            <motion.div
              initial={{ scale: 1, opacity: 0, x: 0, y: -100 }}
              animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                x: 100,
                y: -20,
              }}
              className="flex flex-col gap-7 items-center md:gap-0 md:px-10 2xl:p-5 md:flex md:flex-row md:items-center md:justify-between"
            >
              {/* header and log */}

              <div className="flex items-center pt-5 md:p-0  gap-3">
                <div className="h-10 w-10 bg-purple-500 rotate-12"></div>
                <div>
                  <h1 className="text-gray-400 font-bold text-4xl md:text-4xl">
                    Project Hub
                  </h1>
                </div>
              </div>
              {/* links */}
              <div className="flex gap-5 p-4 ">
                <div>
                  <Link to={"/auth/register"}>
                    <Button variant="contained" touches={"px-4  duration-300 "}>
                      Register
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to={"/auth"}>
                    <Button
                      variant="outlined"
                      touches={
                        "px-4 hover:bg-purple-500 duration-300 hover:text-white "
                      }
                    >
                      Log in
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="h2 border-2"></div>
          {/* hero */}
          <div className=" p-5 md:px-10 2xl:p-5 pb-4 ">
            <div className="flex flex-col gap-3 items-center md:flex md:flex-row lg:items-center lg:justify-center 2xl:gap-10 md:pt-3 relative">
              <img src={star} alt="" className="absolute top-24 -left-10" />
              {/* first content */}
              <AnimatePresence>
                <motion.div
                  initial={{ scale: 1, opacity: 0, x: -100, y: 0 }}
                  animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 1.5,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 100,
                    y: -20,
                  }}
                  className="md:w-[45%] pt-5 md:pt-0 z-20"
                >
                  <h1 className="text-4xl pb-3 text-center text-gray-800 font-bold capitalize md:text-left md:pb-6 lg:text-5xl 2xl:text-7xl">
                    Upload your projects safe and easy
                  </h1>
                  <p className=" text-gray-800 text-lg md:font-light  text-center md:text-xl md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, dolorem molestias praesentium reiciendis est
                    asperiores accusamus enim doloremque! Ex commodi vero harum
                    mollitia architecto laboriosam perspiciatis odit ut ipsa
                    numquam!
                  </p>
                  <div className=" py-5 md:pt-10 text-center md:text-left ">
                    <Link to={"/auth/register"}>
                      <Button
                        variant="contained"
                        size="medium"
                        touches={"px-4  duration-300 "}
                      >
                        Get started
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* second content */}

              <div className=" flex justify-center items-center w-[50%] ">
                <AnimatePresence>
                  <motion.div
                    initial={{ scale: 1, opacity: 0, x: 100, y: 0 }}
                    animate={{ scale: 1, opacity: 1, x: -100, y: 0 }}
                    transition={{
                      duration: 2,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      x: -100,
                      y: 20,
                    }}
                    className="absolute top-10 left-6 w-[130%]  md:relative  md:block md:top-0 md:left-16 md:w-auto  "
                  >
                    <img
                      src={image}
                      alt=""
                      className=" md:w-[110%] opacity-30"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        {/* <AnimatePresence>
          <motion.footer
            initial={{ scale: 1, opacity: 0, x: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              x: 100,
              y: -20,
            }}
            className="w-full border-red-500 border  md:pt-10"
          >
            <div className="h-10 bg-cyan-700 opacity-55 flex items-center justify-center">
              <h1 className="z-20"> All Right Resevered 2024</h1>
            </div>
          </motion.footer>
        </AnimatePresence> */}
      </div>
      {/* footer */}
    </>
  );
}
