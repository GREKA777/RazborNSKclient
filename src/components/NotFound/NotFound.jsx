import React from 'react';
import styles from './NotFound.module.css'
const NotFound = () => {
    return (
        <div className={styles.all}>
            404
        <div className={styles.text}>
            Страница не найдена
        </div>
        </div>
    );
};

export default NotFound;