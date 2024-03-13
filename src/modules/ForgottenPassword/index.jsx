import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ForgottenPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/auth/forgotten-password/${email}`);
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
        className="h-full w-full flex px-10 lg:px-20 2xl:px-40 items-center"
      >
        <div className="flex flex-col gap-6 justify-center  h-full  w-full">
          <h1 className="text-gray-500 md:text-5xl text-3xl font-bold ">
            Reset password
          </h1>
          <div className=" w-full">
            <div className=" w-full">
              <label htmlFor="emial" className="text-gray-500">
                Enter account email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="border border-slate-400 shadow-md shadow-purple-500  p-4 rounded-xl block w-full outline-none hover:shadow-black   "
                placeholder="useremail@domian.com"
              />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <button
              onClick={handleSubmit}
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