import React from 'react'
import './Search.css'
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const searchInputHandler =() => {
        return (
            <input />
        )
    }

    return (
        <div className="search" onClick={searchInputHandler}>
            <FiSearch color="white" size="20px" />
        </div>
    )
}

export default Search
