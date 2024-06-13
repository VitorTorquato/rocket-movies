import axios from "axios";


export const api =  axios.create({
    baseURL: "https://movies-api-um21.onrender.com"
});

