/* eslint-disable no-useless-escape */
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import React, { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();

  // get input fields
  const [firstname, updateFirstname] = React.useState("");
  const [lastname, isLastname] = React.useState("");
  const [email, updateEmail] = React.useState("");
  const [password, updatePassword] = React.useState("");

  // show error message
  const [FullnameError, isfullnameError] = React.useState("");
  const [emailError, isEmailError] = React.useState("");
  const [passswordError, isuserNamePassword] = React.useState("");

  // button handler
  const [btnDisabled, btnEnabled] = React.useState(true);

  // Form validation
  const validate = () => {
    const userInfo = {
      userFullName: "",
      userEmail: "",
      userPasEsword: "",
    };

    // Firstname  Validation
    if (firstname.length < 2) {
      isfullnameError("Must be atleast 5 characters ");
      userInfo.userFullName = "";
    } else {
      isfullnameError("");
      userInfo.userFullName = `${firstname} ${lastname}`;
    }

    // Email regex
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Email validation
    if (!regEmail.test(email)) {
      isEmailError("Email must be valid");
    } else {
      isEmailError("");
      userInfo.userEmail = email;
    }

    // Password validation
    if (password.length < 6) {
      isuserNamePassword("Password must be atleast 6 characters");
      userInfo.userPasEsword = "";
    } else {
      userInfo.userPasEsword = password;
      isuserNamePassword("");
    }

    // Save to localstorage
    let formDetails;
    if (localStorage.getItem("formDetails") === null) {
      formDetails = [];
    } else {
      formDetails = JSON.parse(localStorage.getItem("formDetails"));
    }

    if (
      userInfo.userEmail !== "" &&
      userInfo.userPasEsword !== "" &&
      userInfo.userFullName !== ""
    ) {
      formDetails.push(userInfo);
      localStorage.setItem("formDetails", JSON.stringify(formDetails));
      navigate("/auth");
    }
  };

  // monitor input
  useEffect(() => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      password !== ""
    ) {
      btnEnabled(false);
    } else {
      btnEnabled(true);
    }
  }, [firstname, lastname, email, password]);

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
          <form className="w-full relative ">
            <div className="flex flex-col items-center gap-5 w-full ">
              {/* first name */}
              <Textfield
                type={"text"}
                labal={"First name"}
                placeholder={"First name"}
                value={firstname}
                onChange={(e) => {
                  updateFirstname(e.target.value);
                }}
                msg={FullnameError}
              />

              {/* Last name */}
              <Textfield
                type={"text"}
                labal={"last name"}
                placeholder={"lastname"}
                value={lastname}
                onChange={(e) => {
                  isLastname(e.target.value);
                }}
              />

              {/* email */}
              <Textfield
                type={"email"}
                labal={"Email"}
                placeholder={"user@domain.com"}
                value={email}
                onChange={(e) => {
                  updateEmail(e.target.value);
                }}
                msg={emailError}
              />

              {/* password */}
              <Textfield
                type={"password"}
                labal={"Password"}
                placeholder={"*****"}
                value={password}
                onChange={(e) => {
                  updatePassword(e.target.value);
                }}
                msg={passswordError}
              />

              {/* Already have an account? */}
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
                <Button
                  onClick={(e) => {
                    validate();
                    e.preventDefault();
                  }}
                  isBtnDisabled={btnDisabled}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Register;
