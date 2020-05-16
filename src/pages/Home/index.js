import React from "react";
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
  return (
    <Wrapper>
      <Container>
        <Navbar>
          <Logo>Corona<LogoBold>Dev</LogoBold></Logo>

          <Map onPress={loadGoogleMaps}>
            <MaterialCommunityIcons name="google-maps" size={32} color="#F25658" />
          </Map>
        </Navbar>

        <Header>
          <Title>Corona vírus</Title>

          <Description>
            O coronavírus (COVID-19) é uma doença infecciosa causada por um novo vírus.
          </Description>
          <Description>
          Ele causa problemas respiratórios semelhantes à gripe e sintomas como tosse, febre e, em casos mais graves, dificuldade para respirar.
          </Description>

          <Situation>
            <SituationButton>
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
