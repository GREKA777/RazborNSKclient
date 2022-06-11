import React, {useEffect, useState} from 'react';
import styles from './CatalogFilter.module.css';
import AutoCompleteDropDown from "../../../components/AutoCompleteDropDown/AutoCompleteDropDown";
import {fetchType} from "../../../http/typeAPI";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedSortAC, setTypeAC} from "../../../redux/specificationReducer";
import {fetchAutoParts} from "../../../http/autoPartAPI";
import {setAutopartAC, setTotalAC} from "../../../redux/catalogReducer";
import {useNavigate} from "react-router-dom";
import {ADD_AUTOPART} from "../../../utils/const";
import Sort from "../../../components/Sort/Sort";

const CatalogFilter = () => {
    const user = useSelector(state => state.userData.user)
    const isAuth = useSelector(state => state.userData.isAuth)
    const listSort = useSelector(state => state.spec.listSort)
    const selectedSort = useSelector(state => state.spec.selectedSort)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const types = useSelector(state => state.spec.listType)
    useEffect(() => {
        fetchType().then(data => {
            dispatch(setTypeAC(data))
        })
    },[])
    const [selectedType, setSelectedType] = useState("")
    const [selectedName, setSelectedName] = useState("")
    const [selectedCar, setSelectedCar] = useState("")
    const click = () => {
        fetchAutoParts(1,12,selectedName, selectedCar, selectedType.id,selectedSort.name).then(data => {
            dispatch(setAutopartAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    }
    useEffect(() => {
        fetchAutoParts(1,12,selectedName, selectedCar, selectedType.id, selectedSort.name).then(data => {
            dispatch(setAutopartAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    },[selectedSort])
    const clear = () => {
        setSelectedType("")
        setSelectedName("")
        setSelectedCar("")
        fetchAutoParts(1,12).then(data => {
            dispatch(setAutopartAC(data.rows))
        })
    }
    return (
        <div className={styles.mar}>
            <div className={styles.catalogContent}>
            <h2 className={styles.catalogName}>Запчасти</h2>
            <div>
                <input type="text" placeholder={"Название запчасти или её номер"} onChange={e => setSelectedName(e.target.value)} className={styles.searchName} value={selectedName}/>
                <button className={styles.catalogButton} onClick={click}>Поиск</button>
                <button className={styles.catalogButton} onClick={clear}>Сбросить</button>
            </div>
            <div className={styles.drop}>
                <input type="text" placeholder={"Марка и модель авто"} onChange={e => setSelectedCar(e.target.value)} className={styles.searchModel} value={selectedCar}/>
                <AutoCompleteDropDown dropDownName={"Вид запчасти"} optionsData={types} setChosen={setSelectedType} chosen={selectedType}/>
                {isAuth?
                    user.role === 'ADMIN'?
                        <button className={styles.catalogButtonn} onClick={() => navigate(ADD_AUTOPART)}>Добавить</button>
                        :null:null
                }
            </div>
            </div>
            <Sort optionsData={listSort} selectedSort={selectedSort} setSelectedSort={e => dispatch(setSelectedSortAC(e))}/>
        </div>
    );
};

export default CatalogFilter;