import React, {useEffect, useState} from 'react';
import TiersPrice from "./TiersPrice/TiersPrice";
import TiersCharacteristic from "./TiersCharacteristic/TiersCharacteristic";
import mainAbout from '../../assets/mainAbout.jpg'
import styles from './OneTiers.module.css'
import Foot from "../../components/Foot/Foot";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchTier} from "../../http/tiersAPI";
import profile from "../../assets/profile.png";

const OneTiers = () => {
    const {id} = useParams()
    const [tiers, setTiers] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        fetchTier(id).then(data => setTiers(data))
    }, [])
    return (
        <div>
            <TiersPrice tiers={tiers}/>
            <div className={styles.grid}>
            <TiersCharacteristic tiers={tiers}/>
            <div className={styles.photoAll}>
                <img src={tiers.img?'http://localhost:5000/' + tiers.img:profile} alt="Фото автозапчасти" className={styles.photo}/>
            </div>
            </div>
            <Foot/>
        </div>
    );
};

export default OneTiers;