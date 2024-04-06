import React, { useState } from "react";
import styled from "styled-components";

const SubHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100vw;
    max-width: 500px;
    display: flex;
    justify-content: center;
`;
const ButtonContainer = styled.div`
    width: calc(100vw - 30px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const Button = styled.button`
    position: relative;
    background-color: #212121;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    outline: none;
    width: calc(50% - 7.5px);
    font-size: .9em;
    &:nth-child(${(props) => props.$active}){
        &::after{
            background-color: #EDB784;
        }
    }
    &::after{
        content: "";
        position: absolute;
        width: calc(100% - 30px);
        height: 3px;
        border-radius: 3px;
        background-color: #212121;
        bottom: 3px;
        left: 50%;
        transform: translateX(-50%);
        transition: .2s;
    }
`;

const ToggleDisplayComponent = ({ MainContentComponent, estoqueComponent }) => {
    const [activeTab, setActiveTab] = useState("agenda");
    const [indexOfActive, setIndexOfActive ] = useState(1);
    return (
        <>
            <SubHeader>
                <Container>
                    <ButtonContainer>
                        <Button
                            onClick={() => setIndexOfActive(1)}
                            $active={indexOfActive}
                        >
                            Agenda
                        </Button>
                        <Button
                            onClick={() => setIndexOfActive(2)}
                            $active={indexOfActive}
                        >
                            Estoque  
                        </Button>
                    </ButtonContainer>
                </Container>
            </SubHeader>
            {indexOfActive === 1 ? MainContentComponent : estoqueComponent}
        </>
    );
};

export default ToggleDisplayComponent;
