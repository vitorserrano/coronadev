import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    margin-top: 20px;
`;

export const Title = styled.Text`
    color: rgb(75, 75, 75);
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
    background:  #FAD3D4;
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
    color: #F25658;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
`;