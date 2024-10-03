import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://sparework-backend.onrender.com",
  withCredentials: true,
});

export default newRequest;
