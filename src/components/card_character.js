import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function CardCharacter(props) {

const {character} = props;

console.log(character);
    return (
        <View style={styles.card}>
            <Image style = {styles.image} source={{ uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}/>
            <View style={styles.cardText}>
                <Text style={styles.mensagem} ><Text style={{fontWeight: 'bold'}}>Id: </Text>{character.id}</Text>
                <Text style={styles.mensagem} ><Text style={{fontWeight: 'bold'}}>Name: </Text>{character.name}</Text>
                <Text style={styles.mensagem} ><Text style={{fontWeight: 'bold'}}>Description: </Text> {character.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:
    {
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        width: 320,
        flexDirection: 'row',
        backgroundColor: '#EC1D24'
    },
    image: {
        width: 80, 
        height: 80,
        borderRadius: 8
    },
    cardText:
    {
        margin: 8,
        flexDirection: 'column',
        width: 224,
        backgroundColor: '#EC1D24'
    },
    mensagem:
    {
        fontSize: 15,
        fontWeight:'normal',
        color: '#FFFFFF'
    },
    


});