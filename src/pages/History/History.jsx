import React, {useEffect} from 'react';
import styles from "../History/History.module.css";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import CardsTiers from "../../components/CardsTiers/CardsTiers";
import Foot from "../../components/Foot/Foot";
import {useDispatch, useSelector} from "react-redux";
import {setTotalAC} from "../../redux/catalogReducer";
import {deleteAllHistory, fetchHistory} from "../../http/historyAPI";
import {setHistoryAC} from "../../redux/userReducer";
import Pages from "../../components/Pages/Pages";

const History = () => {
    const user = useSelector(state => state.userData.user)
    const limit = useSelector(state => state.catalog.limit)
    const page = useSelector(state => state.catalog.page)
    const totalCount = useSelector(state => state.catalog.totalCount)
    const deleteAll = () => {
        deleteAllHistory(user.id, limit, page).then(data => {
            dispatch(setHistoryAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    }
    const dispatch = useDispatch()
    useEffect(() => {
        fetchHistory(user.id, limit, page).then(data => {
            dispatch(setHistoryAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    },[])
    useEffect(() => {
        fetchHistory(user.id, limit, page).then(data => {
            dispatch(setHistoryAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    },[page])
    const items = useSelector(state => state.userData.listHistory).map(onePart => {
            if (onePart.type === "AutoPart") {
                return <CardsAutopart autoPart={onePart}/>
            } else {
                return <CardsTiers autoTiers={onePart}/>
            }
        }
    )
    return (
        <div>
            <div className={styles.historyAll}>
                <h2 className={styles.history}>История просмотров</h2>
            </div>
            <div className={styles.cards}>
                {items}
            </div>
            <Pages limit={limit} page={page} totalCount={totalCount}/>
            <div className={styles.back}>
                <button className={styles.buttonHistory} onClick={deleteAll}>Очистить историю просмотров</button>
            </div>
            <Foot/>
        </div>
    );
};

export default History;