import styles from "./index.module.css";

interface PostProps {
  src: String;
}

export function Avatar({ hasBorder = true, src }) {


  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}