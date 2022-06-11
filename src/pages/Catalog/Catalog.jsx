import React, {useEffect} from 'react';
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import Foot from "../../components/Foot/Foot";
import styles from './Catalog.module.css'
import {useDispatch, useSelector} from "react-redux";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import {fetchAutoParts} from "../../http/autoPartAPI";
import {setAutopartAC, setPageAC, setTotalAC} from "../../redux/catalogReducer";
import Pages from "../../components/Pages/Pages";

const Catalog = () => {
    const dispatch = useDispatch()
    const limit = useSelector(state => state.catalog.limit)
    const page = useSelector(state => state.catalog.page)
    const totalCount = useSelector(state => state.catalog.totalCount)
    const listSort = useSelector(state => state.spec.selectedSort)
    useEffect(() => {
        dispatch(setPageAC(1))
        fetchAutoParts(1, limit, null, null, null, listSort).then(data => {
            dispatch(setAutopartAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    }, [])
    useEffect(() => {
        fetchAutoParts(page, limit, null, null, null, listSort).then(data => {
            dispatch(setAutopartAC(data.rows))
            dispatch(setTotalAC(data.count))
        })
    },[page])

    const autoParts = useSelector(state => state.catalog.listAutopart)
    const part = autoParts.map(onePart => <CardsAutopart autoPart={onePart}/>)
    return (
        <div>
            <CatalogFilter/>
            {autoParts.length === 0 ?
                <div className={styles.notFound}>Ничего не удалось найти</div> :
                <div className={styles.cards}>
                    {part}
                </div>
            }
            <Pages totalCount={totalCount} page={page} limit={limit} setPage={p => dispatch(setPageAC(p))}/>
            <Foot/>
        </div>
    );
};

export default Catalog;