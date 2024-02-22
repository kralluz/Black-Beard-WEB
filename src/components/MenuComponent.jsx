import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { RxScissors } from "react-icons/rx";
import {
    MdSettings,
    MdEventAvailable,
    MdLibraryAddCheck,
} from "react-icons/md";
import { FaUserPlus, FaTools } from "react-icons/fa";

const slideIn = keyframes`
from {
    transform: translateX(100%);
    opacity: 0;
}
to {
    transform: translateX(0%);
    opacity: 1;
}
`;

const fadeIn = keyframes`
from {
    background-color: rgba(0, 0, 0, 0);
}
to {
    background-color: rgba(0, 0, 0, 0.5);
}
`;

const FabContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 2;
`;

const Fab = styled.button`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: #007bff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    transform: rotate(270deg);

    &:focus {
        outline: none;
    }

    .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease;
    }

    &.active .icon-wrapper {
        transform: rotate(-90deg);
    }
`;

const fadeInOption = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FabOptions = styled.div`
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    margin-bottom: 10px;
    animation: ${slideIn} 0.5s ease forwards;
`;

const OptionButton = styled.button`
    background-color: transparent; // Removendo a cor de fundo cinza
    padding: 10px;
    color: white;
    margin-bottom: 5px;
    border: none;
    cursor: pointer;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;

    animation: ${fadeInOption} 0.5s ease forwards;
    animation-delay: ${(props) =>
        props.delay}s; // Cada botão aparece em um momento diferente

    &:last-child {
        margin-bottom: 0;
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: ${(props) => (props.show ? "block" : "none")};
    background-color: #212121c4;
    animation: ${fadeIn} 0.5s ease;
    z-index: 1;
`;

function FloatingActionButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Overlay show={isOpen} onClick={toggleOptions} />
            <FabContainer>
                <FabOptions $isOpen={isOpen}>
                    <OptionButton delay={0.7}>
                        Criar um Plano{" "}
                        <MdLibraryAddCheck
                            style={{ fontSize: "var(--icon-size)" }}
                        />
                    </OptionButton>
                    <OptionButton delay={0.6}>
                        Adicionar um Agendamento{" "}
                        <MdEventAvailable
                            style={{ fontSize: "var(--icon-size)" }}
                        />
                    </OptionButton>
                    <OptionButton delay={0.5}>
                        Adicionar um serviço{" "}
                        <FaTools style={{ fontSize: "var(--icon-size)" }} />
                    </OptionButton>
                    <OptionButton delay={0.3}>
                        Adicionar um cliente{" "}
                        <FaUserPlus style={{ fontSize: "var(--icon-size)" }} />
                    </OptionButton>
                    <OptionButton delay={0.1}>
                        Configurações{" "}
                        <MdSettings style={{ fontSize: "var(--icon-size)" }} />
                    </OptionButton>
                </FabOptions>

                <Fab onClick={toggleOptions} className={isOpen ? "active" : ""}>
                    <div className="icon-wrapper">
                        <RxScissors size={50} />
                    </div>
                </Fab>
            </FabContainer>
        </>
    );
}

export default FloatingActionButton;
