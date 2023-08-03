import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './ProfilePage.css'
import { searchUserProfile } from '../../api';
import { useNavigate, useParams } from 'react-router-dom';
import TakeQuizzMenu from '../../Components/takeQuizzMenu';

const SearchedProfile = () => {
    const [searchId, setSearchId] = useState("");
    const { userId } = useParams();
    const navigate = useNavigate();


    const { profileName, titles } = searchUserProfile(userId);    

    const handleSearch = async (e) => {
        e.preventDefault();
        navigate(`/profile/${searchId}`);
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input placeholder='Search..' value={searchId} onChange={(e) => { setSearchId(e.target.value) }} />
                <button type='submit'><SearchIcon /></button>
            </form>
            <h1>{profileName}</h1>
            {titles.map((title, index) => {
                write id as quizz ids
                return <TakeQuizzMenu key={index} id={} title={title} />
            })}
        </div>
    )
}

export default SearchedProfile