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
            <Project linkRef="" color={"bg-red-200"} key={1} />,
            <Project linkRef="" color={"bg-blue-200"} key={2} />,
            <Project linkRef="" color={"bg-green-200"} key={3} />,
          ]}
          title="Minecraft"
        />
        <Carousel
          elements={[
            <Project linkRef="" color={"bg-red-200"} key={1} />,
            <Project linkRef="" color={"bg-blue-200"} key={2} />,
            <Project linkRef="" color={"bg-green-200"} key={3} />,
            <Project linkRef="" color={"bg-orange-200"} key={4} />,
          ]}
          title="Websites"
        />
      </div>
    </>
  );
};

type ProjectProps = {
  color: string;
  linkRef: string;
  // imgRef: string;
};

const Project = (props: ProjectProps) => {
  return (
    <>
      <a
        href={props.linkRef}
        rel="noopener noreferrer"
        target="_blank"
        className={
          "w-full h-24 sm:h-32 md:h-48 lg:h-64 xl:h-96 rounded-2xl m-4 " +
          props.color
        }
      ></a>
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
      <div className="w-11/12 m-auto flex">
        <Scroll left={true} />
        <div className="w-4/5 flex">{firstThreeElements()}</div>
        <Scroll left={false} />
      </div>
    </>
  );
};

export default Portfolio;
