import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #121214;
`;

export const Container = styled.ScrollView`
    padding: 40px 20px;
`;

export const Navbar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Map = styled.TouchableOpacity``;

export const Logo = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`;

export const LogoBold = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #04D361;
    text-align: center;
`;

export const Header = styled.View`
    margin-top: 20px;
    padding: 30px 20px;
    background-color: #202024;
    border-radius: 20px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`;

export const SubTitle = styled.View`
    flex-direction: row;
    margin-top: 5px;
`;

export const Description = styled.Text`
    color: #A8A8B3;
    margin-top: 20px;
    font-size: 14px;
    line-height: 22px;
`;

export const Situation = styled.TouchableOpacity`
    margin-top: 40px;
    flex-direction: row;
    justify-content: space-between;
`;

export const SituationButton = styled.TouchableOpacity`
    height: 55px;
    width: 150px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #04D361;
    border-radius: 10px;
`;

export const SituationText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
`;

