import styles from "./style.module.css";

export default function Button(props) {
  return (
    <button
      className={styles.container}
      style={props.style}
      onClick={props.onClick}
    >
      <span className={styles.text} style={props.textStyle}>
        {props.title}
      </span>
    </button>
  );
}
