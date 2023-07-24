import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './ProfilePage.css'
import {  getQuizzTitles } from '../../api';

const ProfilePage = () => {
    const [searchId, setSearchId] = useState("");

    const handleSearch = async(e)=>{
        e.preventDefault();
        const titles = await getQuizzTitles(searchId);
        console.log(titles);
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input placeholder='Search..' value={searchId} onChange={(e)=>{setSearchId(e.target.value)}} />
                <button type='submit'><SearchIcon /></button>
            </form>
            <h1>Welcome Nawazish</h1>
        </div>
    )
}

export default ProfilePage