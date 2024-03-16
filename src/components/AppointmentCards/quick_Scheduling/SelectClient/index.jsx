import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ModalBase from "../../../BasedModal";
import SelectServices from "../SelectServices";
import { Form, ButtonGroup, Button } from "./styles";
import { IoMdPerson } from "react-icons/io";

const dataBase = [
    { name: "João Silva", phone: "123456789", email: "joao@gmail.com" },
    { name: "Maria Oliveira", phone: "987654321", email: "maria@gmail.com" },
    { name: "Pedro Santos", phone: "456789123", email: "pedro@gmail.com" },
    { name: "Ana Souza", phone: "789123456", email: "ana@gmail.com" },
    { name: "Carlos Pereira", phone: "321654987", email: "carlos@gmail.com" },
    { name: "Mariana Costa", phone: "654987321", email: "mariana@gmail.com" },
    { name: "Lucas Almeida", phone: "987321654", email: "lucas@gmail.com" },
    { name: "Julia Rodrigues", phone: "654123789", email: "julia@gmail.com" },
    { name: "Rafaela Santos", phone: "321789654", email: "rafaela@gmail.com" },
    { name: "Gustavo Lima", phone: "789654321", email: "gustavo@gmail.com" },
];

const SelectClient = ({ isOpen, onClose, date, hour }) => {
    const { register, setValue, watch, handleSubmit } = useForm();
    const name = watch("name");
    const phone = watch("phone");
    const email = watch("email");
    const [isOpenSelectService, setIsOpenSelectService] = useState(false);
    const [suggestionsVisible, setSuggestionsVisible] = useState(true);

    const searchSuggestions = () => {
        if (!name && !phone && !email) return [];
        const results = dataBase.filter(
            (item) =>
                item.name.toLowerCase().includes(name?.toLowerCase()) ||
                item.phone.includes(phone)
        );
        return results.slice(0, 3);
    };

    const suggestions = searchSuggestions();

    // Função para preencher o formulário com a sugestão selecionada e esconder as sugestões
    const preencherFormulario = (sugestao) => {
        setValue("name", sugestao.name);
        setValue("phone", sugestao.phone);
        setValue("email", sugestao.email);
        setSuggestionsVisible(false);
    };
    const onEscolherServicos = () => {
        ("Escolher serviços");
    };
    const [clientData, setClientData] = useState(null);
    const onSubmit = (data) => {
        setClientData(data);
        setIsOpenSelectService(true);
    };

    useEffect(() => {
        const inputs = document.querySelectorAll(".input-box input");

        inputs.forEach((input) => {
            if (input.value.trim() !== "") {
                input.nextElementSibling.classList.add("active");
            } else {
                input.nextElementSibling.classList.remove("active");
            }
        });

        // Retorne uma função de limpeza para remover os event listeners quando o componente for desmontado
        return () => {
            inputs.forEach((input) => {
                if (input.value.trim() !== "") {
                    input.nextElementSibling.classList.add("active");
                } else {
                    input.nextElementSibling.classList.remove("active");
                }
            });
        };
    }, [name, phone, email]); // Adicione name e phone como dependências

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
                <div className="input-box">
                    <span className="icon">
                        <IoMdPerson size={27} />
                    </span>
                    <input type="text" id="name" {...register("name")} />
                    <label htmlFor="name">Name</label>
                </div>

                <div className="input-box">
                    <span className="icon">
                        <FaPhone size={24} />
                    </span>
                    <input type="text" id="phone" {...register("phone")} />
                    <label htmlFor="phone">Telefone</label>
                </div>

                <div className="input-box">
                    <span className="icon">
                        <MdEmail size={28} />
                    </span>
                    <input type="email" id="email" {...register("email")} />
                    <label htmlFor="email">Email</label>
                </div>

                {suggestionsVisible && suggestions.length > 0 && (
                    <div className="suggestions-container">
                        {suggestions.map((sugestao, index) => (
                            <div
                                key={index}
                                className="suggestions-item"
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
