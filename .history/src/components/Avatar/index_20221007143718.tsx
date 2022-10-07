import styles from "./index.module.css";

export function Avatar({ hasBorder = true, src: string}) {


  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}