import { useState } from "react";
import { styles } from "../../assets/Styles/base";
import DesktopLinks from "./desktopLinks";
import Hamburger from "./hamburger";
import MobileDropdown from "./mobileDropdown";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className="flex items-center justify-center relative h-16">
          <DesktopLinks />
          <div className="absolute right-0 md:hidden">
            <Hamburger open={open} onClick={() => setOpen(!open)} />
          </div>
        </div>
      </div>
      <MobileDropdown open={open} />
    </nav>
  );
};

export default NavBar;
