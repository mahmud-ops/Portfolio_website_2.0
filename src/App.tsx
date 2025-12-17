import NavBar from "./components/ui/navBar";
import Hero_section from "./components/ui/Hero_section";
import MyWorks from "./components/ui/myWorks";
import React, { useRef } from "react";
import SeeMyWork_btn from "./components/ui/SeeMyWork_btn";

const App: React.FC = () => {
  const targetSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="dark">
      <NavBar />

      <div className="overflow-y-auto">
        <Hero_section />
        <div className="relative flex justify-center items-center z-10 bottom-33">
          <SeeMyWork_btn text="See my work" targetRef={targetSectionRef}/>
        </div>
      </div>

      <div ref = {targetSectionRef}>
        <MyWorks/>
      </div>
    </div>
  );
};

export default App;
