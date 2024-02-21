import React from "react";
import Header from "../components/Header";
import ScheduleComponent from "../components/ScheduleComponent";
import WeeklySummaryComponent from "../components/WeeklySummaryComponent";
import MonthSummaryComponent from "../components/MonthSummaryComponent";
import MenuComponent from "../components/MenuComponent";
import NextAppointmentComponent from "../components/NextAppointmentComponent";


const Home = () => {

    return (
        <>
        <Header/>
        <br />
        <br />
        <br />
            <h1>Olá barbeiro</h1>
            <NextAppointmentComponent/>
            <ScheduleComponent/>
            <WeeklySummaryComponent/>
            <MonthSummaryComponent/>
            <MenuComponent/>
        </>
    );
};

export default Home;
