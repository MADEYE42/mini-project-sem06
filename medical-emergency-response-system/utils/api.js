import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

export const getAvailableHospitals = async () => {
  return await axios.get(`${API_URL}/hospital/available`);
};

export const submitEmergencyRequest = async (requestData) => {
  return await axios.post(`${API_URL}/emergency/request`, requestData);
};

export const getUserRequests = async (userId) => {
  return await axios.get(`${API_URL}/emergency/user/${userId}`);
};
