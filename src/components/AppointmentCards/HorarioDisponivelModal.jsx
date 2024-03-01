import { FaSquarePlus, FaEye } from "react-icons/fa6";
import ModalBase from "../modals/BasedModal";
import React, { useState } from "react";
import styled from "styled-components";
import AppointmentPanel from "../actionButtons/scheduleManagement/AppointmentPanel.jsx";
import { RiEyeLine } from "react-icons/ri";
import { slots } from "../../responses/slots";
import dayjs from "dayjs";
import EscolhaClienteModal from "./EscolhaClienteModal.jsx";

const AppointmentSection = styled.div`
    margin-top: 20px;
    width: 100%;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const Item = styled.li`
    background: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => (props.ocupado ? "#f8f8d7" : "#d4edda")};
`;

const Info = styled.div`
    width: 100%;
`;

const ViewButton = styled.button`
    background: transparent;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
`;

const HorarioDisponivelModal = ({ isOpen, onClose, selectedDate }) => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [showAppointmentPanel, setShowAppointmentPanel] = useState(null);
    const [showEscolhaCliente, setShowEscolhaCliente] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    function formatarData(data) {
        const diasDaSemana = [
            "domingo",
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
        ];
        const meses = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro",
        ];

        const dataObj = new Date(data);
        const diaSemana = diasDaSemana[dataObj.getDay()];
        const dia = dataObj.getDate();
        const mes = meses[dataObj.getMonth()];

        return `${diaSemana}, dia ${dia} de ${mes}`;
    }

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    const handleNext = () => {
    };

    function extrairHorario(data) {
        const dataObj = new Date(data);
        const horas = dataObj.getUTCHours().toString().padStart(2, "0");
        const minutos = dataObj.getUTCMinutes().toString().padStart(2, "0");
        return `${horas}:${minutos}`;
    }

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <div style={{ padding: "20px" }}>
                <h2>Horários para{formatarData(selectedDate)}</h2>
                <AppointmentSection>
                    <List>
                        {slots.map((slot, index) => (
                            <Item key={index} ocupado={slot.ocupado}>
                                {selectedSlot === index && (
                                    <EscolhaClienteModal
                                        date={selectedDate}
                                        hour={slot.appointment_date}
                                        isOpen={selectedSlot === index}
                                        onClose={() => setSelectedSlot(null)}
                                    />
                                )}
                                <Info>
                                    <div>
                                        Horário:{" "}
                                        <strong>
                                            {extrairHorario(
                                                slot.appointment_date
                                            )}
                                        </strong>
                                    </div>
                                    <div>
                                        Status:{" "}
                                        {slot.ocupado ? "Ocupado" : "Vazio"}
                                    </div>
                                </Info>
                                {!slot.ocupado ? (
                                    <ViewButton
                                        onClick={() => setSelectedSlot(index)}
                                    >
                                        <FaSquarePlus size={24} />
                                    </ViewButton>
                                ) : (
                                    <>
                                        <ViewButton
                                            onClick={() =>
                                                setSelectedSlot(index)
                                            }
                                        >
                                            <FaEye />
                                        </ViewButton>
                                        {selectedSlot === index && (
                                            <AppointmentPanel
                                                isOpen={selectedSlot === index}
                                                onClose={() =>
                                                    setSelectedSlot(null)
                                                }
                                                client={slot.client}
                                            />
                                        )}
                                    </>
                                )}
                            </Item>
                        ))}
                    </List>
                </AppointmentSection>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "20px",
                    }}
                >
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={handleNext} disabled={!selectedTime}>
                        Próximo
                    </button>
                </div>
            </div>
        </ModalBase>
    );
};
export default HorarioDisponivelModal;
