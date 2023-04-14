import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import api
  from '../../service/api';
import CardCharacter from '../../components/card_character';
import Database from '../../database/database';


export default class DataRenderingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }

  }

  async componentDidMount() {
    var resultCharacters = [];
    for (var i = 0; i < 1; i = i + 100) {
      await api.get('/v1/public/characters', {
        params: {
          ts: '1',
          orderBy: 'name',
          limit: '1',
          offset: i,
          apikey: '422190db783a962029ff4735e165cb88',
          hash: '3b5c77dd93627ad07e11a02afa9c7239'
        },
      }).then(({ data }) => {
        resultCharacters = [...resultCharacters, ...data.data.results];
      });
    }
    resultCharacters.forEach(async function (item, indice, array) {
      await Database.executeSql('INSERT INTO marvelCharacter (' +
        'id INTEGER, ' +
        'name TEXT, ' +
        'description TEXT,' +
        'thumbnailUrl TEXT' +
        ') VALUES (?,?,?,?)',
        [item.id, item.name, item.description, `${item.thumbnail.path}.${item.thumbnail.extension}`]);
    });

    this.setState({
      characters: resultCharacters
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        {
          this.state.characters.length == 0 ?
            <Text key='loading' style={styles.textStyleButton}> Loading ...</Text>
            :
            <ScrollView >
              {this.state.characters.map((character, idx) =>
              (
                <CardCharacter key={idx} character={character} />
              ))}
            </ScrollView>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    elevation: 8,
    width: 220,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#673AB7',
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleButton: {
    color: '#FFFFFF',
    fontSize: 16
  }
});




