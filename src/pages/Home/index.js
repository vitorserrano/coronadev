import React from 'react';
import { Linking } from 'react-native';

import { Fontisto, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { 
    Wrapper, 
    Container, 
    Header,
    Navbar,
    Logo,
    Map,
    Title,
    Description,
    Situation,
    SituationButton,
    SituationText,
} from './styles';

import Preventions from '../../components/Preventions';
import Banner from '../../components/Banner';

const loadGoogleMaps = () => {
    Linking.openURL('https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR:pt-419');
}

export default Home = () => {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <Navbar>
                        <Logo>CoronaDev</Logo>
                    
                        <Map onPress={loadGoogleMaps}>
                            <MaterialCommunityIcons name="google-maps" size={32} color="#fff" />
                        </Map>
                    </Navbar>

                    <Title>
                        O que é Corona vírus?
                    </Title>

                    <Description>
                        O coronavírus é uma doença causada por um novo vírus que causa sintomas semelhantes á gripe de forma leve a grave.
                    </Description>

                    <Situation>
                        <SituationButton style={{ backgroundColor: '#ff5959'}}>
                            <Fontisto name="world-o" size={24} color="#fff" />
                            <SituationText>Mundo</SituationText>
                        </SituationButton>

                        <SituationButton style={{ backgroundColor: '#4cb5ff' }}>
                            <Feather name="flag" size={24} color="#fff" />
                            <SituationText>Países</SituationText>
                        </SituationButton>
                    </Situation>
                </Header>

                <Preventions />
                <Banner />
            </Container>
        </Wrapper>
    );
};