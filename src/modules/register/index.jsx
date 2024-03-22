import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import React, { useEffect } from "react";

const Register = () => {
  // get input fields
  const [fullname, updateFullname] = React.useState("");
  const [email, updateEmail] = React.useState("");
  const [password, updatePassword] = React.useState("");
  const [confirmPassword, updateConfirmPassword] = React.useState("");

  // show error message
  const [FullnameError, isfullnameError] = React.useState("");
  const [emailError, isEmailError] = React.useState("");
  const [passswordError, isuserNamePassword] = React.useState("");
  const [confirmPasswordError, isConfirmPasswordError] = React.useState("");

  // button handler
  const [btnDisabled, btnEnabled] = React.useState(true);

  // red border handler

  // save to local storage
  const saveToLocalstorage = () => {
    let formDetails;
    if (localStorage.getItem("formDetails") === null) {
      formDetails = [];
    } else {
      formDetails = JSON.parse(localStorage.getItem("formDetails"));
    }
    const userInfo = {
      userFullName: fullname,
      userEmail: email,
      userPasEsword: password,
    };
    formDetails.push(userInfo);
    localStorage.setItem("formDetails", JSON.stringify(formDetails));
  };

  const validate = () => {
    // fullname
    if (fullname.length < 4) {
      btnEnabled(true);
      isfullnameError("Must be atleast 5 characters ");
    } else {
      btnEnabled(false);
      isfullnameError("");
    }

    // email
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      isEmailError("Invalid email address");

      btnEnabled(true);
    } else {
      isEmailError("");
      btnEnabled(false);
    }

    // password

    const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;

    if (
      !isNonWhiteSpace.test(password) ||
      !isContainsLowercase.test(password) ||
      !isContainsUppercase.test(password) ||
      !isContainsNumber.test(password)
    ) {
      btnEnabled(true);
      isuserNamePassword(
        " 8 characters  uppercase ,Lowercase and at least one Digit. "
      );
    } else {
      isuserNamePassword("");
      btnEnabled(false);
    }

    // confirm password

    if (confirmPassword !== password) {
      btnEnabled(true);
      isConfirmPasswordError("Password dont Match");
    } else {
      isConfirmPasswordError("");
      btnEnabled(false);
    }
  };

  useEffect(() => {
    if (
      fullname !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      btnEnabled(false);
    } else {
      btnEnabled(true);
    }
  }, [fullname, email, password, confirmPassword]);

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
              <Textfield
                type={"text"}
                labal={"Full name"}
                placeholder={"fullname"}
                value={fullname}
                onChange={(e) => {
                  updateFullname(e.target.value);
                }}
                msg={FullnameError}
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
              {/* confirm password */}
              <Textfield
                type={"password"}
                labal={"Confirm Password"}
                placeholder={"*****"}
                value={confirmPassword}
                onChange={(e) => {
                  updateConfirmPassword(e.target.value);
                }}
                msg={confirmPasswordError}
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
                    e.preventDefault();
                    validate();
                    saveToLocalstorage();
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
