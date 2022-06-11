import React, {useEffect} from 'react';
import TiersFilter from "./TiersFilter/TiersFilter";
import Foot from "../../components/Foot/Foot";
import styles from './Tiers.module.css'
import CardsTiers from "../../components/CardsTiers/CardsTiers";
import {setPageAC, setTiersAC, setTotalAC} from "../../redux/catalogReducer";
import {useDispatch, useSelector} from "react-redux";
import {fetchTiers} from "../../http/tiersAPI";
import Pages from "../../components/Pages/Pages";

const Tiers = () => {
    const dispatch = useDispatch()
    const limit = useSelector(state => state.catalog.limit)
    const page = useSelector(state => state.catalog.page)
    const totalCount = useSelector(state => state.catalog.totalCount)
    const listSort = useSelector(state => state.spec.selectedSort)
    useEffect(() => {
        fetchTiers(1, limit, null, null, null, null, null, listSort).then(data => {
            dispatch(setTiersAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    }, [])
    useEffect(() => {
        fetchTiers(page, limit, null, null, null, null, null, listSort).then(data => {
            dispatch(setTiersAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    },[page])
    const autoTiers = useSelector(state => state.catalog.listTiers)
    let tier
    if (autoTiers.length !== 0){
        tier = autoTiers.map(oneTiers => <CardsTiers autoTiers={oneTiers}/>)
    }
    return (
        <div>
            <TiersFilter/>
            {autoTiers.length === 0 ?
                <div className={styles.notFound}>Ничего не удалось найти</div> :
                <div className={styles.cards}>
                    {tier}
                </div>
            }
            <Pages totalCount={totalCount} page={page} limit={limit} setPage={p => dispatch(setPageAC(p))}/>
            <Foot/>
        </div>
    );
};

export default Tiers;