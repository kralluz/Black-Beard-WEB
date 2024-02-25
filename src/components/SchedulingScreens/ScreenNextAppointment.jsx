import styled from "styled-components";
import React, { useState } from "react";
import ModalBase from "../modals/BasedModal";
import { FiEdit2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const NextAppointmentCard = styled(motion.div)`
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    border: 2px solid #f0f0f0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AppointmentDetails = styled.div`
    margin-bottom: 20px;
    color: #333;
`;

const ServicesSection = styled.div`
    margin-top: 10px;
`;

const ServicesHeader = styled.h3`
    color: #333;
    margin-bottom: 10px;
`;

const ServiceItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    color: #333;
`;

const TotalValue = styled.div`
    font-weight: bold;
    text-align: right;
    margin-top: 10px;
    color: #333;
`;

const EditIcon = styled(FiEdit2)`
    cursor: pointer;
    color: #000000;
`;

const WhatsAppIcon = styled(FaWhatsapp)`
    cursor: pointer;
    color: #25d366;
`;

const DetailHighlight = styled.span`
    color: #000000;
`;

const Button = styled(motion.button)`
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #000000;
    color: white;
    font-weight: bold;
    margin-top: 10px;
    &:hover {
        background-color: #000000;
    }
`;

const ScreenNextAppointmentModal = ({ isOpen, onClose, nextAppointment }) => {
    const [appointment, setAppointment] = useState({
        date: "12/02/2022",
        time: "14:25",
        clientName: "José da Pinga",
        phoneNumber: "+5562985401969",
        services: [
            { id: 1, name: "Corte", value: 30 },
            { id: 2, name: "Barba", value: 20 },
        ],
    });

    const handleEdit = (field) => {
        // Implementar a lógica de edição aqui, possivelmente utilizando um modal ou um prompt
    };

    const totalValue = nextAppointment.service.reduce(
        (total, service) => total + service.price,
        0
    );

    const openWhatsApp = (number) => {
        const url = `https://wa.me/${number}`;
        window.open(url, "_blank");
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <NextAppointmentCard
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Próximo Agendamento </h2>
                <AppointmentDetails>
                    <p>
                        Data:{" "}
                        <DetailHighlight>{appointment.date}</DetailHighlight>{" "}
                        <EditIcon onClick={() => handleEdit("date")} />
                    </p>
                    <p>
                        Hora:{" "}
                        <DetailHighlight>{appointment.time}</DetailHighlight>{" "}
                        <EditIcon onClick={() => handleEdit("time")} />
                    </p>
                    <p>
                        Cliente:{" "}
                        <DetailHighlight>
                            {nextAppointment.client.name}
                        </DetailHighlight>{" "}
                        <EditIcon onClick={() => handleEdit("clientName")} />
                    </p>
                    <p>
                        Telefone:{" "}
                        <DetailHighlight>
                            {nextAppointment.client.phone}
                        </DetailHighlight>{" "}
                        <WhatsAppIcon
                            onClick={() =>
                                openWhatsApp(appointment.phoneNumber)
                            }
                        />
                        <EditIcon onClick={() => handleEdit("phoneNumber")} />
                    </p>
                </AppointmentDetails>
                <ServicesSection>
                    <ServicesHeader>Serviços</ServicesHeader>
                    {nextAppointment.service.map((service) => (
                        <ServiceItem key={service.id}>
                            <span>{service.name}</span>
                            <span>R$ {service.price}</span>
                        </ServiceItem>
                    ))}
                    <TotalValue>Valor Total: R$ {totalValue}</TotalValue>
                </ServicesSection>
            </NextAppointmentCard>
        </ModalBase>
    );
};

export default ScreenNextAppointmentModal;
