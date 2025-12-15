import NavBar from "./components/ui/navBar";
import Hero_section from "./components/ui/Hero_section";

const App = () => {
  return (
    <div className="dark">
      <NavBar />
      <div className="overflow-y-auto">
        <Hero_section />
      </div>
    </div>
  );
};

export default App;
