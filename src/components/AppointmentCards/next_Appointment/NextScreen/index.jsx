import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalBase from "../../../BasedModal";

import {
    NextAppointmentCard,
    AppointmentDetails,
    ServicesSection,
    ServicesHeader,
    ServiceItem,
    TotalValue,
    EditIcon,
    WhatsAppIcon,
    Button,
    DetailHighlight,
} from "./styles.js";

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
