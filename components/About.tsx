import { useEffect, useState } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import grayBoy from "../public/assets/images/grayboy.png";
import "animate.css";

const About = () => {
  return (
    <>
      <div id="about" className="h-max md:flex">
        <ProfilePicture />
        <Description />
      </div>
    </>
  );
};

const ProfilePicture = () => {
  return (
    <div className="p-10 w-full md:w-1/2 h-max flex justify-items-center">
      <img className="rounded-full w-full m-auto" src={grayBoy.src} alt="Me" />
    </div>
  );
};

const Description = () => {
  type ExpandableButtonProps = {
    element: JSX.Element;
    title: string;
  };

  const ExpandableButton = (props: ExpandableButtonProps) => {
    const [state, setState] = useState<{
      open: boolean;
    }>({ open: false });

    useEffect(() => {}, [state]);

    return (
      <>
        <div
          className={
            (state.open ? "h-max " : "h-12 ") +
            "hover:cursor-pointer p-2 bg-blue-600 mt-6 rounded-xl justify-self-start"
          }
          onClick={() => setState({ open: !state.open })}
        >
          <div className="text-center text-md font-semibold flex justify-between">
            <span className="pl-2 mt-auto">{props.title}</span>
            <AiOutlineDownCircle size={28} />
          </div>
          <div className={(state.open ? "" : "hidden ") + "px-2 py-4"}>
            <span>{props.element}</span>
          </div>
        </div>
      </>
    );
  };

  const MinecraftDesc = () => {
    return (
      <>
        <span>
          I began my development journey creating Minecraft plugins, I
          thoroughly enjoy modifying Minecraft and pushing the game to its
          limits. I have been modifying Minecraft for 6+ years, utilising
          Java/Kotlin, Maven/Gradle, MySQL, MongoDB, Redis, Kubernetes, Docker,
          as well as NMS.
        </span>
        <br />
        <br />
        <span>
          I spent my first 3-4 years of my development life freelancing,
          creating Minecraft plugins for many clients, and with varying
          different types of features.
        </span>
        <br />
        <br />
        <span>
          I have worked creating content for PrestonPlayz and BriannaPlayz on
          YouTube, with some of the videos I have helped create being trending
          on YouTube with millions of views.
        </span>
        <br />
        <br />
        <span>
          I have also worked creating minigames for Twitch Rivals for close to a
          year, wherein 80 popular streamers, with thousands of viewers, would
          compete in $50,000+ tournaments.
        </span>
        <br />
        <br />
        <span>
          I have also worked with many medium-large Minecraft networks as well,
          like VeltPvP, MineMetro, Firestreak, and Minehut
        </span>
      </>
    );
  };

  const FrontendDesc = () => {
    return (
      <>
        <span>
          I touched on creating sites many times throughout my 6 years of
          developing, however I have never worked creating sites in a
          professional capacity.
        </span>
        <br />
        <br />
        <span>
          To do this I use technologies such as React, Typescript, Next.js,
          TailwindCSS. I am predominantly a front-end developer, however I
          prefer backend development. I have used Spring and Spring Boot in the
          past to create simple REST API’s, however most often I utilise Next.js
          built in api routes to accomodate my backend needs.
        </span>
        <br />
        <br />
        <span>
          I have 1 year of experience with React, Typescript, TailwindCSS
          and Next.js
        </span>
      </>
    );
  };

  return (
    <>
      <div className="leading-relaxed w-full md:w-1/2 text-sm md:p-16 p-8">
        <span className="font-semibold">
          I am a 23yr old, New Zealand based, front-end software engineer
        </span>
        <ExpandableButton
          title="Java/Minecraft experience"
          element={<MinecraftDesc />}
        />
        <ExpandableButton
          title="Front-end experience"
          element={<FrontendDesc />}
        />
      </div>
    </>
  );
};

export default About;
