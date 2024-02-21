import React from "react";
import Header from "../components/Header";
import ScheduleComponent from "../components/ScheduleComponent";
import WeeklySummaryComponent from "../components/WeeklySummaryComponent";
import MonthSummaryComponent from "../components/MonthSummaryComponent";
import MenuComponent from "../components/MenuComponent";
import NextAppointmentComponent from "../components/NextAppointmentComponent";
import ToggleDisplayComponent from "../components/ToggleDisplayComponent";
import AgendaCards from "../components/AgendaCards";
import EstoqueData from "../components/EstoqueData";


const Home = () => {

    return (
        <>
        <Header/>
        <br />
        <br />
        <br />
            <h1>Olá barbeiro</h1>
            <ToggleDisplayComponent agendaComponent={<AgendaCards/>} estoqueComponent={<EstoqueData />} />
            <MenuComponent/>
        </>
    );
};

export default Home;
