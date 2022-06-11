import React, {useEffect} from 'react';
import CardsRead from "../../components/CardsRead/CardsRead";
import {fetchConnect} from "../../http/connectAPI";
import {useDispatch, useSelector} from "react-redux";
import {setConnectAC} from "../../redux/connectReducer";
import styles from './Read.module.css'

const Read = () => {
    const connect = useSelector(state => state.connect.listConnect)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchConnect().then((data) => {
            dispatch(setConnectAC(data))
        })
    },[])
    return (
        <div className={styles.mar}>
            {connect.length===0?
                <div className={styles.text}>В данный момент сообщений нет</div>:
                connect.map(c => (
                    <CardsRead con={c} key={c.id}/>
                    )
                )
            }
        </div>
    );
};

export default Read;