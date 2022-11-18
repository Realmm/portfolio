import { BsFillArrowDownSquareFill } from "react-icons/bs"

const AboutArrowButton = () => {
  return (
    <>
      <div className="flex align-middle justify-center">
        <a href="#about" className="m-auto animate-bounce">
          <BsFillArrowDownSquareFill size={56} color="#2964e3" />
        </a>
      </div>
    </>
  );
};

export default AboutArrowButton