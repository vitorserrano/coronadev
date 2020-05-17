import React from "react";
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from "@expo/vector-icons";

import { ButtonGoBack } from "./styles";

export default GoBack = () => {
  const navigation = useNavigation();

  navigationBack = () => {
    navigation.goBack();
  }
  
  return (
    <>
      <ButtonGoBack onPress={navigationBack}>
        <Ionicons name="ios-arrow-round-back" size={36} color="#04D361" />
      </ButtonGoBack>
    </>
  );
};
