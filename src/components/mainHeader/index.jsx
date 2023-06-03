import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import mainLogo from "../../../assets/images/codados-logo.png";
import { useRouter } from "next/router";
export default function MainHeader(props) {
  const router = useRouter();
  return (
    <>
      <main className={styles.main_container}>
        <div className={styles.box_container}>
          <Link href="/home">
            <Image
              src={mainLogo}
              width={160}
              height={80}
              alt="healthTech-Logo"
            />
          </Link>

          <lu className={styles.menu_items_container}>
            <Link
              className={`${styles.menu_items} ${
                router.pathname === "/home" ? styles.home_active : ""
              }`}
              href="/home"
            >
              <li href="">HOME</li>
            </Link>
            <Link
              className={`${styles.menu_items} ${
                router.pathname === "/registration"
                  ? styles.register_active
                  : ""
              }`}
              href="/registration"
            >
              <li href="">REGISTRO</li>
            </Link>
            <Link
              className={`${styles.menu_items} ${
                router.pathname === "/research" ? styles.research_active : ""
              }`}
              href="/research"
            >
              <li href="">PESQUISA</li>
            </Link>
          </lu>
        </div>
      </main>
      <section className={styles.content_container}>{props.children}</section>
    </>
  );
}
