import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";

export default function ForgottenPassword() {
  const [email, setEmail] = useState("");
  const [btn, isbtn] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/auth/forgotten-password/${email}`);
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
        className="h-full w-full flex px-10 lg:px-20 2xl:px-40 items-center"
      >
        <div className="flex flex-col gap-6 justify-center  h-full  w-full">
          <h1 className="text-gray-500 md:text-5xl text-3xl font-bold ">
            Reset password
          </h1>

          {/* input */}
          <Textfield
            type={"email"}
            placeholder={"Emial@domian.com "}
            onChange={(e) => {
              setEmail(e.target.value);
              isbtn(false);
            }}
            labal={"Enter account email"}
          />

          <div className="flex justify-center w-full">
            <Button onClick={() => {}} isBtnDisabled={btn}>
              submit
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
