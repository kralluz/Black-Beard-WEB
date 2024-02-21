import React from "react";
import styled from "styled-components";

// Estilos para o container dos dados de estoque
const DataContainer = styled.div`
    padding: 16px;
`;

const DataCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid #ccc;
`;

const DataTitle = styled.h3`
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
`;
const EstoqueData = () => {
    return (
        <DataContainer>
            {/* Exemplo de card de dados de estoque */}
            <DataCard>
                <DataTitle>Dados do Estoque</DataTitle>
                {/* Outras informações do estoque */}
            </DataCard>
            {/* Outros cards de estoque */}
        </DataContainer>
    );
};

export default EstoqueData;
