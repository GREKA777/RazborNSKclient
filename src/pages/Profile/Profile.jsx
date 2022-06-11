import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Profile.module.css';
import profile from '../../assets/profile.png'
import {BASKET_ROUTE, FAVOURITE_ROUTE, HISTORY_ROUTE, ORDERS_ROUTE, READ_ROUTE} from "../../utils/const";
import Foot from "../../components/Foot/Foot";
import {useDispatch, useSelector} from "react-redux";
import {edit, updateImg} from "../../http/userAPI";
import {setUserAC} from "../../redux/userReducer";

const Profile = () => {
    const user = useSelector(state => state.userData.user)
    const isAuth = useSelector(state => state.userData.isAuth)
    const users = useSelector(state => state.userData.user)
    const [isEdit, setIsEdit] = useState(true)
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const update = (e) => {
        const formData = new FormData()
        formData.append("img", e.target.files[0])
        formData.append("id", user.id)
        updateImg(formData).then(data => {
            dispatch(setUserAC(data))
        })
    }
    const editProf = () => {
        edit(users.id, name).then(data => {
            dispatch(setUserAC(data))
            setIsEdit(true)
        })
    }
    useEffect(() => {
        setName(users.FIO)
    },[users.FIO])
    return (
        <div>
            <div className={styles.profileAll}>
                <h2 className={styles.profile}>Профиль № {users.id}</h2>
            </div>
            <div className={styles.profileBody}>
                <img src={user.img?'http://localhost:5000/' + user.img:profile} alt="Фото профиля" className={styles.photoProfile}/>
                <div className={styles.profileBodyAll}>
                    <div className={styles.profileBodyText}>
                        <div className={styles.info}>
                            <p>ФИО: </p>
                            <input value={name} className={isEdit?styles.profileBodyFact:styles.profileBodyFactt} readOnly={isEdit} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className={styles.info}>
                            <p>Почта: </p>
                            <p className={styles.profileBodyFact}>{users.email}</p>
                        </div>

                        <div className={styles.info}>
                            <p>Роль: </p>
                            <p className={styles.profileBodyFact}>{users.role}</p>
                        </div>
                        <div className={styles.buttons}>
                            <label>
                                <div className={styles.photoButton}>Изменить фото профиля</div>
                                <input className={styles.red} onChange={e => update(e)} accept={"image/"} type="file"/>
                            </label>
                            {isEdit?
                                <button className={styles.editButton} onClick={() => setIsEdit(false)}>Редактировать профиль</button>:
                                <button className={styles.saveButton} onClick={editProf}>Сохранить изменения</button>
                            }
                        </div>
                    </div>

                    <div className={styles.buttonsProfile}>
                        <NavLink to={BASKET_ROUTE} className={styles.buttonsProfileee}>
                            <button className={styles.buttonsProfilee}>Корзина</button>
                        </NavLink>
                        <NavLink to={FAVOURITE_ROUTE} className={styles.buttonsProfileee}>
                            <button className={styles.buttonsProfilee}>Избранное</button>
                        </NavLink>
                        <NavLink to={HISTORY_ROUTE} className={styles.buttonsProfileee}>
                            <button className={styles.buttonsProfilee}>История просмотров</button>
                        </NavLink>
                        <NavLink to={ORDERS_ROUTE} className={styles.buttonsProfileee}>
                            <button className={styles.buttonsProfilee}>Заказы</button>
                        </NavLink>
                        {isAuth ?
                            user.role === 'ADMIN' ?
                                <NavLink to={READ_ROUTE} className={styles.buttonsProfileee}>
                                    <button className={styles.buttonsProfilee}>Обратная связь</button>
                                </NavLink>
                                : null : null
                        }
                    </div>
                </div>
            </div>
            <Foot/>
        </div>
    );
};

export default Profile;