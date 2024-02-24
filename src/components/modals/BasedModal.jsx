import React from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.816);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalWrapper = styled.div`
    position: fixed;
    background: #ffffff;
    color: #000000;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgb(0, 0, 0);
    z-index: 1001;
    max-width: 500px;
    width: 100%;

    input {
        border: 1px solid #00000059;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    padding:5px;
    top: 0px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #000000;
    cursor: pointer;
`;

const ModalBase = ({ children, isOpen, onClose }) => (
    <Transition in={isOpen} unmountOnExit>
        {(state) => (
            <Backdrop className={state} onClick={onClose}>
                <ModalWrapper
                    className={state}
                    onClick={(e) => e.stopPropagation()}
                >
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                    {children}
                </ModalWrapper>
            </Backdrop>
        )}
    </Transition>
);

export default ModalBase;
