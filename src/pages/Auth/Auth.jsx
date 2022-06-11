import React, {useState} from 'react';
import styles from './Auth.module.css'
import {useDispatch} from "react-redux";
import {registration} from "../../http/userAPI";
import {setIsAuthAC, setUserAC} from "../../redux/userReducer";
import {NavLink, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../../utils/const";

const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [FIO, setFIO] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
   const regClick = async () => {
        try {
       const data = await registration(FIO, email, password)
       dispatch(setUserAC(data))
            dispatch(setIsAuthAC(true))
       navigate(MAIN_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }
   }
    return (
        <div>
            <div className={styles.auth}>Регистрация</div>
            <div className={styles.plase}>
                <div>
                    <input type="text" placeholder={"Введите ФИО"} className={styles.input} onChange={(e) =>{
                        setFIO(e.target.value)
                    }}/>
                </div>
                <div>
                    <input type="text" placeholder={"Введите Email"} className={styles.input} onChange={(e) =>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div>
                    <input type="password" placeholder={"Введите пароль"} className={styles.input} onChange={(e) =>{
                        setPassword(e.target.value)
                    }}/>
                </div>
                <button className={styles.button} onClick={regClick}>Зарегистрироваться</button>
                <div className={styles.log}>
                    <div>Зарегистрированы?</div>
                    <NavLink to={LOGIN_ROUTE} className={styles.bl}>Войти!</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Auth;