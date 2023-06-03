import { getUsers } from "../../src/service/getUsers";
import { useCallback, useEffect, useState } from "react";
import { deleteUser } from "../../src/service/deleteUser";
import styles from "./styles.module.css";
import UserModel from "../../src/components/UserModel";

export default function Research() {
  const [data, setData] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const result = await getUsers();

      setData(result.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function deleteUserHandler(id) {
    try {
      const result = await deleteUser(id);
      if (result.status === 200) {
        alert("Usuário excluído com sucesso");
        fetchUsers();
      }
    } catch (err) {
      console.log(err);
      alert("Nao foi possivel realizar a exclusão do usuário!");
    }
  }

  return (
    <div className={styles.main_container}>
      {data.length > 0 ? (
        <div className={styles.box_container}>
          {data?.map((element) => {
            return (
              <div key={element.id}>
                <UserModel
                  name={element.nome}
                  email={element.email}
                  phone={element.telefone}
                  type={element.tipo}
                  age={element.idade}
                  onClick={() => deleteUserHandler(element.id)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <section className={styles.empty_component_container}>
          <h1 className={styles.empty_array_title}>
            Nenhum registro cadastrado ou encontrado na plataforma
          </h1>
        </section>
      )}
    </div>
  );
}
