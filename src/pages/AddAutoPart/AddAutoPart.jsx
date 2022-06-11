import React, {useEffect, useState} from 'react';
import AutoCompleteDropDown from "../../components/AutoCompleteDropDown/AutoCompleteDropDown";
import {useDispatch, useSelector} from "react-redux";
import {fetchType} from "../../http/typeAPI";
import {setTypeAC} from "../../redux/specificationReducer";
import styles from "./AddAutoPart.module.css"
import {createAutoPart} from "../../http/autoPartAPI";
import Foot from "../../components/Foot/Foot";

const AddAutoPart = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.spec.listType)
    useEffect(() => {
        fetchType().then(data => {
            dispatch(setTypeAC(data))
        })
    },[])

    const [selectedType, setSelectedType] = useState("")
    const [selectedName, setSelectedName] = useState("")
    const [selectedPrice, setSelectedPrice] = useState("")
    const [selectedNum, setSelectedNum] = useState("")
    const [selectedYear, setSelectedYear] = useState("")
    const [selectedCar, setSelectedCar] = useState("")
    const [selectedEngine, setSelectedEngine] = useState("")
    const [selectedRun, setSelectedRun] = useState("")
    const [selectedDescription, setSelectedDescription] = useState("")
    const [selectedImg, setSelectedImg] = useState("")

    const addAutoPart = () => {
        const formData = new FormData()
        formData.append("name", selectedName)
        formData.append("price", `${selectedPrice}`)
        formData.append("num", selectedNum)
        formData.append("year", `${selectedYear}`)
        formData.append("car", selectedCar)
        formData.append("engine", selectedEngine)
        formData.append("run", `${selectedRun}`)
        formData.append("description", selectedDescription)
        formData.append("img", selectedImg)
        formData.append("typeId", selectedType.id)
        createAutoPart(formData).then(()=>{
            setSelectedName("")
            setSelectedPrice("")
            setSelectedNum("")
            setSelectedYear("")
            setSelectedCar("")
            setSelectedEngine("")
            setSelectedRun("")
            setSelectedDescription("")
            setSelectedImg("")
            setSelectedType("")
        })
    }

    return (
        <div className={styles.all}>
            <div className={styles.add}>
            <div>
                <div className={styles.addAutoPart}>Добавление автозапчастей</div>
            <input type="text" placeholder={"Название автозапчасти"} className={styles.palace} onChange={e => setSelectedName(e.target.value)} value={selectedName}/>
            <input type="number" placeholder={"Цена автозапчасти"} className={styles.palace} onChange={e => setSelectedPrice(e.target.value)} value={selectedPrice}/>
            <input type="text" placeholder={"Номер автозапчасти"} className={styles.palace} onChange={e => setSelectedNum(e.target.value)} value={selectedNum}/>
            <input type="number" placeholder={"Год автозапчасти"} className={styles.palace} onChange={e => setSelectedYear(e.target.value)} value={selectedYear}/>
            </div>
            <div>
            <input type="text" placeholder={"Автомобиль"} className={styles.palace} onChange={e => setSelectedCar(e.target.value)} value={selectedCar}/>
            <input type="text" placeholder={"Двигатель"} className={styles.palace} onChange={e => setSelectedEngine(e.target.value)} value={selectedEngine}/>
            <input type="number" placeholder={"Пробег автозапчасти"} className={styles.palace} onChange={e => setSelectedRun(e.target.value)} value={selectedRun}/>
            <input type="text" placeholder={"Описание автозапчасти"} className={styles.palace} onChange={e => setSelectedDescription(e.target.value)} value={selectedDescription}/>
            </div>
            <div className={styles.type}>
            <AutoCompleteDropDown dropDownName={"Вид запчасти"} optionsData={types} setChosen={setSelectedType} chosen={selectedType}/>
            </div>
            <input type="file" className={styles.img} onChange={e => setSelectedImg(e.target.files[0])}/>
            <button onClick={addAutoPart} className={styles.button}>Добавить</button>
            </div>
            <Foot/>
        </div>
    );
};

export default AddAutoPart;