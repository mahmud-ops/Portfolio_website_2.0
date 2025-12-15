import { styles } from "../../assets/Styles/base";

const DesktopLinks = () => {
  const links = ["Home", "About", "Skills", "Projects"];

  return (
    <div className={styles.desktopLinks}>
      {links.map((item) => (
        <a key={item} className={styles.link}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default DesktopLinks;
