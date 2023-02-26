import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet,Text, View } from 'react-native';

const MenuPage = ({navigation}) => {
  return (
    <View style= {styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity style = {styles.button}>
      <Text>Teste de processamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} >
      <Text>Teste de renderização</Text>
      </TouchableOpacity>
    </View>
  );
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
  }
});


export default MenuPage;
