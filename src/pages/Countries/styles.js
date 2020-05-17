import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #121214;
`;

export const Container = styled.View`
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
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 22px;
`;

export const SearchBar = styled.View`
  background: #202024;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.TextInput`
  width: 300px;
  color: #fff;
`;

export const List = styled.FlatList`
  margin-bottom: 100px;
`;

export const ListItem = styled.TouchableOpacity`
  background: #202024;
  padding: 20px 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListTitle = styled.Text`
  color: #fff;
`;