import React, {useEffect, useState} from 'react';
import styles from './TiersFilter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setTiersAC} from "../../../redux/catalogReducer";
import {fetchTiers} from "../../../http/tiersAPI";
import {ADD_TIERS} from "../../../utils/const";
import {useNavigate} from "react-router-dom";
import {setSelectedSortAC} from "../../../redux/specificationReducer";
import Sort from "../../../components/Sort/Sort";

const TiersFilter = () => {
    const user = useSelector(state => state.userData.user)
    const isAuth = useSelector(state => state.userData.isAuth)
    const listSort = useSelector(state => state.spec.listSort)
    const selectedSort = useSelector(state => state.spec.selectedSort)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [selectedWidth, setSelectedWidth] = useState("")
    const [selectedProfile, setSelectedProfile] = useState("")
    const [selectedDiameter, setSelectedDiameter] = useState("")
    const [selectedName, setSelectedName] = useState("")
    const [selectedQuantity, setSelectedQuantity] = useState("")
    const click = () => {
        fetchTiers(1,9,selectedName, selectedWidth, selectedProfile, selectedDiameter, selectedQuantity,selectedSort.name).then(data => {
            dispatch(setTiersAC(data.rows))
        })
    }
    useEffect(() => {
        fetchTiers(1,12,selectedName, selectedWidth, selectedProfile, selectedDiameter, selectedQuantity, selectedSort.name).then(data => {
            dispatch(setTiersAC(data.rows))
        })
    },[selectedSort])
    const clear = () => {
        setSelectedWidth("")
        setSelectedProfile("")
        setSelectedDiameter("")
        setSelectedName("")
        setSelectedQuantity("")
        fetchTiers(1,9).then(data => {
            dispatch(setTiersAC(data.rows))
        })
    }
    return (
        <div className={styles.mar}>
            <div className={styles.tiersContent}>
                <h2 className={styles.tiersName}>Шины</h2>
                <div>
                    <input type="text" placeholder={"Название шин или их номер"} onChange={e => setSelectedName(e.target.value)} className={styles.searchName} value={selectedName}/>
                    <button className={styles.tiersButton} onClick={click}>Поиск</button>
                    <button className={styles.tiersButton} onClick={clear}>Сбросить</button>
                </div>
                <div>
                    <input type="text" placeholder={"Ширина"} onChange={e => setSelectedWidth(e.target.value)} className={styles.searchWidth} value={selectedWidth}/>
                    <input type="text" placeholder={"Профиль"} onChange={e => setSelectedProfile(e.target.value)} className={styles.searchProfile} value={selectedProfile}/>
                    <input type="text" placeholder={"Диаметр"} onChange={e => setSelectedDiameter(e.target.value)} className={styles.searchDiameter} value={selectedDiameter}/>
                    <input type="text" placeholder={"Кол-во"} onChange={e => setSelectedQuantity(e.target.value)} className={styles.searchQuantity} value={selectedQuantity}/>
                    {isAuth?
                        user.role === 'ADMIN'?
                            <button className={styles.tiersButton} onClick={() => navigate(ADD_TIERS)}>Добавить</button>
                            :null:null
                    }
                </div>
            </div>
            <Sort optionsData={listSort} selectedSort={selectedSort} setSelectedSort={e => dispatch(setSelectedSortAC(e))}/>
        </div>

    );
};

export default TiersFilter;