import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Head from "./components/Head/Head";
import './App.css'
import {useDispatch} from "react-redux";
import {check} from "./http/userAPI";
import {setIsAuthAC, setUserAC} from "./redux/userReducer";
import Spinner from "./components/Spinner/Spinner";
const App = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        check().then(data =>{
            dispatch(setUserAC(data))
            dispatch(setIsAuthAC(true))
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    if(loading) {
        return <Spinner/>
    }

    return (
        <div className='wrapper'>
            <BrowserRouter>
                <Head/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );

};

export default App;