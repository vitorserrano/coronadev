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

          <Description>A atual situação do covid-19 no mundo é muito preocupante, por isso é necessário que cada pessoa faça a sua parte, se prevenindo da doença.</Description>
        </Content>
      </Container>
    </Wrapper>

    // <View>
    //   <Text style={{ marginTop: 100 }}>{cases.NewConfirmed}</Text>
    // </View>
  );
};
