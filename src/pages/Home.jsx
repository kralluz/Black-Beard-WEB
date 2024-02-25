import React from "react";
import Header from "../components/Header";
import FloatingActionButton from "../components/ActionButton";
import ToggleDisplayComponent from "../components/HeadToggleDisplay";
import AgendaCards from "../components/AgendaCards";
import EstoqueData from "../components/StockData";

const Home = () => {
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <h1>Olá barbeiro</h1>
            <ToggleDisplayComponent
                agendaComponent={<AgendaCards />}
                estoqueComponent={<EstoqueData />}
            />
            <FloatingActionButton />
        </>
    );
};

export default Home;
