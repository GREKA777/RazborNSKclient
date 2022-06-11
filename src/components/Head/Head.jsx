import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {
    ABOUT_US_ROUTE,
    CATALOG_ROUTE,
    MAIN_ROUTE,
    TIRES_ROUTE,
    PROFILE_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE, AUTH_ROUTE, FAVOURITE_ROUTE, RECOMMEND_ROUTE
} from "../../utils/const";
import styles from './Head.module.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import basket from '../../assets/basket.png'
import favourite from '../../assets/favourite.png'
import recommend from '../../assets/recommend.png'
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthAC, setUserAC} from "../../redux/userReducer";


const Head = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userData.user)
    const isAuth = useSelector(state => state.userData.isAuth)
    const logOut = () => {
        dispatch(setUserAC({}))
        dispatch(setIsAuthAC(false))
        localStorage.removeItem("token")
        navigate(MAIN_ROUTE)
    }
    const navigate = useNavigate()
    return (
        <header className={styles.header}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <NavLink className={styles.headButton} to={TIRES_ROUTE}><button className={styles.button}>Шины</button></NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={styles.headButton} to={CATALOG_ROUTE}><button className={styles.button}>Запчасти</button></NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={styles.headButton} to={ABOUT_US_ROUTE}><button className={styles.button}>О нас</button></NavLink>
                </li>
            </ul>
            <NavLink className={styles.headButtonn} to={MAIN_ROUTE}><img src={logo} alt="RazborNSKavto"/></NavLink>
            {isAuth ? <div className={styles.profile}>
                <NavLink className={styles.profileButton} to={PROFILE_ROUTE}><img src={user.img?'http://localhost:5000/' + user.img:profile} alt="Профиль" className={styles.profileLogo}/></NavLink>
                <div className={styles.prof}>
                    <div><button className={styles.buttonGoo} onClick={() => navigate(PROFILE_ROUTE)}>Профиль</button></div>
                    <div><button className={styles.buttonOut} onClick={logOut}>Выход</button></div>
                </div>
                    <NavLink className={styles.basketButton} to={BASKET_ROUTE}><img src={basket} alt="Корзина" className={styles.basketLogo}/></NavLink>
                    <NavLink className={styles.basketButton} to={FAVOURITE_ROUTE}><img src={favourite} alt="Избранное" className={styles.basketLogo}/></NavLink>
                    <NavLink className={styles.basketButton} to={RECOMMEND_ROUTE}><img src={recommend} alt="Рекомендации" className={styles.basketLogo}/></NavLink>
                </div>:
                <div className={styles.log}>
                <div><button className={styles.buttonGo} onClick={() => navigate(LOGIN_ROUTE)}>Вход</button></div>
                <div><button className={styles.buttonReg} onClick={() => navigate(AUTH_ROUTE)}>Регистрация</button></div>
            </div>}
        </header>
    );
};

export default Head;