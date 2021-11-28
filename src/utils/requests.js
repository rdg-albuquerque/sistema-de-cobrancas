import instanceAxios from "../services/axios";

export async function post(rota, body, token) {
  return await instanceAxios.post(rota, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function get(rota, token) {
  return await instanceAxios.get(rota, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
