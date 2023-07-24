import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"})


export const Register = (formData)=>API.post('api/users/', formData);
export const Login = (formData) => API.post('api/users/login/', formData);
const getUserName = async (userId) =>{
    const {data} = await API.get(`api/users/${userId}/profile`);
    return data;
}

const getQuizzTitles = async (userId) => {
    const {data} = await API.get(`api/quizz/${userId}/titles`);
    return data;
}

export const searchUserProfile = async (userId)=>{
    const {name} = await getUserName(userId);
    const {allTitles} = await getQuizzTitles(userId);
    return {
        profileName: name,
        titles: allTitles
    }
}