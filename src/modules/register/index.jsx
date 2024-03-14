import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Register = () => {
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
        className="h-full w-full flex md:px-20 px-10  items-center lg:px-20 2xl:px-40 relative"
      >
        <div className=" flex flex-col gap-3 justify-center   h-full  w-full">
          {/* tittle */}
          <h1 className="text-gray-500 text-5xl md:text-left font-bold ">
            Register
          </h1>
          <div className="flex justify-end items-end">
            <p className="pb-5 font-semibold text-gray-500">Join us now</p>
          </div>

          {/* form */}
          <form className="w-full ">
            <div className="flex flex-col items-center gap-5 w-full ">
              {/* Full name */}
              <div className=" w-full text-black">
                <label htmlFor="full-name" className="text-gray-500">
                  Full Name
                </label>
                <input
                  type="Text"
                  id="full-name"
                  className="border border-slate-400 shadow-md shadow-purple-500   p-3  block w-full rounded-lg text-black outline-none hover:shadow-black "
                  placeholder="Full Name"
                />
              </div>

              {/* email */}
              <div className=" w-full text-black">
                <label htmlFor="Email" className="text-gray-500">
                  Emial
                </label>
                <input
                  type="email"
                  id="Email"
                  className="border border-slate-400 shadow-md shadow-purple-500   p-3  text-black outline-none hover:shadow-black block w-full rounded-lg"
                  placeholder="user@domain.com"
                />
              </div>

              {/* password */}
              <div className=" w-full text-black">
                <label htmlFor="password" className="text-gray-500">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className=" border border-slate-400 shadow-md shadow-purple-500  p-3 text-black outline-none hover:shadow-black  block w-full rounded-lg"
                  placeholder="*********"
                />
              </div>
              {/* confirm password */}
              <div className=" w-full text-black">
                <label htmlFor="C-password" className="text-gray-500">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="C-password"
                  className=" border border-slate-400 shadow-md shadow-purple-500  p-3 text-black outline-none hover:shadow-black  block w-full rounded-lg"
                  placeholder="*********"
                />
              </div>

              {/* Remember me */}
              <div className="flex justify-start items-start  w-full">
                <p className="pb-5">
                  Already have an account?{" "}
                  <span>
                    <Link to={"/auth"} className="text-purple-500">
                      Login
                    </Link>
                  </span>
                </p>
              </div>

              {/* submit */}
              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-16 rounded-full text-2xl w-full tracking-wider"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Register;
