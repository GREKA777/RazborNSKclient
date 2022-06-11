import React from 'react';
import styles from './OneOrder.module.css'
import mainAbout from '../../assets/mainAbout.jpg'
import Foot from "../../components/Foot/Foot";
import {useParams} from "react-router-dom";

const OneOrder = () => {
    const {id} = useParams()
    return (
        <div>
            <div className={styles.orderAll}>
                <div className={styles.orderName}>
                    <h2 className={styles.orderNumber}>Заказ №777</h2>
                    <h2 className={styles.orderData}>от 03.05.2022</h2>
                </div>
            </div>
            <div className={styles.all}>
            <div className={styles.blockOne}>
                <div className={styles.texttOrder}>
                    <div className={styles.nameOrder}>Статус доставки</div>
                    <div className={styles.textOrder}>Получено</div>
                    <button className={styles.buttonFeedback}>Оставить отзыв</button>
                </div>
                <img src={mainAbout} alt="Фото товара" className={styles.photo}/>
            </div>
            <div className={styles.blockTwo}>
            <div className={styles.blockName}>
                <div className={styles.chel}>Получатель</div>
                <div className={styles.info}>Гречко Егор</div>
                <div className={styles.info}>egorka.gre4ko2015@gmail.com</div>
                <div className={styles.info}>+7 923 777 06 08</div>
            </div>
            <div className={styles.double}>
            <div className={styles.blockPay}>
                <div>Оплачено</div>
                <div>Скидка</div>
                <div>Товары</div>
                <div>Доставка</div>
                <div>Итого</div>
            </div>
            <div className={styles.blockPayText}>
                <div>7 777р</div>
                <div>0р</div>
                <div>7 000р</div>
                <div>777р</div>
                <div>7 777р</div>
            </div>
            </div>
            </div>
            </div>
            <Foot/>
        </div>
    );
};

export default OneOrder;