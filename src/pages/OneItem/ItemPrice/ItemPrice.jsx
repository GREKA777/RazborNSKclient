import React from 'react';
import styles from './ItemPrice.module.css'
const ItemPrice = ({autoPart}) => {
    return (
        <div className={styles.itemContent}>
            <div className={styles.itemName}>{autoPart.name || "Название"}</div>
            <div className={styles.itemPrice}>{autoPart.price || "Цена"} p</div>
        </div>
    );
};

export default ItemPrice;