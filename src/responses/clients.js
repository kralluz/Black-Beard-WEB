const clients = [
    {
        id: 1,
        user_id: 101,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "João Silva",
        email: "joao.silva@example.com",
        phone: "11987654321",
        description: "Cliente assíduo, prefere cortes clássicos.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 2,
        user_id: 102,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        expires_in: 30,
        name: "Maria Oliveira",
        email: "maria.oliveira@example.com",
        phone: "21987654321",
        description: "Gosta de experimentar novos estilos.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 3,
        user_id: 101,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        phone: "31987654321",
        description: "Prefere cortes rápidos e práticos.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 4,
        user_id: 103,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Ana Martins",
        email: "ana.martins@example.com",
        phone: "41987654321",
        description: "Interessada em cuidados com a barba.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 5,
        user_id: 104,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Roberto Souza",
        email: "roberto.souza@example.com",
        phone: "51987654321",
        description: "Visita mensalmente para manutenção do corte.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 6,
        user_id: 105,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Fernanda Lima",
        email: "fernanda.lima@example.com",
        phone: "61987654321",
        description: "Procura sempre por novidades em coloração.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 7,
        user_id: 106,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Lucas Andrade",
        email: "lucas.andrade@example.com",
        phone: "71987654321",
        description: "Fiel ao estilo undercut.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 8,
        user_id: 107,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Patricia Rocha",
        email: "patricia.rocha@example.com",
        phone: "81987654321",
        description: "Interessada em tratamentos capilares.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 9,
        user_id: 108,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Rafael Costa",
        email: "rafael.costa@example.com",
        phone: "91987654321",
        description: "Prefere cortes modernos e despojados.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 10,
        user_id: 109,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Beatriz Almeida",
        email: "beatriz.almeida@example.com",
        phone: "101987654321",
        description: "Gosta de manter o corte sempre na moda.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 11,
        user_id: 110,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Gustavo Santos",
        email: "gustavo.santos@example.com",
        phone: "111987654321",
        description: "Prefere cortes clássicos e elegantes.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 12,
        user_id: 111,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Juliana Costa",
        email: "juliana.costa@example.com",
        phone: "121987654321",
        description: "Interessada em tratamentos para cabelos cacheados.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 13,
        user_id: 112,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Pedro Rodrigues",
        email: "pedro.rodrigues@example.com",
        phone: "131987654321",
        description: "Visita regularmente para manutenção da barba.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
    {
        id: 14,
        user_id: 113,
        plan: {
            id: 2,
            user_id: 102,
            name: "Plano Mensal",
            description: "Inclui cortes de cabelo e barba por mês.",
            price: 180.0,
            service_quota: 5,
            expires_in: 30,
            created_at: "2023-01-02T00:00:00Z",
            updated_at: null,
        },
        name: "Mariana Lima",
        email: "mariana.lima@example.com",
        phone: "141987654321",
        description: "Procura por cortes modernos e versáteis.",
        created_at: "2022-12-31T00:00:00Z",
        updated_at: null,
    },
];
export default clients;
