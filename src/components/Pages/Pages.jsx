import React from 'react';
import styles from "./Pages.module.css"
import {useDispatch} from "react-redux";
import {setPageAC} from "../../redux/catalogReducer";

const Pages = ({limit, totalCount, page}) => {
    const dispatch = useDispatch()
    const pages = []
    const pageCount = Math.ceil(totalCount/limit)
    for (let i = 0; i < pageCount; i++){
        pages.push(i + 1)
    }
    return (
        <div className={styles.cardsbutton}>
            {pages.map(p => {
                return (
                    <button className={p===page ? styles.buttonActive : styles.button} onClick={() => dispatch(setPageAC(p))} key={p}>{p}</button>
                )
            })}
        </div>
    );
};

export default Pages;