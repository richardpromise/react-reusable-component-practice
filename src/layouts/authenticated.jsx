import React from "react";
import { useNavigate } from "react-router-dom";

export default function Authenticated() {
  const navigate = useNavigate();
  const Submit = () => {
    navigate("/auth");
  };
  return (
    <div>
      <h1 className="font-bold text-4xl text-center">
        Still under construction watin youself dey find come here? oga go back
        to the login page and test all the clickable links and have peace before
        i flog u oraimo cord for the back of your neck
      </h1>
      <div className="flex justify-center w-full">
        <button
          onClick={Submit}
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-16 rounded-full text-2xl w-full"
        >
          Go to sign in page
        </button>
      </div>
    </div>
  );
}
