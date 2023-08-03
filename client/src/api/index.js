import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
})


export const Register = (formData)=>API.post('api/users/', formData);
export const Login = (formData) => API.post('api/users/auth/', formData);
const getUserName = async (userId) =>{
    const {data} = await API.get(`api/users/${userId}/profile`);
    return data;
}

export  const getUserData = async() => {
    const {name, quizzes} = await API.get('/api/users/userData');
    return {name, quizzes};
};

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


export const getQuizz = (quizzId) =>API.get(`api/quizz/${quizzId}`);



