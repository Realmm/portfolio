import { useEffect } from "react";
import Typewriter from "typewriter-effect";

const Name = () => {
  return (
    <>
      <div className="w-full h-max text-center font-semibold text-4xl md:text-5xl pt-32">
        <div className="leading-normal">
          <span>Hi, my name is</span>
          <br />
          <span>James Andrew</span>
        </div>
        <br />
        <div className="flex m-auto w-max text-lg sm:text-3xl">
          <Typewriter
            options={{
              strings: [
                "I am a Fullstack Developer",
                "I love working with Java/Kotlin",
                "I enjoy solving problems",
                "I create websites",
                "I create Minecraft plugins",
                "I am always creating something",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Name;
