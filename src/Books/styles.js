import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    margin: 5px 0px;
`;

export const Nome = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #222;
`;

export const Preco = styled.Text`
    font-size: 17px;
    font-style: italic;
`;

export const CenterView = styled.View`
    flex-direction: row;
    padding-top: 15px;
`;

export const Btn = styled.TouchableOpacity`
    background-color: #ddd;
    padding: 5px;
    margin-right: 15px;
    border-radius: 5px;
    justify-content: center;
`;

export const BtnTxt = styled.Text`
    color: #222;
    font-size: 16px;
    font-weight: 600;
`;