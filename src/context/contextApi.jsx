import React, {createContext ,useState, useEffect} from "react";

import { fetchDataFromApi } from "../utils/Api";
import { FaLess } from "react-icons/fa";

export const Context  = createContext();

export const  AppContext = (props) =>
{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]); // pahle false tha jiski wajah se array nahi tha ab [] array hai
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>
    {
         fetchSelectedCategoryData(selectCategories)
    },[selectCategories]);


    const fetchSelectedCategoryData = (query) =>
    {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>
        {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        })
    }

    return(
        <Context.Provider value = {
            {
                loading,
                setLoading,
                searchResults,
                setSelectCategories,
                selectCategories,
                mobileMenu,
                setMobileMenu,

            }}>
                {props.children}
            </Context.Provider>
    )

}
