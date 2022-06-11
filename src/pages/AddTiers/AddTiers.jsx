import React, {useState} from 'react';
import styles from "../AddTiers/AddTiers.module.css";
import {createTiers} from "../../http/tiersAPI";
import Foot from "../../components/Foot/Foot";

const AddTiers = () => {

    const [selectedName, setSelectedName] = useState("")
    const [selectedPrice, setSelectedPrice] = useState("")
    const [selectedNum, setSelectedNum] = useState("")
    const [selectedWidth, setSelectedWidth] = useState("")
    const [selectedProfile, setSelectedProfile] = useState("")
    const [selectedDiameter, setSelectedDiameter] = useState("")
    const [selectedCount, setSelectedCount] = useState("")
    const [selectedImg, setSelectedImg] = useState("")

    const addTiers = () => {
        const formData = new FormData()
        formData.append("name", selectedName)
        formData.append("price", `${selectedPrice}`)
        formData.append("num", selectedNum)
        formData.append("width", `${selectedWidth}`)
        formData.append("profile", selectedProfile)
        formData.append("diameter", selectedDiameter)
        formData.append("count", `${selectedCount}`)
        formData.append("img", selectedImg)

        createTiers(formData).then(()=>{
            setSelectedName("")
            setSelectedPrice("")
            setSelectedNum("")
            setSelectedWidth("")
            setSelectedProfile("")
            setSelectedDiameter("")
            setSelectedCount("")
            setSelectedImg("")
        })
    }
    return (
        <div className={styles.all}>
            <div className={styles.add}>
            <div>
                <div className={styles.addTiers}>Добавление автошин</div>
            <input type="text" placeholder={"Название шин"} className={styles.palace} onChange={e => setSelectedName(e.target.value)} value={selectedName}/>
            <input type="number" placeholder={"Цена шин"} className={styles.palace} onChange={e => setSelectedPrice(e.target.value)} value={selectedPrice}/>
                <input type="text" placeholder={"Номер шин"} className={styles.palace} onChange={e => setSelectedNum(e.target.value)} value={selectedNum}/>
                <input type="number" placeholder={"Ширина"} className={styles.palace} onChange={e => setSelectedWidth(e.target.value)} value={selectedWidth}/>
            </div>
            <div>
            <input type="number" placeholder={"Профиль"} className={styles.palace} onChange={e => setSelectedProfile(e.target.value)} value={selectedProfile}/>
            <input type="number" placeholder={"Диаметр"} className={styles.palace} onChange={e => setSelectedDiameter(e.target.value)} value={selectedDiameter}/>
            <input type="number" placeholder={"Количество"} className={styles.palace} onChange={e => setSelectedCount(e.target.value)} value={selectedCount}/>
                <input type="file" className={styles.img} onChange={e => setSelectedImg(e.target.files[0])}/>
            </div>
            <button onClick={addTiers} className={styles.button}>Добавить</button>
            </div>
            <Foot/>
        </div>
    );

};

export default AddTiers;