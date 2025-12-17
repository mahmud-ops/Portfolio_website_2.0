import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import Intro from "@/components/ui/Introduction";
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
        </div>
      </div>

    </div>
  );
};

export default Hero_section;
