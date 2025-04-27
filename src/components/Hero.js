import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[rgba(234,250,237,1)] justify-center items-center text-white px-4 text-center overflow-hidden font-sans">
      <div className="bg-[rgba(234,250,237,1)]">
        <div className="relative z-20 flex flex-col items-center container mx-auto px-4">
          <img
            src="/logo.jpeg"
            alt="logo"
            width="1400"
            height="600"
            className="w-56 sm:w-72 md:w-[26rem] lg:w-[32rem] xl:w-[36rem] 2xl:w-[40rem] h-auto mb-4"
          />

          <p className="text-md md:text-base xl:text-lg text-[rgba(28,94,85,255)] font-bold tracking-wide  mb-5 max-w-lg">
            Stay Focused, Stay Organized, and Make Every Day More Productive
            with Taskmate.
          </p>

          <Link to="/signup">
            <button className="bg-transparent border-2 mt-3 text-[rgba(28,94,85,255)] border-[rgba(28,94,85,255)]  font-semibold px-4 py-2 sm:px-5 md:px-6 rounded shadow-md hover:bg-[rgba(28,94,85,255)]  hover:text-[rgba(234,250,237,1)] hover:shadow-lg transition text-sm md:text-base">
              Ready to Organize? <b className="hover:underline">Sign Up!</b>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
