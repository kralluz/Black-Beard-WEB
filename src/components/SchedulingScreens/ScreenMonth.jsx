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

const ScreenMonth = ({ isOpen, onClose }) => {
    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <NextAppointmentCard>
                <h2>dezembro</h2>
                <AppointmentDetails>
                    <h3>Comparativo semanal</h3>
                    <p>
                        Resumo do mês principais dias 1-2-3-4-5-6-7 receita
                        total R$3.486,45 total de agendamentos 285 taxa de
                        agendamentos 75%
                    </p>
                </AppointmentDetails>
            </NextAppointmentCard>
        </ModalBase>
    );
};

export default ScreenMonth;
