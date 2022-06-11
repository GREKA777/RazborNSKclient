import React, {useEffect} from 'react';
import styles from "../Favourite/Favourite.module.css";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import CardsTiers from "../../components/CardsTiers/CardsTiers";
import Foot from "../../components/Foot/Foot";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllFavourite, fetchFavourite} from "../../http/favouriteAPI";
import {setFavouriteAC} from "../../redux/userReducer";
import {setTotalAC} from "../../redux/catalogReducer";
import Pages from "../../components/Pages/Pages";

const Favourite = () => {
    const user = useSelector(state => state.userData.user)
    const limit = useSelector(state => state.catalog.limit)
    const page = useSelector(state => state.catalog.page)
    const totalCount = useSelector(state => state.catalog.totalCount)
    const deleteAll = () => {
        deleteAllFavourite(user.id, limit, page).then(data => {
            dispatch(setFavouriteAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    }
    const dispatch = useDispatch()
    useEffect(() => {
        fetchFavourite(user.id, limit, page).then(data => {
            dispatch(setFavouriteAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    },[])
    useEffect(() => {
        fetchFavourite(user.id, limit, page).then(data => {
            dispatch(setFavouriteAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    },[page])
    const items = useSelector(state => state.userData.listFavourite).map(onePart => {
            if (onePart.count) {
                return <CardsTiers autoTiers={onePart}/>
            } else {
                return <CardsAutopart autoPart={onePart}/>
            }
        }
    )
    return (
        <div>
            <div className={styles.favouriteAll}>
                <h2 className={styles.favourite}>Избранное</h2>
            </div>
            <div className={styles.cards}>
                {items}
            </div>
            <Pages limit={limit} page={page} totalCount={totalCount}/>
            <div className={styles.back}>
                <button className={styles.buttonPay} onClick={deleteAll}>Удалить всё</button>
            </div>
            <Foot/>
        </div>
    );
};

export default Favourite;