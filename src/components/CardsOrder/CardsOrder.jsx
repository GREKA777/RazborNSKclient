import React from 'react';
import styles from "../CardsOrder/CardsOrder.module.css";
import mainAbout from "../../assets/mainAbout.jpg";
import {NavLink} from "react-router-dom";
import {ONE_ORDER_ROUTE} from "../../utils/const";
const CardsOrder = ({orderr}) => {
    return (
        <NavLink className={styles.cardOrderss} to={ONE_ORDER_ROUTE + "/" + orderr.id}>
            <div className={styles.cardOrders} key={orderr.id}>
                <div className={styles.nameOrder}>Заказ от {orderr.data}</div>
                <div className={styles.textOrder}>{orderr.num}</div>
                <div className={styles.nameOrder}>Статус доставки</div>
                <div className={styles.textOrder}>{orderr.status}</div>
                <img src={mainAbout} alt="АВТОЗАПЧАСТЬ" className={styles.order}/>
            </div>
        </NavLink>
    );
};

export default CardsOrder;