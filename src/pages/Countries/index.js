import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import {
  Wrapper,
  Container,
  Content,
  Title,
  Description,
  List,
  ListItem,
  ListTitle,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

import api from "../../services/api";

import GoBack from "../../components/GoBack";
import SubTitle from "../../components/SubTitle";

export default Countries = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      setLoading(true);

      try {
        const response = await api.get("/summary");
        const { Countries } = response.data;

        setcountries(Countries);
      } catch (error) {
        alert(error.message);
      }

      setLoading(false);
    };

    loadCountries();
  }, []);

  return (
    <Wrapper>
      <Container>
        <GoBack />

        <Content>
          <Title>Situação nos países</Title>
          <SubTitle />

          <Description>
            O Corona vírus está se espalhando cada vais mais nos países. Faça a
            sua parte e ajude o mundo a vencer esse vírus.
          </Description>

          {!loading && (
            <List
              data={countries}
              keyExtractor={(countries) => String(countries.CountryCode)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: countrie }) => (
                <ListItem>
                  <ListTitle>{countrie.Country}</ListTitle>
                  <Ionicons
                    name="ios-arrow-round-forward"
                    size={32}
                    color="#04D361"
                  />
                </ListItem>
              )}
            />
          )}

          {loading && <ActivityIndicator color="#04D361" size={"large"}/>}
        </Content>
      </Container>
    </Wrapper>
  );
};
