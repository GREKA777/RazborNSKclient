import React, {useEffect, useState} from 'react';
import styles from './TiersCharacteristic.module.css'
import {useSelector} from "react-redux";
import {createFavourite, deleteFavourite, getOneFavourite} from "../../../http/favouriteAPI";
import {createBasket, deleteBasket, getOneBasket} from "../../../http/basketAPI";
const TiersCharacteristic = ({tiers}) => {
    const userAuth = useSelector(state => state.userData.isAuth)
    const user = useSelector(state => state.userData.user)
    const [fav, setFav] = useState("")
    const [bas, setBas] = useState("")
    useEffect(() => {
        if (userAuth) {
        getOneFavourite(user.id, tiers.id, null).then(data =>{
            setFav(data)
        })}
    },[tiers.id])
    useEffect(() => {
        if (userAuth) {
        getOneBasket(user.id, tiers.id, null).then(data =>{
            setBas(data)
        })}
    },[tiers.id])
    const favourite = () => {
        if (userAuth) {
        createFavourite(user.id, tiers.id, null).then(data => {
            setFav(data)
        })}
    }
    const unfavourite = () => {
        if (userAuth) {
        deleteFavourite(user.id, tiers.id, null).then(data => {
            setFav(data)
        })}
    }

    const basket = () => {
        if (userAuth) {
        createBasket(user.id, tiers.id, null).then(data => {
            setBas(data)
        })}
    }
    const unbasket = () => {
        if (userAuth) {
        deleteBasket(user.id, tiers.id, null).then(data => {
            setBas(data)
        })}
    }
    return ( <div>
            <div className={styles.contentCharacteristic}>
                <div className={styles.characteristic}>
                    <div>Название:</div>
                    <div>Ширина:</div>
                    <div>Профиль:</div>
                    <div>Диаметр:</div>
                    <div>Количество:</div>
                    <div>Номер:</div>
                </div>
                <div className={styles.textCharacteristic}>
                    <div className={styles.indent}>{tiers.name || "Название"}</div>
                    <div className={styles.indent}>{tiers.width || "Ширина"}</div>
                    <div className={styles.indent}>{tiers.profile || "Профиль"}</div>
                    <div className={styles.indent}>{tiers.diameter || "Диаметр"}</div>
                    <div className={styles.indent}>{tiers.count || "Количество"}</div>
                    <div className={styles.indentO}>{tiers.num || "Номер"}</div>
                </div>
            </div>
            {bas ?
                <button className={styles.buttonK} onClick={unbasket}>Удалить из корзины</button>:
                <button className={styles.buttonK} onClick={basket}>В корзину</button>
            }
            {fav?
                <button className={styles.buttonF} onClick={unfavourite}>Удалить из избранного</button>:
                <button className={styles.buttonF} onClick={favourite}>В избранное</button>
            }
        </div>
    );
};

export default TiersCharacteristic;