import styled from "styled-components";
import React from "react";
import ModalBase from "../modals/BasedModal";

const NextAppointmentCard = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
`;

const AppointmentDetails = styled.div``;

const ScreenDay = ({ isOpen, onClose }) => {
    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <NextAppointmentCard>
                <h2>segunda-feira 18 de dezembro</h2>
                <AppointmentDetails>
                    <p>Carlos Henrique</p>
                    <p>Vitor Santos</p>
                    <p>Igor Henrique</p>
                </AppointmentDetails>
            </NextAppointmentCard>
        </ModalBase>
    );
};

export default ScreenDay;
