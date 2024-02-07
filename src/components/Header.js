import React, { useEffect, useState } from 'react';
import search from '../../src/assets/images/search-interface-symbol.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/navSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import store from '../utils/store';
import { cacheResults } from '../utils/searchCacheSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(store => store.search);
    console.log(searchQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions();
            }
        },200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const result = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
        const json = await result.json();
        console.log(json[1]);
        setSuggestions(json[1]);
        dispatch(cacheResults({[searchQuery]: json[1]}));
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt='menu' src='https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg' />
                <img className='h-8 mx-2' alt='youtube-logo' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png'} />
            </div>
            <div>
                <div className='flex w-auto'>
                    <input className='border px-3 border-gray-400 rounded-l-full w-4/6 p-1'
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={(e) => setShowSuggestions(true)}
                        onBlur={(e) => setShowSuggestions(false)}
                    />
                    <button className='border border-gray-400 rounded-r-full w-10 p-1'>
                        <img className='h-5' alt='search' src={search} />
                    </button>
                </div>
                {
                    showSuggestions && suggestions?.length != 0 && (
                        <div className='absolute bg-white shadow-lg border-b-slate-500-700 border-solid border-2 w-[23rem] rounded-lg py-2 px-2'>
                            <ul>
                                {
                                    suggestions.map(s => <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-200'> 🔍 {s} </li>)
                                }
                            </ul>
                        </div>)
                }

            </div>

            <div className='col-span-1'>
                <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
            </div>
        </div>
    )
}

export default Header