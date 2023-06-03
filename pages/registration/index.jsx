import Image from "next/image";
import styles from "./styles.module.css";
import bgImage from "../../assets/images/main-bg.png";
import Button from "../../src/components/UI/Button";
import DefaultInputs from "../../src/components/defaultInputs";
import { useState } from "react";
import { registerUser } from "../../src/service/registerUser";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");

  async function registerUserHandler(event) {
    event.preventDefault();
    try {
      const result = await registerUser(
        email.toString(),
        age,
        name.toString(),
        phone.toString(),
        type === "" ? "ALUNO" : type.toString()
      );
      console.log(result.status);

      if (result.status === 201) {
        alert("Usuário cadastrado com sucesso");
      }
      setEmail("")
      setPhone("")
      setName("")
      setAge("")
      setType("")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.box_container}>
        <form className={styles.content_container}>
          <h1 className={styles.title}>Registro</h1>
          <div className={styles.inputs_container}>
            <DefaultInputs
              label="Nome"
              value={name}
              onChange={(data) => setName(data.target.value)}
            />
            <DefaultInputs
              label="E-mail"
              value={email}
              onChange={(data) => setEmail(data.target.value)}
            />
          </div>
          <div className={styles.inputs_container}>
            <DefaultInputs
              label="Telefone"
              value={phone}
              onChange={(data) => setPhone(data.target.value)}
            />
            <DefaultInputs
              label="Idade"
              type="number"
              value={age}
              onChange={(data) => setAge(data.target.value)}
            />
          </div>
          <select
            onChange={(data) => setType(data.target.value)}
            value={type}
            className={styles.dropdown_container}
            name="select"
          >
            <option value="ALUNO">ALUNO</option>

            <option value="PROFESSOR">PROFESSOR</option>
          </select>

          <div className={styles.buttonContainer}>
            <Button
              onClick={registerUserHandler}
              title="Registrar dados"
              style={{ background: "#23ab17", width: "50%" }}
            />
          </div>
        </form>
        <div className={styles.picture_container}>
          <Image src={bgImage} height={380} width={300} alt="healthTech-Image"/>
        </div>
      </div>
    </div>
  );
}
