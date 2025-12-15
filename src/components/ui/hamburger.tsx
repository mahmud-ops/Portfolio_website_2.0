import { styles } from "../../assets/Styles/base";

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, onClick }) => {
  return (
    <div>
      <button className={styles.mobileButton} onClick={onClick}>
        <div
          className={`${styles.bar} ${
            open ? "rotate-45 translate-y-2.25" : ""
          }`}
        ></div>
        <div
          className={`${styles.bar} ${open ? "opacity-0" : "opacity-100"}`}
        ></div>
        <div
          className={`${styles.bar} ${
            open ? "-rotate-45 -translate-y-2.25" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default Hamburger;
