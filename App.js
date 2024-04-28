import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Frame1 from './components/Frame1'
import WelcomeScreen from './components/Welcome'
import AboutUs1 from './components/AboutUs1'
import AboutUs2 from './components/AboutUs2'
import AboutUs3 from './components/AboutUs3'
import BusOrUser from './components/BusOrUser'
import UserLogin from './components/UserLogin'
import UserAccCreate from './components/UserAccCreate'

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

        <Stack.Screen
          name='AboutUs2'
          component={AboutUs2}
        />
        <Stack.Screen
          name='AboutUs3'
          component={AboutUs3}
        />

        <Stack.Screen
          name='BusOrUser'
          component={BusOrUser}
        />

        <Stack.Screen
          name='UserLogin'
          component={UserLogin}
        />

        <Stack.Screen
          name='UserAccCreate'
          component={UserAccCreate}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


