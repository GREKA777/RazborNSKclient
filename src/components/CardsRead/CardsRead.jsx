import React from 'react';
import styles from "./CardsRead.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setConnectAC} from "../../redux/connectReducer";
import {deleteConnect} from "../../http/connectAPI";

const CardsRead = ({con}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userData.user)
    const isAuth = useSelector(state => state.userData.isAuth)
    const del = () => {
        deleteConnect(con.id, 1, 12).then(data => {
            dispatch(setConnectAC(data))
        })
    }
    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.name}>{con.name}</div>
                <div className={styles.email}>{con.email}</div>
                <div className={styles.topic}>{con.topic}</div>
                <div className={styles.text}>{con.text}</div>
                {isAuth ?
                    user.role === 'ADMIN' ?
                        <button className={styles.delete} onClick={del}>Удалить</button>
                        : null : null
                }
            </div>
        </div>
    );
};

export default CardsRead;