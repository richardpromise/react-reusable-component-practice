import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";

export default function Signin() {
  const navigate = useNavigate();

  const [emailError, isEmailError] = React.useState("");
  const [passswordError, isuserNamePassword] = React.useState("");

  // get form values
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const validate = () => {
    let formDetails;
    if (localStorage.getItem("formDetails") === null) {
      formDetails = [];
    } else {
      formDetails = JSON.parse(localStorage.getItem("formDetails"));
    }

    formDetails.forEach((item) => {
      if (email !== item.userEmail) {
        isEmailError("Email does not exist");
      } else {
        isEmailError("");
      }

      if (passsword !== item.userPasEsword) {
        isuserNamePassword("Wrong password");
      } else {
        isuserNamePassword("");
      }

      if (email === item.userEmail && passsword === item.userPasEsword) {
        handleNavigate();
      }
    });
  };

  const handleNavigate = () => {
    return !btnDisabled ? navigate("/learn") : null;
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
