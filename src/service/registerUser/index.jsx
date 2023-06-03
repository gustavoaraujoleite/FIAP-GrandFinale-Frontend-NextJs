import api from "../api";

export async function registerUser(email, idade, nome, telefone, tipo) {
  // console.log(email, idade,  nome, telefone, tipo)
  
  const response = await api.post("/Users", {
    email,
    idade,
    nome,
    telefone,
    tipo,
  });

  return response;
}
