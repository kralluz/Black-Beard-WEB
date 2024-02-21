import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { RxScissors } from "react-icons/rx";

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
    z-index: 2; // Assegura que esteja acima do Overlay
`;

const Fab = styled.button`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: #007bff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const FabOptions = styled.div`
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    margin-bottom: 10px;
    animation: ${slideIn} 0.5s ease forwards;
`;

const OptionButton = styled.button`
    background-color: #6c757d;
    color: white;
    margin-bottom: 5px;
    border: none;
    cursor: pointer;
    animation: ${slideIn} 0.5s ease forwards;
    animation-delay: ${(props) => props.delay}s;

    &:last-child {
        margin-bottom: 0;
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${(props) => (props.show ? "block" : "none")};
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 0.5s ease;
    z-index: 1; // Assegura que esteja abaixo dos botões mas acima do resto
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
                    <OptionButton delay={0.1}>Opção 1</OptionButton>
                    <OptionButton delay={0.2}>Opção 2</OptionButton>
                    <OptionButton delay={0.3}>Opção 3</OptionButton>
                    <OptionButton delay={0.4}>Opção 4</OptionButton>
                    <OptionButton delay={0.5}>Opção 5</OptionButton>
                    <OptionButton delay={0.6}>Opção 6</OptionButton>
                </FabOptions>

                <Fab onClick={toggleOptions}>
                    <i className="fas fa-plus">
                        <RxScissors size={50} />
                    </i>{" "}
                </Fab>
            </FabContainer>
        </>
    );
}

export default FloatingActionButton;
