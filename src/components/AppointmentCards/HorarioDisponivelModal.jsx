import { FaSquarePlus, FaEye } from "react-icons/fa6";
import ModalBase from "../modals/BasedModal";
import React, { useState } from "react";
import styled from "styled-components";
import AppointmentCRUD from "../modals/AppointmentCRUD";
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
    background-color: ${(props) => (props.x ? "#f8f8d7" : "#d4edda")};
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
    // Estado para gerenciar a seleção do horário
    const [selectedTime, setSelectedTime] = useState(null);
    const [showAppointmentCRUD, setShowAppointmentCRUD] = useState(null);
    const [showEscolhaCliente, setShowEscolhaCliente] = useState(null);

    // Função para manipular a seleção do horário
    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    // Função para prosseguir para a próxima etapa (pode ser ajustada conforme necessário)
    const handleNext = () => {
        console.log("Proceder para a seleção do cliente");
        // Aqui você pode implementar a lógica para abrir o próximo modal
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <div style={{ padding: "20px" }}>
                <h2>Data Selecionada: {selectedDate}</h2>
                <AppointmentSection>
                    <List>
                        {slots.map((slot, index) => (
                            <>
                                <EscolhaClienteModal
                                    date={slot.appointment_date}
                                    isOpen={showEscolhaCliente}
                                    onClose={() => setShowEscolhaCliente(false)}
                                />

                                <Item
                                    key={index}
                                    x={slot.ocupado ? true : false}
                                >
                                    <Info>
                                        <div>
                                            Horário:{" "}
                                            <strong>
                                                {dayjs(
                                                    slot.appointment_date
                                                ).format("HH:mm")}
                                            </strong>
                                        </div>
                                        <div>
                                            Status:{" "}
                                            {slot.ocupado ? "Ocupado" : "Vazio"}
                                        </div>
                                    </Info>
                                    {!slot.ocupado ? (
                                        <ViewButton
                                            onClick={() => {
                                                setShowEscolhaCliente(true);
                                            }}
                                        >
                                            <FaSquarePlus size={24} />
                                        </ViewButton>
                                    ) : (
                                        <>
                                            <ViewButton
                                                onClick={() =>
                                                    setShowAppointmentCRUD(true)
                                                }
                                            >
                                                <FaEye />
                                            </ViewButton>
                                            <AppointmentCRUD
                                                isOpen={showAppointmentCRUD}
                                                onClose={() =>
                                                    setShowAppointmentCRUD(
                                                        false
                                                    )
                                                }
                                                client={slot.client}
                                            />
                                        </>
                                    )}
                                </Item>
                            </>
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
