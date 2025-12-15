import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import Intro from "./Introduction";
import { Button, buttonVariants } from "@/components/ui/button";
const Hero_section = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <StarsBackground starColor="white" className="absolute inset-0" />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl p-2 font-bold text-white mb-4 tracking-wider">
            Abdullah Al Mahmud
          </h1>
          <Intro />
          <div className="mt-8 flex gap-4 justify-center cursor-pointer">
            <Button variant="outline" size="default" aria-label="Submit">
              See my work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_section;
