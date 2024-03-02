import React from 'react';
import { Card, CardHeader, Content, Button } from './styles.js';

const CardComponent = ({ headerContent, children, buttonText, onButtonClick }) => {
    return (
        <Card>
            <CardHeader>{headerContent}</CardHeader>
            <Content>
                {children}
                <Button onClick={onButtonClick}>{buttonText}</Button>
            </Content>
        </Card>
    );
};

export default CardComponent;