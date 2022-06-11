import React from 'react';
import styles from './About.module.css'
import AboutHead from "./AboutHead/AboutHead";
import AboutCompany from "./AboutCompany/AboutCompany";
import AboutContacts from "./AboutContacts/AboutContacts";
import Foot from "../../components/Foot/Foot";
import AboutConnect from "./AboutConnect/AboutConnect";
const About = () => {
    return (
        <div>
            <AboutHead/>
            <AboutCompany/>
            <AboutContacts/>
            <AboutConnect/>
            <Foot/>
        </div>
    );
};

export default About;