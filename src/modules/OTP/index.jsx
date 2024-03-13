import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function OTP() {
  const params = useParams();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/auth/forgotten-password/resetPassword");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0, x: -100, y: -20 }}
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
        className="h-full w-full flex px-10  items-center lg:px-20 2xl:px-40"
      >
        <div className="flex flex-col gap-6 justify-center  h-full  w-full">
          <h1 className="text-gray-500 md:text-5xl text-3xl font-bold text-center ">
            Reset password
          </h1>
          <div className=" w-full">
            <p className="text-gray-500 pb-4 text-center">
              Kindly enter the O.T.P sent to {params.email}{" "}
            </p>
            <div className=" w-full flex justify-center gap-10">
              <input
                type="email"
                id="email"
                className="border border-slate-400 shadow-md shadow-purple-500 opacity-40 p-4  w-10 outline-none hover:shadow-black   "
              />
              <input
                type="email"
                id="email"
                className="border border-slate-400 shadow-md shadow-purple-500 opacity-40 p-4  w-10 outline-none hover:shadow-black   "
              />
              <input
                type="email"
                id="email"
                className="border border-slate-400 shadow-md shadow-purple-500 opacity-40 p-4  w-10 outline-none hover:shadow-black   "
              />
              <input
                type="email"
                id="email"
                className="border border-slate-400 shadow-md shadow-purple-500 opacity-40 p-4  w-10 outline-none hover:shadow-black   "
              />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <button
              onClick={handleNavigate}
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-16 rounded-full text-2xl w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
