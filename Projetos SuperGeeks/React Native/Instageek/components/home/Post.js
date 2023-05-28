import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = () => {
    const [lugar, setLugar] = useState();
    const [hashtag, setHashtag] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const buscaDados = async() => {
        await axios.get('http://localhost:1337/posts').then((response) => {
            setLugar(response.data[0].place);
            setHashtag(response.data[0].hashtags);
            setDescricao(response.data[0].description);
            setImagem(response.data[0].image[0].url);
        })
    }
    buscaDados()

    return (
    <View style={{marginBottom: 30}}>
        <View style={styles.postH}>
            <View>
                <Text>{lugar}</Text>
                <Image style={styles.logo} source={{uri: `http://localhost:1337${imagem}`}} />
                <Text>{descricao}</Text>
                <Text>{hashtag}</Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    postH: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 500,
    },
    logo: {
        width: 1000,
        height: 500,
        resizeMode: "contain",
    }
})

export default Post;