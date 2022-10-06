import React from 'react';
import { Text, View } from 'react-native';
import {
    Btn,
    BtnTxt,
    CenterView,
    Container,
    Nome,
    Preco
} from './styles';

export default function Books({ data, editar, deletar }) {
    return (
        <Container>
            <Nome>{data.nome}</Nome>
            <Preco>R$ {data.preco}</Preco>

            <CenterView>
                <Btn onPress={() => editar(data)}>
                    <BtnTxt>Editar</BtnTxt>
                </Btn>

                <Btn onPress={() => deletar(data)}>
                    <BtnTxt>Excluir</BtnTxt>
                </Btn>
            </CenterView>
        </Container>
    );
}