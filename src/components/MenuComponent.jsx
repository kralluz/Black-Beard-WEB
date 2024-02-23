import ScreenAddAppointment from "./actionButtonsScreens/ScreenAddAppointment";
import ScreenCreatePlan from "./actionButtonsScreens/ScreenCreatePlan";
import ScreenAddClient from "./actionButtonsScreens/ScreenAddClient";
import ScreenSettings from "./actionButtonsScreens/ScreenSettings";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { RxScissors } from "react-icons/rx";
import {
    MdSettings,
    MdEventAvailable,
    MdLibraryAddCheck,
} from "react-icons/md";
import { FaUserPlus, FaTools } from "react-icons/fa";
import ScreenAddService from "./actionButtonsScreens/ScreenAddService";

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
    width: 65px;
    height: 65px;
    background-color: #1f1f1f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    transform: rotate(270deg);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

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

    const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
    const [isClientModalOpen, setIsClientModalOpen] = useState(false);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    return (
        <>
            <ScreenCreatePlan
                isOpen={isPlanModalOpen}
                onClose={() => setIsPlanModalOpen(false)}
            />
            <ScreenAddAppointment
                isOpen={isAppointmentModalOpen}
                onClose={() => setIsAppointmentModalOpen(false)}
            />
            <ScreenAddService
                isOpen={isServiceModalOpen}
                onClose={() => setIsServiceModalOpen(false)}
            />
            <ScreenAddClient
                isOpen={isClientModalOpen}
                onClose={() => setIsClientModalOpen(false)}
            />
            <ScreenSettings
                isOpen={isSettingsModalOpen}
                onClose={() => setIsSettingsModalOpen(false)}
            />

            <Overlay show={isOpen} onClick={toggleOptions} />
            <FabContainer>
                <FabOptions $isOpen={isOpen}>
                    <OptionButton
                        delay={0.4}
                        onClick={() => setIsPlanModalOpen(true)}
                    >
                        Criar um Plano{" "}
                        <MdLibraryAddCheck
                            style={{ fontSize: "var(--icon-size)" }}
                        />
                    </OptionButton>

                    <OptionButton
                        delay={0.3}
                        onClick={() => setIsAppointmentModalOpen(true)}
                    >
                        Adicionar um Agendamento{" "}
                        <MdEventAvailable
                            style={{ fontSize: "var(--icon-size)" }}
                        />
                    </OptionButton>

                    <OptionButton
                        delay={0.25}
                        onClick={() => setIsServiceModalOpen(true)}
                    >
                        Adicionar um serviço{" "}
                        <FaTools style={{ fontSize: "var(--icon-size)" }} />
                    </OptionButton>
                    <OptionButton
                        delay={0.2}
                        onClick={() => setIsClientModalOpen(true)}
                    >
                        Adicionar um cliente{" "}
                        <FaUserPlus style={{ fontSize: "var(--icon-size)" }} />
                    </OptionButton>
                    <OptionButton
                        delay={0.1}
                        onClick={() => setIsSettingsModalOpen(true)}
                    >
                        Configurações{" "}
                        <MdSettings style={{ fontSize: "var(--icon-size)" }} />
                    </OptionButton>
                </FabOptions>
                <Fab onClick={toggleOptions} className={isOpen ? "active" : ""}>
                    <div className="icon-wrapper">
                        <RxScissors size={40} />
                    </div>
                </Fab>
            </FabContainer>
        </>
    );
}

export default FloatingActionButton;
