import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Frame1 from './components/Frame1'
import WelcomeScreen from './components/Welcome'
import AboutUs1 from './components/AboutUs1'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen
          name='Home'
          component={WelcomeScreen}
        />

        <Stack.Screen
          name='AboutUs1'
          component={AboutUs1}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


