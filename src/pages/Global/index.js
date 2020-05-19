import React from "react";

import { useRoute } from "@react-navigation/native"; 

import {
  Wrapper,
  Container,
  Content,
  Title,
  Description,
  Card,
  CardTitle,
  CardCases,
  CardInfo,
  CardNumber,
  CardDescription,
} from "./styles";

import GoBack from "../../components/GoBack";
import SubTitle from "../../components/SubTitle";
import numberFormatter from '../../utils/formatter'

export default Global = () => {
  const route = useRoute();

  const { global } = route.params;

  return (
    <Wrapper>
      <Container>
        <GoBack />

        <Content>
          <Title>Situação Global</Title>
          <SubTitle />

          <Description>
            A atual situação do covid-19 no mundo é muito preocupante, por isso
            é necessário que cada pessoa faça a sua parte, se prevenindo do
            vírus.
          </Description>

          <Card style={{ backgroundColor: "#FBB159" }}>
            <CardTitle>Confirmados</CardTitle>

            <CardCases>
              <CardInfo>
                <CardNumber>{numberFormatter(global.TotalConfirmed)}</CardNumber>
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                <CardNumber>{numberFormatter(global.NewConfirmed)}</CardNumber>
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>

          <Card style={{ backgroundColor: "#F25658" }}>
            <CardTitle>Óbitos</CardTitle>

            <CardCases>
              <CardInfo>
                <CardNumber>{numberFormatter(global.TotalDeaths)}</CardNumber>
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                <CardNumber>{numberFormatter(global.NewDeaths)}</CardNumber>
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>

          <Card style={{ backgroundColor: "#4DB4FB", marginBottom: 60 }}>
            <CardTitle>Recuperados</CardTitle>

            <CardCases>
              <CardInfo>
                <CardNumber>{numberFormatter(global.TotalRecovered)}</CardNumber>
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                <CardNumber>{numberFormatter(global.NewRecovered)}</CardNumber>
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>
        </Content>
      </Container>
    </Wrapper>
  );
};
