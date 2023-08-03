import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './ProfilePage.css';
import { getUserData, searchUserProfile } from '../../api';
import TakeQuizzMenu from '../../Components/takeQuizzMenu';
import { useNavigate } from 'react-router-dom';


const UserProfilePage = () => {
    const [searchId, setSearchId] = useState("");
    const {name, quizzes} = getUserData();

    const handleSearch = async (e) => {
        e.preventDefault();
        const navigate = useNavigate();
        navigate(`profile/${searchId}`);
    }


    return (
        <div>
            <form onSubmit={handleSearch}>
                <input placeholder='Search..' value={searchId} onChange={(e) => { setSearchId(e.target.value) }} />
                <button type='submit'><SearchIcon /></button>
            </form>
            <h1>{name}</h1>
            {quizzes.map((quizz) => {
                return <TakeQuizzMenu key={quizz._id} id={quizz._id}  title={quizz.title} />
            })}
        </div>
    )
}

export default UserProfilePage