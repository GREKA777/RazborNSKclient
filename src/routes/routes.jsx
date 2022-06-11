import {
    ABOUT_US_ROUTE, ADD_AUTOPART, ADD_TIERS, AUTH_ROUTE, BASKET_ROUTE,
    CATALOG_ROUTE,
    FAVOURITE_ROUTE, HISTORY_ROUTE, LOGIN_ROUTE,
    MAIN_ROUTE,
    ONE_ITEM_ROUTE, ONE_ORDER_ROUTE, ONE_TIER_ROUTE, ORDERS_ROUTE,
    PROFILE_ROUTE, PUTIN_ROUTE, READ_ROUTE, RECOMMEND_ROUTE,
    TIRES_ROUTE
} from "../utils/const";
import Main from "../pages/Main/Main";
import Putin from "../pages/Putin/Putin";
import Tiers from "../pages/Tiers/Tiers";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import OneItem from "../pages/OneItem/OneItem";
import Profile from "../pages/Profile/Profile";
import Favourite from "../pages/Favourite/Favourite";
import Basket from "../pages/Basket/Basket";
import History from "../pages/History/History";
import Orders from "../pages/Orders/Orders";
import OneOrder from "../pages/OneOrder/OneOrder";
import Auth from "../pages/Auth/Auth";
import AuthLogin from "../pages/Auth/AuthLogin/AuthLogin";
import AddAutoPart from "../pages/AddAutoPart/AddAutoPart";
import AddTiers from "../pages/AddTiers/AddTiers";
import Read from "../pages/Read/Read";
import OneTiers from "../pages/OneTiers/OneTiers";
import Recommend from "../pages/Recommend/Recommend";
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main/>
    },
    {
        path: TIRES_ROUTE,
        element: <Tiers/>
    },
    {
        path: CATALOG_ROUTE,
        element: <Catalog/>
    },
    {
        path: ABOUT_US_ROUTE,
        element: <About/>
    },
    {
        path: ONE_ITEM_ROUTE + "/:id",
        element: <OneItem/>
    },
    {
        path: ONE_TIER_ROUTE + "/:id",
        element: <OneTiers/>
    },
    {
        path: AUTH_ROUTE,
        element: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        element: <AuthLogin/>
    },
    {
        path: PUTIN_ROUTE,
        element: <Putin/>
    }
]
export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        element: <Profile/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    },
    {
        path: HISTORY_ROUTE,
        element: <History/>
    },
    {
        path: ORDERS_ROUTE,
        element: <Orders/>
    },
    {
        path: FAVOURITE_ROUTE,
        element: <Favourite/>
    },
    {
        path: ADD_AUTOPART,
        element: <AddAutoPart/>
    },
    {
        path: ADD_TIERS,
        element: <AddTiers/>
    },
    {
        path: READ_ROUTE,
        element: <Read/>
    },
    {
        path: ONE_ORDER_ROUTE + "/:id",
        element: <OneOrder/>
    },
    {
        path: RECOMMEND_ROUTE,
        element: <Recommend/>
    }
]