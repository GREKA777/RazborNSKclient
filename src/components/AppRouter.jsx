import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes/routes";
import {useSelector} from "react-redux";
import NotFound from "./NotFound/NotFound";

const AppRouter = () => {
    const isAuth = useSelector(state => state.userData.isAuth)
    return (
        <Routes>
            {
                publicRoutes.map(({path, element}) =>
                    <Route path={path} element={element} key={path}/>
                )
            }

            {isAuth &&
                authRoutes.map(({path, element}) =>
                    <Route path={path} element={element} key={path}/>
                )
            }
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;