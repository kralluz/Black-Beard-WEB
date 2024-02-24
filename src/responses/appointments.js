const appointments = [
    {
        id: 1,
        user_id: 101,
        client: {
            id: 1,
            user_id: 101,
            plan_id: 1,
            name: "João Silva",
            email: "joao.silva@email.com",
            phone: "11987654321",
            description: "Cliente do Plano Básico.",
            created_at: new Date().toISOString(),
            updated_at: null,
        },
        service: [
            {
                id: 1,
                user_id: 101,
                name: "Corte de Cabelo",
                price: 35.0,
                description: "Corte tradicional masculino.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
        ],
        appointment_time: "2024-02-24T08:00:00.000Z",
        description: "Agendamento de corte de cabelo.",
        created_at: new Date().toISOString(),
        updated_at: null,
    },
    {
        id: 2,
        user_id: 102,
        client: {
            id: 2,
            user_id: 102,
            plan_id: 2,
            name: "Maria Oliveira",
            email: "maria.oliveira@email.com",
            phone: "21987654321",
            description: "Cliente do Plano Completo.",
            created_at: new Date().toISOString(),
            updated_at: null,
        },
        service: [
            {
                id: 2,
                user_id: 102,
                name: "Barba",
                price: 25.0,
                description: "Aparo e modelagem de barba.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
        ],
        appointment_time: "2024-02-24T10:30:00.000Z",
        description: "Agendamento para fazer a barba.",
        created_at: new Date().toISOString(),
        updated_at: null,
    },
    {
        id: 3,
        user_id: 103,
        client: {
            id: 3,
            user_id: 103,
            plan_id: 1,
            name: "Carlos Pereira",
            email: "carlos.pereira@email.com",
            phone: "31987654321",
            description: "Cliente frequente sem plano.",
            created_at: new Date().toISOString(),
            updated_at: null,
        },
        service: [
            {
                id: 3,
                user_id: 103,
                name: "Corte e Barba",
                price: 55.0,
                description: "Combo de corte de cabelo e barba.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
        ],
        appointment_time: "2024-02-24T13:15:00.000Z",
        description: "Combo corte de cabelo e barba.",
        created_at: new Date().toISOString(),
        updated_at: null,
    },
    {
        id: 4,
        user_id: 104,
        client: {
            id: 4,
            user_id: 104,
            plan_id: 2,
            name: "Fernanda Costa",
            email: "fernanda.costa@email.com",
            phone: "41987654321",
            description: "Cliente do Plano Completo.",
            created_at: new Date().toISOString(),
            updated_at: null,
        },
        service: [
            {
                id: 4,
                user_id: 104,
                name: "Hidratação Capilar",
                price: 40.0,
                description: "Tratamento de hidratação para cabelos.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
            {
                id: 4,
                user_id: 104,
                name: "Hidratação Capilar",
                price: 40.0,
                description: "Tratamento de hidratação para cabelos.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
            {
                id: 4,
                user_id: 104,
                name: "Hidratação Capilar",
                price: 40.0,
                description: "Tratamento de hidratação para cabelos.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
        ],
        appointment_time: "2024-02-24T21:45:00.000Z",
        description: "Agendamento para hidratação capilar.",
        created_at: new Date().toISOString(),
        updated_at: null,
    },
    {
        id: 5,
        user_id: 105,
        client: {
            id: 5,
            user_id: 105,
            plan_id: 1,
            name: "Roberto Santos",
            email: "roberto.santos@email.com",
            phone: "51987654321",
            description: "Cliente do Plano Básico.",
            created_at: new Date().toISOString(),
            updated_at: null,
        },
        service: [
            {
                id: 5,
                user_id: 105,
                name: "Limpeza de Pele",
                price: 50.0,
                description:
                    "Limpeza profunda facial com produtos específicos.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
            {
                id: 6,
                user_id: 106,
                name: "Pintura de Cabelo",
                price: 60.0,
                description:
                    "Serviço de coloração e pintura de cabelo com produtos de alta qualidade.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
            {
                id: 7,
                user_id: 107,
                name: "Manicure Masculina",
                price: 30.0,
                description:
                    "Cuidados com as mãos e unhas, incluindo corte, limpeza e polimento.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
            {
                id: 8,
                user_id: 108,
                name: "Massagem Relaxante",
                price: 70.0,
                description:
                    "Massagem corporal relaxante para aliviar tensões e promover bem-estar.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
            {
                id: 9,
                user_id: 109,
                name: "Tratamento para Calvície",
                price: 80.0,
                description:
                    "Tratamento especializado para prevenção e cuidado da calvície masculina.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
        ],
        appointment_time: "2024-02-24T20:30:00.000Z",
        description: "Agendamento para limpeza de pele.",
        created_at: new Date().toISOString(),
        updated_at: null,
    },
];

export function findNextAppointment(appointments) {
    const now = new Date();

    const brtOffset = 3 * 3600000;
    const brtNow = new Date(now.getTime() - brtOffset);

    let nextAppointment = null;
    let nextAppointmentTime = Infinity;

    for (const appointment of appointments) {
        const appointmentTime = new Date(appointment.appointment_time);

        if (appointmentTime > brtNow && appointmentTime < nextAppointmentTime) {
            nextAppointment = appointment;
            nextAppointmentTime = appointmentTime;
        }
    }

    return nextAppointment;
}
function calcularReceitaTotal(agendamentos) {
    return agendamentos.reduce((total, agendamento) => {
        const totalServicos = agendamento.service.reduce(
            (subtotal, servico) => subtotal + servico.price,
            0
        );
        return total + totalServicos;
    }, 0);
}

export default appointments;
export const receitaTotal = calcularReceitaTotal(appointments);
export const nextAppointment = findNextAppointment(appointments);
