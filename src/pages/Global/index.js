import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import api from "../../services/api";

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

export default Global = () => {
  const [loading, setLoading] = useState(false);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const loadGlobal = async () => {
      setLoading(true);

      try {
        const response = await api.get("/summary");
        const { Global } = response.data;

        setCases(Global);
      } catch (error) {
        alert(error.message);
      }

      setLoading(false);
    };

    loadGlobal();
  }, []);

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
                {!loading && <CardNumber>{cases.TotalConfirmed}</CardNumber>}
                {loading && <ActivityIndicator color="#fff" />}
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                {!loading && <CardNumber>{cases.NewConfirmed}</CardNumber>}
                {loading && <ActivityIndicator color="#fff" />}
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>

          <Card style={{ backgroundColor: "#F25658" }}>
            <CardTitle>Óbitos</CardTitle>

            <CardCases>
              <CardInfo>
                {!loading && <CardNumber>{cases.TotalDeaths}</CardNumber>}
                {loading && <ActivityIndicator color="#fff" />}
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                {!loading && <CardNumber>{cases.NewDeaths}</CardNumber>}
                {loading && <ActivityIndicator color="#fff" />}
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>

          <Card style={{ backgroundColor: "#4DB4FB", marginBottom: 60 }}>
            <CardTitle>Recuperados</CardTitle>

            <CardCases>
              <CardInfo>
                {!loading && <CardNumber>{cases.TotalRecovered}</CardNumber>}
                {loading && <ActivityIndicator color="#fff" />}
                <CardDescription>Acumulados</CardDescription>
              </CardInfo>

              <CardInfo>
                {!loading && <CardNumber>{cases.NewRecovered}</CardNumber>}
                {loading && <ActivityIndicator color="#fff" />}
                <CardDescription>Registros novos</CardDescription>
              </CardInfo>
            </CardCases>
          </Card>
        </Content>
      </Container>
    </Wrapper>
  );
};
