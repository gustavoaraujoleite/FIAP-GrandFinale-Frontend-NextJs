import Button from "../UI/Button";
import styles from "./style.module.css";

export default function UserModel(props) {
  return (
    <div className={styles.main_container} style={props.style}>
      <div className={styles.box_container}>
        <div className={styles.content_container}>
          <h1 className={styles.title}>Nome - </h1>
          <h2 className={styles.subtitle}>{props.name}</h2>
        </div>
        <div className={styles.content_container}>
          <h1 className={styles.title}>E-mail - </h1>
          <h2 className={styles.subtitle}>{props.email}</h2>
        </div>
      </div>

      <div className={styles.box_container}>
        <div className={styles.content_container}>
          <h1 className={styles.title}>Telefone - </h1>
          <h2 className={styles.subtitle}> {props.phone}</h2>
        </div>
        <div className={styles.content_container}>
          <h1 className={styles.title}>Idade - </h1>
          <h2 className={styles.subtitle}>{props.age}</h2>
        </div>
      </div>
      <div className={styles.box_container}>
        <div className={styles.content_container}>
          <h1 className={styles.title}>Status - </h1>
          <h2 className={styles.subtitle}> {props.type}</h2>
        </div>
        <div className={styles.btn_container}>
          <Button
            title="Excluir"
            style={{
              background: "#e7504d",
              padding: "0.2rem 1rem",
            }}
            textStyle={{
              fontSize: "12px",
            }}
            onClick={props.onClick}
          />
        </div>
      </div>
    </div>
  );
}
