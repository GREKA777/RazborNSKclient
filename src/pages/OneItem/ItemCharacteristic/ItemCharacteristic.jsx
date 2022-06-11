import React, {useEffect, useState} from 'react';
import styles from './ItemCharacteristic.module.css'
import {createFavourite, deleteFavourite, getOneFavourite} from "../../../http/favouriteAPI";
import {useSelector} from "react-redux";
import {createBasket, deleteBasket, getOneBasket} from "../../../http/basketAPI";

const ItemCharacteristic = ({autoPart}) => {
    const userAuth = useSelector(state => state.userData.isAuth)
    const user = useSelector(state => state.userData.user)
    const [fav, setFav] = useState("")
    const [bas, setBas] = useState("")
    useEffect(() => {
        if (userAuth) {
            getOneFavourite(user.id,null ,autoPart.id).then(data =>{
                setFav(data)
            })
        }
    },[autoPart.id])
    useEffect(() => {
        if (userAuth) {
            getOneBasket(user.id, null, autoPart.id).then(data => {
                setBas(data)
            })
        }
    },[autoPart.id])
    const favourite = () => {
        if (userAuth) {
        createFavourite(user.id,null ,autoPart.id).then(data => {
            setFav(data)
        })
    }}
    const unfavourite = () => {
        if (userAuth) {
        deleteFavourite(user.id,null ,autoPart.id).then(data => {
            setFav(data)
        })
    }}

    const basket = () => {
        if (userAuth) {
        createBasket(user.id,null ,autoPart.id).then(data => {
            setBas(data)
        })
    }}
    const unbasket = () => {
        if (userAuth) {
        deleteBasket(user.id,null ,autoPart.id).then(data => {
            setBas(data)
        })}
    }
    return (
        <div>
        <div className={styles.contentCharacteristic}>
            <div className={styles.characteristic}>
            <div>Автомобиль:</div>
            <div>Год:</div>
            <div>Двигатель:</div>
            <div>Пробег:</div>
            <div>Номер:</div>
            <div>Описание:</div>
            </div>
            <div className={styles.textCharacteristic}>
                <div className={styles.indent}>{autoPart.car || "Автомобиль"}</div>
                <div className={styles.indent}>{autoPart.year || "Год"}</div>
                <div className={styles.indent}>{autoPart.engine || "Двигатель"}</div>
                <div className={styles.indent}>{autoPart.run || "Пробег"}</div>
                <div className={styles.indent}>{autoPart.num || "Номер"}</div>
                <div className={styles.indentO}>{autoPart.description || "Описание"}</div>
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

export default ItemCharacteristic;