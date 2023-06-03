import styles from "./styles.module.css";

export default function DefaultInputs(props) {
  return (
    <div className={styles.main_container}>
      <label>{props.label}</label>
      <input
        className={styles.input}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
