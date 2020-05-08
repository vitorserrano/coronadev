import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    padding: 30px; 
`;

export const Title = styled.Text`
    color: #333;
    font-weight: bold;
    font-size: 20px;
`;
export const Card = styled.View`
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const CardImageCover = styled.View`
    width: 100px;
    height: 100px;
    background: #efe4fd;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.Image.attrs(() => ({
    resizeMode: "contain",
}))`
    width: 100px;
    height: 100px;
`;

export const CardDescription = styled.Text`
    color: #333;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
`;