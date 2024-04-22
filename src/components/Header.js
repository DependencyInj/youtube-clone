import React, { useEffect, useRef, useState } from 'react';
import search from '../../src/assets/images/search-interface-symbol.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/navSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchCacheSlice';
import { assigneSearchQuery } from '../utils/searchQuerySlice';
import menuIcon from '../assets/images/burger-menu-svgrepo-com.svg';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const listRef = useRef();
    const searchInputRef = useRef();


    const searchCache = useSelector(store => store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions();
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const result = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
        const json = await result.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({ [searchQuery]: json[1] }));
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const setSearchQueryInStore = (q) => {
        dispatch(assigneSearchQuery(q));
        setSearchQuery(q);
    }

    const clearSearchDropDown = () => {
        const dropDownClearTimeout = setTimeout(() => {
            setShowSuggestions(false);
            clearTimeout(dropDownClearTimeout);
        }, 200);
    }

    return (
        <div className='grid grid-flow-col pl-10 pr-10 pt-5 pb-3 sticky top-0 bg-white'>
            <div className='col-span-1'>
                <div className='flex'>
                    <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt='menu' src={menuIcon} />
                    <img className='h-8 mx-2' alt='youtube-logo' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png'} />
                </div>
            </div>
            <div className='col-span-9 flex justify-center'>
                <div className='flex w-[550px]'>
                    <input ref={searchInputRef} className='border px-3 border-gray-400 rounded-l-full w-4/6 p-1'
                        type='text'
                        value={searchQuery}
                        onChange={(e) => {setSearchQuery(e.target.value); }}
                        onFocus={(e) => setShowSuggestions(true)}
                        onBlur={(e) => clearSearchDropDown(false)}
                    />
                    <button className='border border-gray-400 rounded-r-full w-10 p-1'>
                        <img className='h-5' alt='search' src={search} />
                    </button>
                    {
                        showSuggestions && suggestions?.length !== 0 && (
                            <div className='absolute bg-white shadow-lg border-b-slate-500-700 border-solid border-2 w-[23rem] rounded-lg py-2 px-2 mt-8'>
                                <ul ref={listRef}>
                                    {
                                        suggestions.map(s => <li key={s} id={'list-item' + s} onClick={() => setSearchQueryInStore(s)} className='py-2 px-3 cursor-pointer shadow-sm hover:bg-gray-200'> 🔍 {s} </li>)
                                    }
                                </ul>
                            </div>)
                    }
                </div>
            </div>
            <div className='col-span-2 flex justify-end'>
                <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
            </div>
        </div>
    )
}

export default Header;