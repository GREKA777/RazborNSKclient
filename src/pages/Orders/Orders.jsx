import React from 'react';
import CardsOrder from "../../components/CardsOrder/CardsOrder";
import styles from "../Orders/Orders.module.css";
import Foot from "../../components/Foot/Foot";
import {useSelector} from "react-redux";

const Orders = () => {
    const orders = useSelector(state => state.orderrr.listOrder)
    const order = orders.map(oneOrder => <CardsOrder orderr={oneOrder}/>
    )
    return (
        <div>
            <div className={styles.orderAll}>
                <h2 className={styles.order}>Заказы</h2>
            </div>
            {orders.length === 0 ?
                <div className={styles.notFound}>Ничего не удалось найти</div> :
                <div className={styles.cards}>
                    Ни одного заказа не оформлено.
                </div>
            }
            <Foot/>
        </div>
    );
};

export default Orders;