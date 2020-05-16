import React from "react";

import { View } from "react-native";

import {
  Container,
  Title,
  Card,
  CardImageCover,
  CardImage,
  CardDescription,
} from "./styles";

import distance from "../../assets/distance.png";
import mask from "../../assets/mask.png";
import wash from "../../assets/wash.png";

const items = [
  {
    key: String(Math.random()),
    img: distance,
    label: "Manter distância",
  },
  {
    key: String(Math.random()),
    img: mask,
    label: "Usar máscaras",
  },
  {
    key: String(Math.random()),
    img: wash,
    label: "Lavar as mãos",
  },
];

export default Preventions = () => {
  return (
    <Container>
      <Title>Prevenções</Title>

      <Card>
        {items.map((item) => (
          <View key={item.key}>
            <CardImageCover>
              <CardImage source={item.img}></CardImage>
              <CardDescription>{item.label}</CardDescription>
            </CardImageCover>
          </View>
        ))}
      </Card>
    </Container>
  );
};
