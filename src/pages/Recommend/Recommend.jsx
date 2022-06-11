import React, {useEffect} from 'react';
import styles from "./Recommend.module.css";
import {useDispatch, useSelector} from "react-redux";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import {fetchRecommendation} from "../../http/autoPartAPI";
import {setRecAC} from "../../redux/specificationReducer";

const Recommend = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchRecommendation().then(data => {
            dispatch(setRecAC(data))
        })
    },[])
    const autoParts = useSelector(state => state.spec.listRec)
    const part = autoParts.map(onePart => <CardsAutopart autoPart={onePart}/>)
    return (
        <div className={styles.all}>
            <div className={styles.rec}>Рекомендации</div>
            {autoParts.length === 0?
                <div className={styles.notFound}>Рекомендации не выявлены</div> :
                <div className={styles.cards}>
                    {part}
                </div>
            }
        </div>
    );
};

export default Recommend;