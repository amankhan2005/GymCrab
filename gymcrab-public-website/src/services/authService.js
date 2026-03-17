import api from "./api"

export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data)
  return response.data
}

export const registerGym = async (data) => {
  const response = await api.post("/gym/register", data)
  return response.data
}