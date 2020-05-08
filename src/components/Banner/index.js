import React from 'react';

import {
    Container,
    Card,
    Img,
    Description,
    DescriptionText,
    DescriptionButton,
} from './styles';

import contact from '../../assets/contact.png';

export default Banner = () => {
    return (
        <Container>
            <Card>
                <Img source={contact} />
                <Description>
                    <DescriptionText>Está com sintomas?</DescriptionText>
                    <DescriptionButton></DescriptionButton>
                </Description>
            </Card>
        </Container>
    );
}