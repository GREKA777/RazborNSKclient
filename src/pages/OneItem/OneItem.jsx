import React, {useEffect, useState} from 'react';
import ItemPrice from "./ItemPrice/ItemPrice";
import ItemCharacteristic from "./ItemCharacteristic/ItemCharacteristic";
import styles from './OneItem.module.css'
import Foot from "../../components/Foot/Foot";
import {useDispatch} from "react-redux";
import {fetchAutoPart} from "../../http/autoPartAPI";
import {useParams} from "react-router-dom";
import profile from "../../assets/profile.png";

const OneItem = () => {
    const {id} = useParams()
    const [autoPart, setAutopart] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        fetchAutoPart(id).then(data => setAutopart(data))
    }, [])
    return (
        <div>
            <ItemPrice autoPart={autoPart}/>
            <ItemCharacteristic autoPart={autoPart}/>
            <div className={styles.photoAll}>
                <img src={autoPart.img?'http://localhost:5000/' + autoPart.img:profile} alt="Фото автозапчасти" className={styles.photo}/>
                <div className={styles.photoSmallAll}></div>
            </div>
            <Foot/>
        </div>
    );
};

export default OneItem;