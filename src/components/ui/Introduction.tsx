import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <TypeAnimation
        sequence={[
          "Web Developer",
          400,
          "Curious by nature",
          500,
          "Learning in public",
          500,
          "Logic before libraries",
          500,
          "Still learning. Always building.",
          600,
        ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1.5em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Intro;
