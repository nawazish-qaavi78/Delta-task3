import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"})


export const Register = (formData)=>API.post('/api/users/', formData);
export const Login = (formData) => API.post('/api/users/login/', formData);