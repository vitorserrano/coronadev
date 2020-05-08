import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    padding: 40px 30px;
    height: 360px;
    background: #7402fd;
    border-bottom-left-radius: 55px;
    border-bottom-right-radius: 55px;
`;

export const Navbar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Map = styled.TouchableOpacity``;

export const Logo = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;

export const Title = styled.Text`
    color: #fff;
    margin-top: 40px;
    font-size: 20px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    margin-top: 10px;
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
    width: 160px;
    border-radius: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SituationText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
`;