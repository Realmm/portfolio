import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";

export type NavProps = {
  onOpen: () => void;
  onClose: () => void;
};

const Nav = (props: NavProps) => {
  const [state, setState] = useState<{
    open: boolean;
    openedOnce: boolean;
    scrollingUp: boolean;
    lastScroll: number;
  }>({ open: false, openedOnce: false, scrollingUp: false, lastScroll: 0 });

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll - state.lastScroll <= 0) {
        setState({
          ...state,
          scrollingUp: true,
          lastScroll: currentScroll
        });
      } else {
        setState({
          ...state,
          scrollingUp: false,
          lastScroll: currentScroll
        });
      }
    };
    window.addEventListener("scroll", onScroll);
    if (state.open) {
      props.onOpen();
    } else props.onClose();
    return () => window.removeEventListener("scroll", onScroll);
  }, [state]);

  type NavItemProps = {
    content: string;
    link: string;
  };

  const NavItem = (props: NavItemProps) => {
    return (
      <>
        <a className="font-semibold text-white" href={props.link}>
          {props.content}
        </a>
      </>
    );
  };

  const Links = () => {
    return (
      <div className="space-x-10 p-4">
        <NavItem content="About" link="#about" />
        <NavItem content="Portfolio" link="#portfolio" />
        <NavItem content="Contact" link="#contact" />
      </div>
    );
  };

  const OpenMenuButton = () => {
    return (
      <div
        className="hover:cursor-pointer"
        onClick={() => setState({ ...state, open: !state.open, openedOnce: true })}
      >
        <BiMenuAltLeft
          className={state.open ? "hidden" : ""}
          color="white"
          size={56}
        />
      </div>
    );
  };

  const CloseMenuButton = () => {
    return (
      <div
        className="hover:cursor-pointer"
        onClick={() => setState({ ...state, open: !state.open, openedOnce: true })}
      >
        <AiFillCloseCircle size={42} />
      </div>
    );
  };

  const Overlay = () => {
    type LinkProps = {
      href: string;
      content: string;
    };

    const Link = (props: LinkProps) => {
      return (
        <>
          <div
            className="w-full h-full m-auto hover:bg-blue-700 hover:duration-300 hover:cursor-pointer flex justify-items-center align-middle"
            onClick={() => {
              setState({ ...state, open: false, openedOnce: true });
              setTimeout(() => {
                document.getElementById(props.href)?.scrollIntoView();
              }, 100);
            }}
          >
            <span className="m-auto text-4xl font-semibold">
              {props.content}
            </span>
          </div>
        </>
      );
    };

    return (
      <>
        <div
          className={
            (state.open
              ? "animate__slideInLeft"
              : "animate__slideOutLeft" + " hidden") +
            " absolute top-0 left-0 w-screen h-screen bg-blue-500 z-10 animate__animated grid"
          }
        >
          <div className="absolute w-full flex justify-end p-4">
            <CloseMenuButton />
          </div>
          <div className="grid justify-items-center mt-20">
            <Link href="about" content="about" />
            <Link href="portfolio" content="portfolio" />
            <Link href="contact" content="contact" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Overlay />
      <div id="nav" className={state.open ? "hidden" : state.scrollingUp ? "fixed top-0 left-0" : "absolute top-0 left-0"}>
        <div className="block visible md:invisible md:hidden p-4">
          <OpenMenuButton />
        </div>
        <div className="hidden md:block">
          <Links />
        </div>
      </div>
    </>
  );
};

export default Nav;
