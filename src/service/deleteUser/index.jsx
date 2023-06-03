import api from "../api";

export async function deleteUser(userId) {
  // console.log(email, idade,  nome, telefone, tipo)

  const response = await api.delete(`/Users/${userId}`);

  return response;
}
