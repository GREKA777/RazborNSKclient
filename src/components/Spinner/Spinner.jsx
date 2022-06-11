import React from 'react';
import styles from './Spinner.module.css'
const Spinner = () => {
    return (
        <div className={styles.body}>
            <div className={styles.center}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>
        </div>
    );
};

export default Spinner;