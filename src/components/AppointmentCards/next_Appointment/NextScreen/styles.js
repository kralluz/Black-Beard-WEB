import { motion } from "framer-motion";
import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const NextAppointmentCard = styled(motion.div)`
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    border: 2px solid #f0f0f0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AppointmentDetails = styled.div`
    margin-bottom: 20px;
    color: #333;
`;

export const ServicesSection = styled.div`
    margin-top: 10px;
`;

export const ServicesHeader = styled.h3`
    color: #333;
    margin-bottom: 10px;
`;

export const ServiceItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    color: #333;
`;

export const TotalValue = styled.div`
    font-weight: bold;
    text-align: right;
    margin-top: 10px;
    color: #333;
`;

export const EditIcon = styled(FiEdit2)`
    cursor: pointer;
    color: #000000;
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
    cursor: pointer;
    color: #25d366;
`;

export const DetailHighlight = styled.span`
    color: #000000;
`;

export const Button = styled(motion.button)`
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
