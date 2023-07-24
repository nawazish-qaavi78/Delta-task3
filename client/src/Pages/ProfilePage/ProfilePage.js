import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './ProfilePage.css'
import { searchUserProfile } from '../../api';
import { useParams } from 'react-router-dom';
import TakeQuizzMenu from '../../Components/takeQuizzMenu';

const ProfilePage = () => {
    const [searchId, setSearchId] = useState("");
    const [userName, setUserName] = useState("");
    const [allTitles, setAllTitles] = useState([]);
    const { userId } = useParams();


    const getProfile = () => {
        alert("hello");
        const { profileName, titles } = searchUserProfile(userId);
        setUserName(profileName);
        setAllTitles(titles);
    }
    useEffect(() => {
        getProfile();
    },);

    const handleSearch = async (e) => {
        e.preventDefault();
        alert(userName);


    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input placeholder='Search..' value={searchId} onChange={(e) => { setSearchId(e.target.value) }} />
                <button type='submit'><SearchIcon /></button>
            </form>
            <h1>{userName}</h1>
            {allTitles.map((title, index) => {
                return <TakeQuizzMenu key={index} title={title} />
            })}
        </div>
    )
}

export default ProfilePage