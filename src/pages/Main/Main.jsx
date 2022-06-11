import React from 'react';
import Landing from "./Landing/Landing";
import MainAbout from "./MainAbout/MainAbout";
import Feedback from "./Feedback/Feedback";
import Foot from "../../components/Foot/Foot";

const Main = () => {
    return (
        <div>
            <Landing/>
            <MainAbout/>
            <Feedback/>
            <Foot/>
        </div>
    );
};

export default Main;