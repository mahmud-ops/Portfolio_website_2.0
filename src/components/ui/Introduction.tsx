import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web Developer",
        500,
        "Problem Solver by Habit",
        500,
        "Competitive Programming Mindset",
        500,
        "Clean logic. Real systems.",
        500,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Intro;
