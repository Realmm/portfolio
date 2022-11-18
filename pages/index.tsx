import type { NextPage } from "next";
import { useEffect, useState } from "react";
import "animate.css";
import Nav from "../components/Nav";
import Name from "../components/Name";
import AboutArrowButton from "../components/AboutArrowButton";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  const [state, setState] = useState<{
    open: boolean;
  }>({ open: false });

  useEffect(() => {}, [state]);

  return (
    <>
      <div className="bg-black w-full min-h-screen h-max text-white">
        <Nav
          onOpen={() => setState({ open: true })}
          onClose={() => setState({ open: false })}
        />
        <div className="h-screen grid bg-home-bg bg-no-repeat">
          <Name />
          <AboutArrowButton />
        </div>
        <div className={state.open ? "hidden" : ""}>
          <About />
          <Portfolio/>
          <Contact/>
        </div>
      </div>
    </>
  );
};

export default Home;
