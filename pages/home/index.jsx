import Image from "next/image";
import styles from "./styles.module.css";
import bgImage from "../../assets/images/main-bg.png";
import Button from "../../src/components/UI/Button";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.main_container}>
      <div className={styles.box_container}>
        <div className={styles.content_container}>
          <h1 className={styles.title}>Seja muito bem-vindo ao HealthTech</h1>

          <h2 className={styles.subtitle}>
            Para começar, pressione o botão abaixo para realização do seu
            registro
          </h2>

          <div className={styles.buttonContainer}>
            <Button
              title="Registro"
              onClick={() => {
                router.push("registration");
              }}
              style={{ background: "#e7504d", width: "50%" }}
            />
          </div>
        </div>
        <div className={styles.picture_container}>
          <Image src={bgImage} height={380} width={300} alt="healthTech-Image" />
        </div>
      </div>
    </div>
  );
}
