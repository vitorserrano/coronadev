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

export default DetailsCountry = () => {
  const route = useRoute();

  const { detail } = route.params;

  return (
    <Wrapper>
      <Container>
        <GoBack />

        <Content>
          <Title>{detail.Country}</Title>
          <SubTitle />

          <Description>
            Por conta de sua fácil transmissão o novo Covid-19 se mostrou muito
            mortal, por isso é importante cada pessoa se previnir de maneira
            correta.
          </Description>

          <Card style={{ backgroundColor: "#FBB159" }}>
            <CardTitle>Confirmados</CardTitle>

            <CardCases>
              <CardInfo>
                <CardNumber>{detail.TotalConfirmed}</CardNumber>
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                <CardNumber>{detail.NewConfirmed}</CardNumber>
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>

          <Card style={{ backgroundColor: "#F25658" }}>
            <CardTitle>Óbitos</CardTitle>

            <CardCases>
              <CardInfo>
                <CardNumber>{detail.TotalDeaths}</CardNumber>
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                <CardNumber>{detail.NewDeaths}</CardNumber>
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>

          <Card style={{ backgroundColor: "#4DB4FB", marginBottom: 60 }}>
            <CardTitle>Recuperados</CardTitle>

            <CardCases>
              <CardInfo>
                <CardNumber>{detail.TotalRecovered}</CardNumber>
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                <CardNumber>{detail.NewRecovered}</CardNumber>
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>
        </Content>
      </Container>
    </Wrapper>
  );
};
