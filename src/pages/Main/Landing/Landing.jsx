import React from 'react';
import styles from './Landing.module.css'
import {CATALOG_ROUTE} from "../../../utils/const";
import {NavLink} from "react-router-dom";

const Landing = () => {
    return (
        <div className={styles.landing}>
            <h1 className={styles.landingHead}>Авторазбор</h1>
            <h1 className={styles.landingName}>RazborNSKavto</h1>
            <p className={styles.landingText}>Лучшие автозапчасти для</p>
            <p className={styles.landingTextе}>ваших автомобилей</p>
            <NavLink to={CATALOG_ROUTE}><button className={styles.landingButton}>Наш каталог</button></NavLink>
        </div>
    );
};

export default Landing;