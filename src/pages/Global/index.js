import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

import api from "../../services/api";

import { 
  Wrapper, 
  Container, 
  Content,
  Title,
  Description,
  Card,
  CardTitle,
  CardNumber,
  CardDescription,
} from "./styles";

import GoBack from "../../components/GoBack";
import SubTitle from "../../components/SubTitle";

export default Global = () => {
  const [cases, setCases] = useState([]);

  // useEffect(() => {
  //   const loadGlobal = async () => {
  //     try {
  //       const response = await api.get("/summary");
  //       const { Global } = response.data;

  //       setCases(Global);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };

  //   loadGlobal();
  // }, []);

  return (
    <Wrapper>
      <Container>
        <GoBack />

        <Content>
          <Title>Situação Global</Title>
          <SubTitle />

          <Description>A atual situação do covid-19 no mundo é muito preocupante, por isso é necessário que cada pessoa faça a sua parte, se prevenindo do vírus.</Description>

          <Card style={{ backgroundColor: "#FBB159" }}>
            <CardTitle>Confirmados</CardTitle>
            <CardNumber>33.040</CardNumber>
            <CardDescription>Acumulados</CardDescription>
            <CardDescription>Novos casos: </CardDescription>
          </Card>

          <Card style={{ backgroundColor: "#F25658" }}>
            <CardTitle>Óbitos</CardTitle>
            <CardDescription>Total de casos: </CardDescription>
            <CardDescription>Novos casos: </CardDescription>
          </Card>

          <Card style={{ backgroundColor: "#4DB4FB" }}>
            <CardTitle>Recuperados</CardTitle>
            <CardDescription>Total de casos: </CardDescription>
            <CardDescription>Novos casos: </CardDescription>
          </Card>
        </Content>
      </Container>
    </Wrapper>

    // <View>
    //   <Text style={{ marginTop: 100 }}>{cases.NewConfirmed}</Text>
    // </View>
  );
};
