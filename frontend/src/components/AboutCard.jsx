import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import { Model1 } from "../models/Model1";
import { Model2 } from "../models/Model2";

const AboutCard = ({ item, theme, index }) => {
  return (
    <>
      <div
        className={`about-card custom-card cursor-pointer w-full overflow-hidden ${
          theme === "dark"
            ? "bg-[#141B22] text-white gradient-1"
            : "bg-[#ffffff] text-black"
        } justify-center items-center flex flex-col gap-6 relative `}
      >
        <div className="text-center text-[18px] text-[#8D8F93] justify-center flex items-center w-full h-[40vh]">
          {index === 0 && (
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <Environment preset="sunset" />
              <OrbitControls />
              <Model1 />
            </Canvas>
          )}
          {index === 1 && (
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <Environment preset="sunset" />
              <OrbitControls />
              <Model2 />
            </Canvas>
          )}
        </div>
        <div className="text-center text-[18px] border-t-[0.2px] border-[#ffffff50] w-full text-[#8D8F93] p-5 z-20">
          {item?.title}
        </div>
        <div className="glow-1 z-10 top-0 left-0"></div>
        <div className="glow-1 z-10 top-0 right-0"></div>
        <div className="glow-1 z-10 bottom-0 left-0"></div>
        <div className="glow-1 z-10 bottom-0 right-0"></div>
      </div>
    </>
  );
};

export default AboutCard;
