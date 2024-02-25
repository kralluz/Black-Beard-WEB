import React from "react";
import Header from "../components/Header";
import ToggleDisplayComponent from "../components/HeadToggleDisplay";
import AgendaCards from "../components/AgendaCards";
import EstoqueData from "../components/StockData";
import ActionButton from "../components/ActionButton";

const Home = () => {
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <h1> {"("} nome do barbeiro{")"}</h1>
            <ToggleDisplayComponent //Barra de baixo do header
                agendaComponent={<AgendaCards />}
                estoqueComponent={<EstoqueData />}
            />
            <ActionButton />
        </>
    );
};

export default Home;
