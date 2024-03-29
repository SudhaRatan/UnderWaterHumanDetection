import React, { useEffect, useState } from "react";
import Img2 from "/images/1_1.png";
import Img3 from "/images/2_1.png";
import Img1 from "/images/3_1.png";
import { Link } from "react-router-dom";

function Landing() {
  const images = [Img1, Img2, Img3];
  const totalImages = images.length - 1;

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (selectedIndex === totalImages) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    }, 4000);
  }, [selectedIndex]);

  return (
    <div className="text-white flex md:flex-row pt-[90px] md:pt-0 flex-col md:px-[150px] px-[30px] gap-5 md:gap-0 h-[100vh]">
      <div className="md:flex-[3] flex flex-col">
        <div className="md:flex-1"></div>
        <div className="flex-col flex gap-5 items-start">
          <h1 className="md:text-6xl text-4xl">Under water object detection</h1>
          <div className="text-xl">An ML project by Ratan</div>
          <Link
            to={"model"}
            className="bg-[#efefef] text-[#212223] py-2 px-10 text-[18px] hover:text-[#efefef] hover:bg-[#212223] border-2 border-[#efefef] hover:rounded-xl hover:shadow-xl hover:shadow-[#80808040]"
          >
            Try now
          </Link>
        </div>
        <div className="md:flex-1"></div>
      </div>
      <div className="md:flex-[2] flex-1 h-full md:h-[100vh] md:overflow-y-hidden relative"  style={{animation:"fadeIn 3s"}}>
        {images.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              className={`absolute object-cover bg-cover w-[100vw] md:w-[100%] h-[100%] md:h-[100vh] ${
                selectedIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
      </div>
      <div className="flex md:flex-col md:h-[100vh] z-10 md:justify-center justify-end">
        <div className="flex md:flex-col gap-5 md:ml-[15px] mb-5 md:mb-0">
          {images.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-[6px] h-[6px] outline outline-2 cursor-pointer ${
                  selectedIndex === index
                    ? "outline-offset-[4px]"
                    : "outline-offset-[-4px]"
                }  outline-gray-400 bg-gray-400 rounded-full`}
                onClick={() => setSelectedIndex(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
