import React from 'react';
import styled from 'styled-components';

// Estilos do Backdrop
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
    transition: opacity 300ms ease-in-out;
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
`;

// Estilos do ModalWrapper
const ModalWrapper = styled.div`
    position: fixed;
    background: #ffffff;
    color: #000000;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    z-index: 1001;
    width: 90vw;
    max-width: 500px; // Adicionado um max-width para melhor visualização em telas grandes
    overflow: auto;
`;

// Estilos do CloseButton
const CloseButton = styled.button`
    position: absolute;
    padding: 5px;
    top: 0px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #000000;
    cursor: pointer;
`;

// Hook para bloquear/desbloquear a rolagem do corpo da página
const useLockBodyScroll = (lock) => {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    if (lock) {
      document.body.style.overflow = 'hidden';
    }
    return () => document.body.style.overflow = originalStyle;
  }, [lock]);
};

// Componente ModalBase reescrito
const ModalBase = ({ children, isOpen, onClose }) => {
  // Utiliza o hook personalizado para controlar a rolagem do corpo da página
  useLockBodyScroll(isOpen);

  if (!isOpen) return null;

  return (
    <Backdrop isOpen={isOpen} onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalWrapper>
    </Backdrop>
  );
};

export default ModalBase;
