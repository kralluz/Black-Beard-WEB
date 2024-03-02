import { useState } from "react";
import ContactDetails from "../ContactDetails/ContactDetails";
import {
    FaUserAlt,
    FaWhatsapp,
    FaSearch,
    FaPhoneAlt,
    FaPhone,
} from "react-icons/fa";
import {
    ClientSection,
    ClientDetails,
    ClientName,
    ClientInfo,
    LetterHeader,
    Button,
} from "./styles";
const ClientContact = ({ client }) => {
    const [openContactDetails, setOpenContactDetails] = useState(false);

    const handleMakeCall = () => {
        window.location.href = `tel:${"62985401969"}`;
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/${"62985401969"}`;
        window.open(url, "_blank");
    };
    return (
        <>
            {client.name && (
                <ContactDetails
                    isOpen={openContactDetails}
                    onClose={() => setOpenContactDetails(false)}
                    client={client}
                />
            )}
            <ClientSection key={client.id}>
                <ClientDetails onClick={() => setOpenContactDetails(true)}>
                    {client.name && (
                        <ClientName>
                            <FaUserAlt /> {client.name}
                        </ClientName>
                    )}
                    {client.phone && (
                        <ClientInfo>
                            <FaPhoneAlt /> {client.phone}
                        </ClientInfo>
                    )}
                </ClientDetails>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: " center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: " center",
                            flexWrap: "wrap",
                            gap: "10px",
                        }}
                    >
                        <Button onClick={handleMakeCall}>
                            <FaPhoneAlt />
                             Ligar
                        </Button>
                        <Button onClick={() => openWhatsApp()}>
                            <FaWhatsapp />
                             Conversar
                        </Button>
                    </div>
                </div>
            </ClientSection>
        </>
    );
};
export default ClientContact;
