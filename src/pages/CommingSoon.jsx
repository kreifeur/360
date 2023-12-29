import React from "react";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";

const CommingSoon = () => {
  return (
    <div className="h-screen  w-full text-white bg-black">
      <Navbar />
      <div className="w-full h-[85vh] flex items-center md:px-[20vh] px-4">
        <div className="md:w-[35%] w-[100%] flex flex-col gap-5 md:gap-4">
          <div className="font-bold text-3xl">All in one, find all the world wide in one place</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            possimus culpa iste accusantium asperiores quidem sunt tenetur
            earum, labore ex sint quas necessitatibus officia, natus expedita,
          </div>

          <div className="w-[300px] h-[50px] bg-white rounded-full flex items-center p-2 justify-between">
            <div className="text-center w-[250px] text-black">
                Notify me
            </div>
            <div className="w-[40px]  h-[40px] bg-black rounded-full flex items-center justify-center text-white font-thin text-xs">
            <FaArrowRight />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
