import React, {useEffect, useRef, useState} from 'react';
import style from "./Sort.module.css"
import {useDispatch} from 'react-redux';
import {setPageAC} from "../../redux/catalogReducer";

const Sort = ({optionsData, selectedSort, setSelectedSort}) => {

    const [display, setDisplay] = useState(false);
    const wrapperRef = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const {current: wrap} = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    return (
        <div ref={wrapperRef} className={style.all}>
            <button className={style.sort} onClick={() => setDisplay(!display)}>{selectedSort ?
                <div className={style.selector}>
                    <div className={style.title}>{selectedSort.title}</div>
                    <span className="material-icons-outlined">{selectedSort.icon}</span>
                </div> : null
            }</button>
            {display && (
                <div className={style.options}>
                    {optionsData
                        .map((value, i) => {
                            return (
                                <div
                                    onClick={() => {
                                        dispatch(setPageAC(1))
                                        setSelectedSort(value)
                                        setDisplay(false);
                                    }}
                                    key={i}
                                    tabIndex="0"
                                    className={style.content}
                                >
                                    <div className={style.name}>
                                        <div>{value.title}</div>
                                        <span className="material-icons-outlined">{value.icon}</span>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};

export default Sort;