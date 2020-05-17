import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    margin-top: 20px;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Card = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
    },
}))`
`;

export const CardImageCover = styled.View`
    width: 150px;
    height: 200px;
    background:  #202024;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
`;

export const CardImage = styled.Image.attrs(() => ({
    resizeMode: "contain",
}))`
    width: 130px;
    height: 130px;
`;

export const CardDescription = styled.Text`
    color: #A8A8B3;
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
`;

