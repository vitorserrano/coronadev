import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Linking } from "react-native";

import { Fontisto, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Wrapper,
  Container,
  Navbar,
  Logo,
  LogoBold,
  Map,
  Header,
  Title,
  SubTitle,
  Description,
  Situation,
  SituationButton,
  SituationText,
} from "./styles";

import Preventions from "../../components/Preventions";

const loadGoogleMaps = () => {
  Linking.openURL(
    "https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR:pt-419"
  );
};

export default Home = () => {
  const navigation = useNavigation();

  const navigateToGlobal = () => {
    navigation.navigate('Global');
  };
  
  return (
    <Wrapper>
      <Container>
        <Navbar>
          <Logo>corona<LogoBold>dev</LogoBold></Logo>

          <Map onPress={loadGoogleMaps}>
            <MaterialCommunityIcons name="google-maps" size={28} color="#7159c1" />
          </Map>
        </Navbar>

        <Header>
          <Title>O que é Corona vírus?</Title>
          <SubTitle>
            <Feather name="x" size={20} color="#fff" />
            <Feather name="x" size={20} color="#7159c1" />
            <Feather name="x" size={20} color="#04D361" />
          </SubTitle>

          <Description>
            O coronavírus (COVID-19) é uma doença infecciosa causada por um novo vírus.
          </Description>

          <Description>
          Ele causa problemas respiratórios semelhantes à gripe e sintomas como tosse, febre e, em casos mais graves, dificuldade para respirar.
          </Description>

          <Situation>
            <SituationButton 
              style={{ backgroundColor: "#7159c1" }}
              onPress={navigateToGlobal}
            >
              <Fontisto name="world-o" size={24} color="#fff" />
              <SituationText>Mundo</SituationText>
            </SituationButton>

            <SituationButton>
              <Feather name="flag" size={24} color="#fff" />
              <SituationText>Países</SituationText>
            </SituationButton>
          </Situation>
        </Header>

        <Preventions />
      </Container>
    </Wrapper>
  );
};
