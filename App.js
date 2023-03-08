import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuPage from './src/sreens/menu/menu_page';
import DataRenderingPage from './src/sreens/data_rendering/data_rendering_page';
import ProcessingPage from './src/sreens/processing/processing_page';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors, 
    backgound: "transparent" 
  }
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator mode="modal" headerMode="screen"
         screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerTitleAlign:'center',
          headerStyle: { backgroundColor: '#673AB7' },
        }}
        initialRouteName="Menu">
        <Stack.Screen 
          name="Menu" 
          options={{title: 'Menu'}}
          component= {MenuPage}
        />
        <Stack.Screen 
          name="Processing"
          options={{title: 'Teste de Processamento'}}
          component= {ProcessingPage}
        />
        <Stack.Screen 
          name="DataRendering"
          options={{title: '1000 Marvel Characters'}}
          component= {DataRenderingPage}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

