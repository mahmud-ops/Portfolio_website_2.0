import { styles } from "../../assets/Styles/base";

interface MobileDropdownProps {
  open: boolean;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ open }) => {
  const links = ["Home", "About", "Skills", "Projects"];

  return (
    <div
      className={`${styles.dropdown} ${
        open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {links.map((item) => (
        <a key={item} className={styles.dropdownLink}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default MobileDropdown;
