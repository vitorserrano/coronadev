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

import isolation from "../../assets/isolation.png";
import mask from "../../assets/mask.png";
import wash from "../../assets/wash.png";

const items = [
  {
    key: String(Math.random()),
    img: isolation,
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
            </CardImageCover>
            <CardDescription>{item.label}</CardDescription>
          </View>
        ))}
      </Card>
    </Container>
  );
};
