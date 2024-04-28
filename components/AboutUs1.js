import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Frame1 from './Frame1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({navigation, route}) {
  return (
    <View style={styles.root}>
      <Text style={styles.name}>
        {'About Us'}
      </Text>
      <Image source={require('../assets/images/recycleSymbol1.png')} style={styles.imageBackground} />

      <Text style={styles.about} testID="10:2">
        {`Our app is designed with a 
simple purpose in mind: to connect low-income individuals and families with restaurants willing to donate surplus food items. We believe that every meal matters and no edible food should go to waste when there are hungry mouths to 
feed. 
`}
      </Text>
      <Frame1 style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(255, 254, 248, 1)',
  },
  welcomeToFRCycle: {
    color: 'rgba(152, 197, 171, 1)',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '200',
    marginBottom: -30,
    marginTop: 60,
  },
  name: {
    color: 'rgba(152, 197, 171, 1)',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 25,
  },
  about: {
    color: 'rgba(52, 68, 101, 1)',
    marginTop: 140,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    zIndex: 1,
    marginBottom: 260,
  },
  imageBackground: {// Position the image absolutely relative to its container
    position: 'absolute',
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.3,
    width: '58%', // Make the image cover the entire container
    height: '30%',
  },
  button: {
    marginTop: 150,
    borderRadius: 10,
  }
});
