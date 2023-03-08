import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View } from 'react-native';

const ProcessingPage = ({navigation}) => {
  return (
    <View style= {styles.container}>
      <StatusBar style="light" />
      <Text>About Screen</Text>
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
  },
  textStyleButton: {
    color:'#FFFFFF',
    fontSize: 16
  }
});


export default ProcessingPage;
