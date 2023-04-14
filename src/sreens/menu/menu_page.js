import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Database from '../../database/database';

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await Database.init();
  }

  render() {
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
    var navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Processing")}>
          <Text style={styles.textStyleButton}>Teste de processamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.textStyleButton} onPress={() => navigation.navigate("DataRendering")}>Teste de renderização</Text>
        </TouchableOpacity>
      </View>
    );

  }
}



export default MenuPage;
