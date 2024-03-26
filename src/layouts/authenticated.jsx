import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";

export default function Authenticated() {
  const navigate = useNavigate();
  const Submit = () => {
    navigate("/auth");
  };
  return (
    <>
      {/* construction begins */}
      <div className="flex justify-center items-center">
        {/* header */}
        <div className="container p-5">
          <div className="flex flex-col gap-3 items-center  lg:flex lg:flex-row lg:items-center lg:justify-between ">
            {/* header and log */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-purple-500 rotate-12"></div>
              <div>
                <h1 className="text-gray-400 font-bold text-5xl">
                  Project Block
                </h1>
              </div>
            </div>
            {/* links */}
            <div className="flex gap-5 p-4 ">
              <div>
                <Link to={"/auth/register"}>
                  <Button variant="contained" touches={"px-4  duration-300 "}>
                    Register
                  </Button>
                </Link>
              </div>
              <div>
                <Link to={"/auth"}>
                  <Button
                    variant="outlined"
                    touches={
                      "px-4 hover:bg-purple-500 duration-300 hover:text-white "
                    }
                  >
                    Log in
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="h2 border-2"></div>
          {/* hero */}
          <div className=" h-screen p-5">
            <div className="flex flex-col gap-3 items-center  lg:flex lg:flex-row lg:items-center lg:justify-between ">
              {/* first content */}
              <div>
                <h1 className="text-3xl text-center text-gray-800 font-bold capitalize md:text-left">
                  Best place to upload your projects!
                </h1>
                <p className="md:text-left  text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, dolorem molestias praesentium reiciendis est
                  asperiores accusamus enim doloremque! Ex commodi vero harum
                  mollitia architecto laboriosam perspiciatis odit ut ipsa
                  numquam!
                </p>
              </div>
              {/* second content */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
