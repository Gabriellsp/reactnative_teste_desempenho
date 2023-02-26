import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuPage from './src/sreens/menu/menu_page';
import AppbarHeader from './src/components/header';

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
      <Stack.Navigator headerMode="screen"
            screenOptions={{
               header:({scene,navigation})=>(
                   <AppbarHeader scene={scene} navigation={navigation}/>
               )
            }}
        initialRouteName="Menu">
        <Stack.Screen name="Menu" component= {MenuPage}
          screenOptions ={
            {headerTitle: "Menu"}
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

