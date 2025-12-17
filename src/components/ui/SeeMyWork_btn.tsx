import {styles} from "@/assets/Styles/base"

interface Props {
  text:React.ReactNode //Use ReactNode if you want your button to accept icons, bold text, emojis, or any JSX inside.

  targetRef?:React.RefObject<HTMLElement | null>
}

const SeeMyWork_btn:React.FC<Props> = ({text,targetRef}) => {

  function handleClick() {
      if(targetRef && targetRef.current){
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
  }

  return (
    <button onClick={handleClick} className={styles.glassBtn}>
      {text}
    </button>
  );
};

export default SeeMyWork_btn;
