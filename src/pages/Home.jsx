import React from "react";
import ToggleDisplayComponent from "../components/HeadToggleDisplay";
import MainContent from "../components/MainContent";
import ERPContent from "../components/ERPContent";
import ActionButton from "../components/ActionButton";
import HeaderComponent from "../components/header/header";

const Home = () => {
    return (
        <>
            <HeaderComponent />
            <ToggleDisplayComponent //Barra de baixo do header
                MainContentComponent={<MainContent />}
                estoqueComponent={<ERPContent />}
            />
            <ActionButton />
        </>
    );
};

export default Home;
