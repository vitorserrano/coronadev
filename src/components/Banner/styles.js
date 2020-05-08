import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    padding: 20px 30px;
`;

export const Card = styled.View`
    background: #cfacfd;
    height: 140px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Img = styled.Image`
    width: 150px;
    height: 100px;
`;

export const Description = styled.View``;

export const DescriptionText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

export const DescriptionButton = styled.TouchableOpacity``;
