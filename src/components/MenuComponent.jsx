import React, { useState } from "react";
import styled from "styled-components";
import { RxScissors } from "react-icons/rx";

const FabContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    margin-bottom: 10px;
`;

const OptionButton = styled.button`
    background-color: #6c757d;
    color: white;
    margin-bottom: 5px;
    border: none;
    cursor: pointer;

    &:last-child {
        margin-bottom: 0;
    }
`;

function FloatingActionButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    return (
        <FabContainer>
            <FabOptions isOpen={isOpen}>
                <OptionButton>Opção 1</OptionButton>
                <OptionButton>Opção 2</OptionButton>
                <OptionButton>Opção 2</OptionButton>
                <OptionButton>Opção 2</OptionButton>
                <OptionButton>Opção 2</OptionButton>
                <OptionButton>Opção 2</OptionButton>
            </FabOptions>

            <Fab onClick={toggleOptions}>
                <i className="fas fa-plus"><RxScissors size={50}/></i>{" "}
            </Fab>
        </FabContainer>
    );
}

export default FloatingActionButton;
