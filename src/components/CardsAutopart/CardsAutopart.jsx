import React from 'react';
import styles from './CardsAutopart.module.css'
import {useNavigate} from "react-router-dom";
import {ONE_ITEM_ROUTE} from "../../utils/const";
import {useDispatch, useSelector} from "react-redux";
import {deleteAutoPart} from "../../http/autoPartAPI";
import {setAutopartAC, setTotalAC} from "../../redux/catalogReducer";
import {createHistory} from "../../http/historyAPI";
import {setSumAC} from "../../redux/userReducer";
import profile from "../../assets/profile.png";

const CardsAutopart = ({autoPart}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userData.user)
    const isAuth = useSelector(state => state.userData.isAuth)
    const del = () => {
        deleteAutoPart(autoPart.id, 1, 12).then(data => {
            dispatch(setAutopartAC(data.rows))
            dispatch(setSumAC(data.sum))
            dispatch(setTotalAC(data.count))
        })
    }
    const history = () => {
        createHistory(user.id, null, autoPart.id).then(data => {
        })
    }
    const navigate = useNavigate()
    return (
        <div className={styles.cardAutopart} key={autoPart.id || "ID автозапчасти"} >
                <div>
                    <div onClick={() => {
                        if (isAuth){
                            history()
                            navigate(ONE_ITEM_ROUTE + "/" + autoPart.id)
                        }else navigate(ONE_ITEM_ROUTE + "/" + autoPart.id)
                    } }>
                        <img src={autoPart.img?'http://62.113.111.238:5000/' + autoPart.img:profile} alt="АВТОЗАПЧАСТЬ" className={styles.autoparts}/>
                        <div className={styles.nameAutoparts}>{autoPart.name || "Название"}</div>
                        <div className={styles.textAutoparts}>{autoPart.car || "Автомобиль"}</div>
                        <div className={styles.textAutoparts}>{autoPart.engine || "Двигатель"}</div>
                        <div className={styles.textAutoparts}>{autoPart.year || "Год"}</div>
                        <div className={styles.textAutoparts}>{autoPart.run || "Пробег"}</div>
                        <div className={styles.prise}>{autoPart.price || "Цена"} р</div>
                    </div>
                    {
                        isAuth ?
                            user.role === 'ADMIN' ?
                                <button className={styles.delete} onClick={del}>Удалить</button>
                                : null : null
                    }
                </div>
                </div>
                );
            };

            export default CardsAutopart;