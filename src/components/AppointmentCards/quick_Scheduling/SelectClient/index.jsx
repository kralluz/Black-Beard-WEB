import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ModalBase from "../../../BasedModal";
import SelectServices from "../SelectServices";
import { Form, Label, StyledInput, ButtonGroup, Button } from "./styles";

const dataBase = [
    { name: "João Silva", phone: "123456789", email: "joao@gmail.com" },
    { name: "Maria Oliveira", phone: "987654321", email: "maria@gmail.com" },
];

const SelectClient = ({ isOpen, onClose, date, hour }) => {
    const { register, setValue, watch, handleSubmit } = useForm();
    const name = watch("name");
    const phone = watch("phone");
    const [isOpenSelectService, setIsOpenSelectService] = useState(false);

    const buscarSugestoes = () => {
        if (!name && !phone) return [];
        return dataBase.filter(
            (item) =>
                item.name.toLowerCase().includes(name?.toLowerCase()) ||
                item.phone.includes(phone)
        );
    };

    const sugestoes = buscarSugestoes();

    // Função para preencher o formulário com a sugestão selecionada
    const preencherFormulario = (sugestao) => {
        setValue("name", sugestao.name);
        setValue("phone", sugestao.phone);
        setValue("email", sugestao.email);
    };
    const onEscolherServicos = () => {
        ("Escolher serviços");
    };
    const [clientData, setClientData] = useState(null);
    const onSubmit = (data) => {
        setClientData(data);
        setIsOpenSelectService(true);
        onEscolherServicos(); // Supondo que esta função seja para tratar a escolha de serviços
    };

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

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <h4>
                Agendamento para {formatarData(date)} às {extrairHorario(hour)}
            </h4>

            <SelectServices
                date={date}
                hour={hour}
                isOpen={isOpenSelectService}
                onClose={() => setIsOpenSelectService(false)}
                client={clientData}
            />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="name">name</Label>
                <StyledInput
                    id="name"
                    {...register("name")}
                    placeholder="name"
                />

                <Label htmlFor="phone">phone</Label>
                <StyledInput
                    id="phone"
                    {...register("phone")}
                    placeholder="phone"
                />

                <Label htmlFor="email">Email</Label>
                <StyledInput
                    id="email"
                    {...register("email")}
                    placeholder="Email"
                    type="email"
                />

                {sugestoes.length > 0 && (
                    <div>
                        {sugestoes.map((sugestao, index) => (
                            <div
                                key={index}
                                onClick={() => preencherFormulario(sugestao)}
                            >
                                {sugestao.name}
                            </div>
                        ))}
                    </div>
                )}

                <ButtonGroup>
                    <Button type="button" onClick={onClose}>
                        Voltar
                    </Button>
                    <Button type="submit">Escolher Serviços</Button>
                </ButtonGroup>
            </Form>
        </ModalBase>
    );
};

export default SelectClient;
