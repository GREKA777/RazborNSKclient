import React from 'react';
import styles from './CardsTiers.module.css'
import {useNavigate} from "react-router-dom";
import {ONE_TIER_ROUTE} from "../../utils/const";
import {useDispatch, useSelector} from "react-redux";
import {setTiersAC, setTotalAC} from "../../redux/catalogReducer";
import {deleteTiers} from "../../http/tiersAPI";
import {createHistory} from "../../http/historyAPI";
import {setSumAC} from "../../redux/userReducer";
import profile from "../../assets/profile.png";

const CardsTiers = ({autoTiers}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userData.user)
    const isAuth = useSelector(state => state.userData.isAuth)
    const del = () => {
        deleteTiers(autoTiers.id, 1, 12).then(data => {
            dispatch(setTiersAC(data.rows))
            dispatch(setSumAC(data.sum))
            dispatch(setTotalAC(data.count))
        })
    }
    const history = () => {
        createHistory(user.id, autoTiers.id, null).then(data => {
        })
    }
    const navigate = useNavigate()
    return (
        <div className={styles.cardTiers} key={autoTiers.id || "ID автозапчасти"}>
            <div onClick={() => {
                if (isAuth) {
                    history()
                    navigate(ONE_TIER_ROUTE + "/" + autoTiers.id)
                }else navigate(ONE_TIER_ROUTE + "/" + autoTiers.id)
            }}>
            <img src={autoTiers.img?'http://62.113.111.238:5000/' + autoTiers.img:profile} alt="АВТОШИНЫ" className={styles.tiers}/>
            <div className={styles.nameTiers}>{autoTiers.name || "Название"}</div>
            <div className={styles.textTiers}>Ширина: {autoTiers.width || "Ширина"}</div>
            <div className={styles.textTiers}>Профиль: {autoTiers.profile || "Профиль"}</div>
            <div className={styles.textTiers}>Диаметр: {autoTiers.diameter || "Диаметр"}</div>
            <div className={styles.textTiers}>Количество: {autoTiers.count || "Количество"}</div>
            <div className={styles.prise}>{autoTiers.price || "Цена"} р</div>
            </div>
            {isAuth ?
                user.role === 'ADMIN' ?
                    <button className={styles.delete} onClick={del}>Удалить</button>
                    : null : null
            }
        </div>
    );
};

export default CardsTiers;