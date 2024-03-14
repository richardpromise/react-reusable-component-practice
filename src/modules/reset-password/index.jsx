// @flow
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const ResetPassword = () => {
  const navigate = useNavigate();

  const Submit = () => {
    navigate("/auth");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 1, opacity: 0, x: -100, y: 0 }}
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
        className="h-full w-full flex px-10  items-center lg:px-20 2xl:px-40 "
      >
        <div className="flex flex-col gap-6 justify-center  h-full  w-full">
          <h1 className="text-gray-500 md:text-5xl text-3xl font-bold">
            Set new password
          </h1>
          <div className=" w-full">
            <label htmlFor="password" className="text-gray-500">
              New password
            </label>
            <input
              type="password"
              id="password"
              className="border border-slate-400 shadow-md shadow-purple-500  p-4 rounded-xl block w-full outline-none hover:shadow-black"
              placeholder="*********"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="C-password" className="text-gray-500">
              Confirm Password
            </label>
            <input
              type="password"
              id="C-password"
              className="border border-slate-400 shadow-md shadow-purple-500  p-4 rounded-xl block w-full outline-none hover:shadow-black"
              placeholder="*********"
            />
          </div>

          <div className="flex justify-center w-full">
            <button
              onClick={Submit}
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
};
