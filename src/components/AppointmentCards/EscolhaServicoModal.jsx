import { services } from "../../responses/services";
import React from "react";
import ModalBase from "../modals/BasedModal";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import ServiceSelector from "../inputs/InputSelectService.jsx";
import ClientContact from "../globalComponents/ClientContact.jsx";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-top: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:first-child {
        background-color: #f44336; // Vermelho
        color: white;
    }

    &:last-child {
        background-color: #4caf50; // Verde
        color: white;
    }
`;

const EscolhaServicoModal = ({ client, isOpen, onClose, date, hour }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        onServicoEscolhido();
    };

    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

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

    function extrairHorario(data) {
        const dataObj = new Date(data);
        const horas = dataObj.getUTCHours().toString().padStart(2, "0");
        const minutos = dataObj.getUTCMinutes().toString().padStart(2, "0");
        return `${horas}:${minutos}`;
    }
    const [selectedServices, setSelectedServices] = React.useState([]);
    const [showServiceError, setShowServiceError] = React.useState(false);
    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h4>
                    Agendamento para  {formatarData(date)} às{" "}
                    {extrairHorario(hour)}
                </h4>
                <ClientContact client={client} />
                <Label htmlFor="servico">Escolha um Serviço </Label>
                <div>
                    <ServiceSelector
                        services={services}
                        onSelectedServicesChange={(selected) =>
                            console.log("Serviços selecionados:", selected)
                        }
                    />
                    {showServiceError && (
                        <p style={{ color: "red" }}>
                            Ao menos um serviço deve ser selecionado
                        </p>
                    )}
                </div>
                <ButtonGroup>
                    <Button type="button" onClick={onClose}>
                        Voltar
                    </Button>
                    <Button type="submit">Agendar</Button>
                </ButtonGroup>
            </Form>
        </ModalBase>
    );
};

export default EscolhaServicoModal;
