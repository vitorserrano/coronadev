import React, { useState, useEffect } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Wrapper,
  Container,
  Content,
  Title,
  Description,
  SearchBar,
  Search,
  List,
  ListItem,
  ListTitle,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

import GoBack from "../../components/GoBack";
import SubTitle from "../../components/SubTitle";

export default Countries = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { countries } = route.params;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(countries);

  useEffect(() => {
    const result = countries.filter((country) =>
      country.Country.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(result);
  }, [search]);

  navigateToDetails = (countrie) => {
    navigation.navigate("DetailsCountry", { detail: countrie });
  };

  return (
    <Wrapper>
      <Container>
        <GoBack />

        <Content>
          <Title>Situação nos países</Title>
          <SubTitle />

          <Description>
            O Corona vírus está se espalhando cada vez mais nos países. Faça a
            sua parte e ajude o mundo a vencer esse vírus.
          </Description>

          <SearchBar>
            <Search
              value={search}
              onChangeText={setSearch}
              placeholder="Procure um país..."
            />
            <Ionicons name="ios-search" size={24} color="#7159c1" />
          </SearchBar>

          <List
            data={filter}
            keyExtractor={(countries) => String(countries.Country)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: countrie }) => (
              <ListItem
                onPress={() => {
                  navigateToDetails(countrie);
                }}
              >
                <ListTitle>{countrie.Country}</ListTitle>
                <Ionicons
                  name="ios-arrow-round-forward"
                  size={32}
                  color="#04D361"
                />
              </ListItem>
            )}
          />
        </Content>
      </Container>
    </Wrapper>
  );
};
