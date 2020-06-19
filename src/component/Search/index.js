import React, {useState} from 'react';
import SearchStyle from './Search.Styled';
import { FiSearch } from "react-icons/fi";

const Search = (props) => {

    const [search, setSearch] = useState(false);

    const onSubmitSearch = (e) => {
        e.preventDefault();
        alert('Searched!!')
    }

    const openSearch = () => {
        search ? setSearch(false) : setSearch(true);
    }

    return (
        <SearchStyle search={search} >
            <form onSubmit={onSubmitSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    className="searchInput" />
            </form>
            <div className="searchIcon">
                <FiSearch
                        color="white"
                        size="18px"
                        onClick={openSearch} />
            </div>
        </SearchStyle>
    )
}

export default Search
