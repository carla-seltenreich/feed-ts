import styles from "./index.module.css";

interface teste {
  src: string;

}
export function Avatar({ hasBorder = true, src}:teste) {

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}