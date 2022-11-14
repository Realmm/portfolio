import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-black w-full h-screen text-white">
        <Nav />
        <Title/>
      </div>
    </>
  );
};

const Nav = () => {
  type NavItemProps = {
    content: string;
    link: string;
  };

  const NavItem = (props: NavItemProps) => {
    return (
      <a className="font-semibold" href={props.link}>
        {props.content}
      </a>
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

  return (
    <>
      <Links />
    </>
  );
};

const Title = () => {

  const allContent = [
    "FullStack Developer"
  ]

  const [state, setState] = useState<{
    content: string,
    len: number
  }>({content: "", len: 0})

  const write = () => {
    const element = document.getElementById("mod-title") 
    if (element === undefined) return;
    element!!.innerHTML += state.content.charAt(state.len)
  }

  useEffect(() => {
    setTimeout(write, 50)
  }, [])

  return (
    <>
    <div className="bg-red-400 w-full h-max text-center pt-20 font-semibold text-5xl">
      <span>James Andrew</span>
      <br />
      <br />
      <span>and I am a </span>
      <span id="mod-title">{state.content}</span>
    </div>
    </>
  )
}

export default Home;
