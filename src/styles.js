import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #272727;
    padding-top: 45px;
`;

export const Logo = styled.Text`
    font-size: 30px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 25px;
    margin-left: 15px;
    margin-top: 10px;
    color: #FFF;
`;

export const Input = styled.TextInput`
    height: 40px;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-right: 15px;
    padding: 5px;
    border-radius: 5px;
    background-color: #FFF;
    font-size: 17px;
`;

export const CenterView = styled.View`
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding-top: 10px;
`;

export const Btn = styled.TouchableOpacity`
    background-color: #fff;
    padding: 5px 10px;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
`;

export const BtnTxt = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: {
        paddingHorizontal: 20
    }
})`
    margin-top: 10px;
    border-radius: 10px;
`;