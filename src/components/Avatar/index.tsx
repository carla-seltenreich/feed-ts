import styles from "./index.module.css";

interface AvatarInterface {
  src: string;
  hasBorder: boolean;

}
export function Avatar({ hasBorder = true, src}:AvatarInterface) {

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}