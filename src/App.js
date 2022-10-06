import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
    Btn,
    BtnTxt,
    CenterView,
    Container,
    Input,
    List,
    Logo,
    Title
} from './styles';
import Books from './Books';
import getRealm from './services/realm';

export default function App() {

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [books, setBooks] = useState([]);
    const [idEdit, setIdEdit] = useState(null);

    useEffect(() => {

        async function loadBooks() {
            const realm = await getRealm();

            const data = realm.objects('Book');

            setBooks(data);
        }
        loadBooks();

    }, [])

    async function addBook() {
        if (nome === '' || preco === '') {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const data = {
                nome: nome,
                preco: preco,
            };

            await saveBook(data);

            setNome('');
            setPreco('');
            Keyboard.dismiss();
        }
        catch (error) {
            alert(error)
        };
    }

    async function saveBook(data) {
        const realm = await getRealm();

        // criando um id autoincremento (id unico p/ cada elemento)
        const id = realm.objects('Book').sorted('id', true).length > 0
            ? realm.objects('Book').sorted('id', true)[0].id + 1 : 1;

        const dadosLivro = {
            id: id,
            nome: data.nome,
            preco: data.preco
        };

        // escrevendo no banco
        realm.write(() => {
            realm.create('Book', dadosLivro);
        });
    }

    function editBook(data) {
        setNome(data.nome);
        setPreco(data.preco);
        setIdEdit(data.id);
    }

    async function editIdBook() {
        if (idEdit === null) {
            alert('Selecione um item para editar');
            return;
        };

        const realm = await getRealm();

        const response = {
            id: idEdit,
            nome: nome,
            preco: preco,
        };

        realm.write(() => {
            realm.create('Book', response, 'modified');
        });

        const NewData = await realm.objects('Book').sorted('id', false);
        setBooks(NewData);
        setNome('');
        setPreco('');
        setIdEdit(null);
        Keyboard.dismiss
    }


    async function deleteBook(data) {
        const realm = await getRealm();
        const id = data.id;

        realm.write(() => {
            if (realm.objects('Book').filtered('id =' + id).length > 0) {
                realm.delete(
                    realm.objects('Book').filtered('id =' + id)
                )
            }
        })

        const newData = await realm.objects('Book').sorted('id', false);
        setBooks(newData);
    }

    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View>
                    <Logo>Próximos Livros</Logo>

                    <Title>Nome</Title>
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />

                    <Title>Preço</Title>
                    <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={preco}
                        onChangeText={(text) => setPreco(text)}
                    />

                    <CenterView>
                        <Btn onPress={() => addBook()} disabled={idEdit} style={{ opacity: idEdit ? 0.3 : 1 }}>
                            <BtnTxt>Cadastrar</BtnTxt>
                        </Btn>

                        <Btn onPress={() => editIdBook()}>
                            <BtnTxt>Editar</BtnTxt>
                        </Btn>
                    </CenterView>
                </View>
            </TouchableWithoutFeedback>

            <List
                data={books}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Books data={item} editar={(data) => editBook(data)} deletar={(data) => deleteBook(data)} />}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            />
        </Container>
    );
}