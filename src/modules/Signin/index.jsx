import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Signin() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
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
        <div className=" flex flex-col gap-3  justify-center  h-full  w-full">
          {/* tittle */}
          <h1 className="text-gray-500 text-5xl font-bold">Log in</h1>

          <p className="pb-10">
            Dont have an account?{" "}
            <span>
              <Link to={"/auth/register"} className="text-purple-500">
                Create your account
              </Link>
            </span>
          </p>

          {/* form */}
          <form className="w-full ">
            <div className="flex flex-col items-center gap-10 w-full ">
              {/* username */}
              <div className=" w-full">
                <label htmlFor="emial" className="text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-slate-400 shadow-md shadow-purple-500  p-4 rounded-xl block w-full outline-none hover:shadow-black   "
                  placeholder="useremail@domian.com"
                />
              </div>

              {/* email */}
              <div className=" w-full">
                <label htmlFor="password" className="text-gray-500">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-slate-400 shadow-md shadow-purple-500  p-4 rounded-xl block w-full outline-none hover:shadow-black"
                  placeholder="*********"
                />
              </div>

              {/* password */}
              <div className="flex justify-between items-center w-full">
                <div>
                  <input type="checkbox" className="text-purple-900 mr-2" />{" "}
                  <span className="text-grey-500">Remember me</span>
                </div>
                <Link
                  to={"/auth/forgotten-password"}
                  className="text-purple-500"
                >
                  Forgot password?
                </Link>
              </div>

              {/* submit */}
              <div className="flex justify-center w-full">
                <button
                  onClick={handleNavigate}
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-16 rounded-full text-2xl w-full"
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
