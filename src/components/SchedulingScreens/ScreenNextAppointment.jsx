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

const NextAppointmentModal = ({ isOpen, onClose }) => {
    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <NextAppointmentCard>
                <h2>Próximo Agendamento</h2>
                <AppointmentDetails>
                    <p>Data: 12/02/2022</p>
                    <p>Hora: 14:25</p>
                    <p>Cliente: José da Pinga</p>
                </AppointmentDetails>
            </NextAppointmentCard>
        </ModalBase>
    );
};

export default NextAppointmentModal;
