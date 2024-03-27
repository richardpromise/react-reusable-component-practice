import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";

export default function Signin() {
  // page navigator
  const navigate = useNavigate();

  // animated error handlern
  const [erroblock, isErroBlock] = React.useState(false);
  const [erromsg, isErromsg] = React.useState("");

  const [persuade, isPersuade] = React.useState("text-purple-500 md:pl-4");

  const [emailError, isEmailError] = React.useState("");
  const [passswordError, isuserNamePassword] = React.useState("");

  // get form values
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  // Validatioh
  const validate = () => {
    let formDetails;
    if (localStorage.getItem("formDetails") === null) {
      formDetails = [];
      isErroBlock(true);

      // make sign up text red
      setTimeout(() => {
        isPersuade("text-red-500 ");
      }, 2000);

      // return sign up to original state
      setTimeout(() => {
        isPersuade("text-purple-500");
      }, 6000);

      // error message
      isErromsg("Sorry invalid account details.");
      setTimeout(() => {
        isErroBlock(false);
      }, 3000);
    } else {
      formDetails = JSON.parse(localStorage.getItem("formDetails"));
    }

    formDetails.forEach((item) => {
      if (item.userEmail !== email) {
        isEmailError("Email does not exist");
      } else {
        isEmailError("");
      }

      if (item.userPasEsword !== passsword) {
        isuserNamePassword("Wrong password");
      } else {
        isuserNamePassword("");
      }

      if (email === item.userEmail && passsword === item.userPasEsword) {
        handleNavigate();
      } else {
        isErromsg("Sorry invalid account details");
      }
    });
  };

  const handleNavigate = () => {
    return !btnDisabled ? navigate("/verified") : null;
  };

  useEffect(() => {
    setBtnDisabled(!(email !== "" && passsword !== ""));

    // if (email !== "" && passsword !== "") {
    //   setBtnDisabled(false);
    // } else {
    //   setBtnDisabled(true);
    // }
  }, [email, passsword]);

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
        <div className=" flex flex-col gap-3  justify-center  h-full w-full">
          {/* tittle */}
          <h1 className="text-gray-500 text-5xl font-bold">Log in</h1>

          <p className="pb-10">
            Dont have an account?
            <span>
              <Link to={"/auth/register"} className={` pl-2  ${persuade}`}>
                Create your account
              </Link>
            </span>
          </p>

          {/* form */}
          <form className="w-full  relative">
            {/* animated error message */}
            {erroblock && (
              <AnimatePresence>
                {" "}
                <motion.div
                  className="h-10 bg-white rounded-lg border-l-[8px] border-l-purple-500 px-7 absolute -top-20 -right-20 md:border-t-purple-500 md:border-t-8 flex justify-center items-center shadow-sm shadow-black  md:border-l-0"
                  initial={{ scale: 1, opacity: 0, x: 100, y: 0 }}
                  animate={{ scale: 1, opacity: 1, x: -100, y: 0 }}
                  transition={{
                    duration: 0.5,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: -100,
                    y: 20,
                  }}
                >
                  <h1 className="font-semibold text-gray-700 ">{erromsg}</h1>
                </motion.div>
              </AnimatePresence>
            )}

            <div className="flex flex-col items-center gap-10 w-full ">
              {/* email */}
              <Textfield
                labal={"Email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type={"email"}
                value={email}
                placeholder={"email@domain.com"}
                msg={emailError}
              />

              {/* password */}
              <Textfield
                labal={"Password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={"password"}
                value={passsword}
                placeholder={"Password"}
                msg={passswordError}
              />

              {/* extra */}
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
              <div className="w-full">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    validate();
                  }}
                  isBtnDisabled={btnDisabled}
                  type="submit"
                  variant="contained"
                  size="fullwidth"
                >
                  Log in
                </Button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
