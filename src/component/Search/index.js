import React, {useState} from 'react'
import './Search.css'
import { FiSearch } from "react-icons/fi";

const Search = () => {

    const [search, setSearch] = useState(false);

    const onSubmitSearch = (e) => {
        e.preventDefault();
        alert('Searched!!')
    }

    const openSearch = () => {
        search ? setSearch(false) : setSearch(true);
        console.log(search);
    }

    const searchClass = search ? 'searchInput open' : 'searchInput';

    return (
        <div className="search">
            <form onSubmit={onSubmitSearch}>
                <input type="text"
                    placeholder="Search"
                    className={searchClass} />
            </form>
            <FiSearch
                    color="white"
                    size="18px"
                    onClick={openSearch} />
        </div>
    )
}

export default Search
