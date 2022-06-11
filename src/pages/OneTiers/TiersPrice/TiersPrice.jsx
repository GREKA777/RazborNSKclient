import React from 'react';
import styles from './TiersPrice.module.css'
const TiersPrice = ({tiers}) => {
    return (
        <div className={styles.itemContent}>
            <div className={styles.itemName}>{tiers.name || "Название"}</div>
            <div className={styles.itemPrice}>{tiers.price || "Цена"} p</div>
        </div>
    );
};

export default TiersPrice;