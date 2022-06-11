import React, {useEffect, useState} from 'react';
import styles from "../Basket/Basket.module.css";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import CardsTiers from "../../components/CardsTiers/CardsTiers";
import Foot from "../../components/Foot/Foot";
import {useDispatch, useSelector} from "react-redux";
import Pages from "../../components/Pages/Pages";
import {setBasketAC, setSumAC} from "../../redux/userReducer";
import {setAutopartAC, setTotalAC} from "../../redux/catalogReducer";
import {deleteAllBasket, fetchBasket} from "../../http/basketAPI";
import {fetchAutoParts} from "../../http/autoPartAPI";

const Basket = () => {
    const sum = useSelector(state => state.userData.basketSum)
    const user = useSelector(state => state.userData.user)
    const limit = useSelector(state => state.catalog.limit)
    const page = useSelector(state => state.catalog.page)
    const totalCount = useSelector(state => state.catalog.totalCount)
    const deleteAll = () => {
        deleteAllBasket(user.id, limit, page).then(data => {
            dispatch(setBasketAC(data.rows))
            dispatch(setSumAC(data.sum))
            dispatch(setTotalAC(data.count))
        })
    }
    const dispatch = useDispatch()
    useEffect(() => {
        fetchBasket(user.id, limit, page).then(data => {
            dispatch(setBasketAC(data.rows))
            dispatch(setSumAC(data.sum))
            dispatch(setTotalAC(data.count))
        })
    },[])
    useEffect(() => {
        fetchBasket(user.id, limit, page).then(data => {
            dispatch(setBasketAC(data.rows))
            dispatch(setSumAC(data.sum))
            dispatch(setTotalAC(data.count))
        })
    },[page])
    const items = useSelector(state => state.userData.listBasket).map(onePart => {
        if (onePart.count) {
            return <CardsTiers autoTiers={onePart}/>
        } else {
            return <CardsAutopart autoPart={onePart}/>
        }
    }
    )
    return (
        <div>
            <div className={styles.basketAll}>
                <h2 className={styles.basket}>Корзина</h2>
            </div>
            <div className={styles.cards}>
                {items}
            </div>
            <Pages limit={limit} page={page} totalCount={totalCount}/>
            <div className={styles.back}>
                <div className={styles.priceDone}>
                    <div className={styles.donePrice}>Итого:</div>
                    <div className={styles.donePriceDone}>{sum} р</div>
                </div>
                <button className={styles.buttonPay}>Оплатить</button>
                <button className={styles.buttonPay} onClick={deleteAll}>Удалить всё</button>
            </div>
            <Foot/>
        </div>
    );
};

export default Basket;