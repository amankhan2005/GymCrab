import api from "./api"

export const createPayment = async (plan) => {
  const response = await api.post("/payment/create", { plan })
  return response.data
}