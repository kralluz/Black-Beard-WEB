import React from "react";
import ToggleDisplayComponent from "../components/HeadToggleDisplay";
import MainContent from "../components/MainContent";
import ERPContent from "../components/ERPContent";
import ActionButton from "../components/ActionButton";

const Home = () => {
    return (
        <>
            <h1>
                {" "}
                {"("} nome do barbeiro{")"}
            </h1>
            <ToggleDisplayComponent //Barra de baixo do header
                MainContentComponent={<MainContent />}
                estoqueComponent={<ERPContent />}
            />
            <ActionButton />
        </>
    );
};

export default Home;
