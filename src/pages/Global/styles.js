import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #121214;
`;

export const Container = styled.ScrollView`
  padding: 40px 20px;
`;

export const Content = styled.View`
  margin-top: 40px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #a8a8b3;
  margin-top: 20px;
  font-size: 14px;
  line-height: 22px;
`;

export const Card = styled.View`
    margin: 20px 0;
    padding: 15px 20px;
    border-radius: 10px;
`;

export const CardTitle = styled.Text`
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
    font-weight: bold;
`;

export const CardNumber = styled.Text`
    font-size: 18px;
    margin-bottom: 5px;
    color: #fff;
    font-weight: bold;
`;

export const CardDescription = styled.Text`
    font-size: 16px;
    color: #fff;
`;
