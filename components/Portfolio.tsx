import { Key, useEffect, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import "animate.css";
import grayBoy from "../public/assets/images/grayboy.png";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="pb-10">
        <div className="w-full md:w-max md:border-b-2 md:ml-16 pt-10 mb-6">
          <div className="w-full font-semibold text-4xl leading-relaxed flex justify-center">
            <span className="border-b-2 md:border-none">Portfolio</span>
          </div>
        </div>

        <Carousel
          elements={[
            <Project
              name="MetaCity"
              subName="Codebase for a Minecraft server"
              linkRef="https://github.com/Realmm/metacity"
              bgImg={grayBoy.src}
              alt="MetaCity"
              key={1}
            />,
            <Project
              name="RealmLib"
              subName="Library"
              linkRef="https://github.com/Realmm/RealmLib"
              bgImg={grayBoy.src}
              alt="RealmLib"
              key={2}
            />,
            <Project
              name="RealmCommons"
              subName="Library"
              linkRef="https://github.com/Realmm/RealmCommons"
              bgImg={grayBoy.src}
              alt="RealmCommons"
              key={3}
            />,
          ]}
          title="Minecraft"
        />
        {/* <Carousel
          elements={[
            <Project linkRef="" alt="" bgImg={"bg-red-200"} key={1} />,
            <Project linkRef="" alt="" bgImg={"bg-blue-200"} key={2} />,
            <Project linkRef="" alt="" bgImg={"bg-green-200"} key={3} />,
            <Project linkRef="" alt="" bgImg={"bg-orange-200"} key={4} />,
          ]}
          title="Websites"
        /> */}
      </div>
    </>
  );
};

type ProjectProps = {
  linkRef: string;
  bgImg: string;
  alt: string;
  name: string;
  subName: string;
};

const Project = (props: ProjectProps) => {
  return (
    <>
      <a
        href={props.linkRef}
        rel="noopener noreferrer"
        target="_blank"
        className={
          "w-full sm:w-full sm:h-96 md:h-40 lg:h-64 xl:h-96 rounded-2xl"
        }
      >
        <div className="bg-black w-full h-full rounded-xl">
          <div className="h-full m-auto">
            <div className="h-full flex px-4">
              <div className="hidden sm:block absolute w-32 sm:w-60 md:w-48 text-white sm:text-3xl md:text-base lg:text-lg font-bold z-10 p-4">
                <span className="">{props.name}</span>
                <br />
                <span className="text-sm sm:text-lg md:text-base font-normal">
                  {props.subName}
                </span>
              </div>
              <img
                className="w-full rounded-xl opacity-60 hover:opacity-100 focus:opacity-100 object-cover"
                alt={props.alt}
                src={props.bgImg}
              ></img>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

type CarouselProps = {
  title: string;
  elements: JSX.Element[];
};

const Carousel = (props: CarouselProps) => {
  const [state, setState] = useState<{
    elements: JSX.Element[];
  }>({ elements: props.elements });

  const firstThreeElements = () => {
    const mapped = [];
    if (state.elements.length >= 1) mapped.push(state.elements[0]);
    if (state.elements.length >= 2) mapped.push(state.elements[1]);
    if (state.elements.length >= 3) mapped.push(state.elements[2]);
    return mapped;
  };

  const firstElement = () => {
    const mapped = [];
    if (state.elements.length >= 1) mapped.push(state.elements[0]);
    return mapped;
  };

  useEffect(() => {}, [state.elements]);

  type ScrollProps = {
    left: boolean;
  };

  const shift = (left: boolean) => {
    const mapped: JSX.Element[] = [];
    const allElements = state.elements;
    const end: JSX.Element | undefined = left
      ? allElements.shift()
      : allElements.pop();
    if (end === undefined) throw Error("Unable to find element");
    if (!left) mapped.push(end);
    allElements.forEach((e) => {
      mapped.push(e);
    });
    if (left) mapped.push(end);
    setState({
      elements: mapped,
    });
  };

  const Scroll = (props: ScrollProps) => {
    return (
      <div className={"m-auto hover:cursor-pointer"}>
        {props.left ? (
          <BsFillCaretLeftFill size={56} onClick={() => shift(true)} />
        ) : (
          <BsFillCaretRightFill size={56} onClick={() => shift(false)} />
        )}
      </div>
    );
  };

  const Title = () => {
    return (
      <div className="w-4/5 mx-auto mt-20 mb-8 font-semibold text-2xl">
        <span className="border-b-2 leading-relaxed">{props.title}</span>
      </div>
    );
  };

  return (
    <>
      <Title />
      <div className="w-4/5 sm:w-11/12 m-auto flex">
        <Scroll left={true} />
        <div className="w-4/5 flex md:hidden">
          {firstElement()}
        </div>
        <div className="w-4/5 hidden md:flex">{firstThreeElements()}</div>
        <Scroll left={false} />
      </div>
    </>
  );
};

export default Portfolio;
