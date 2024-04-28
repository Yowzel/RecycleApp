import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Frame1 from './Frame1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({navigation, route}) {
  return (
    <View style={styles.root}>
      <Text style={{marginTop: 70}}>
        <Text style={styles.boldReady}>
            {'Ready'}
        </Text>
        <Text style={styles.name}>
            {' to build the \n circle kindness together?'}
        </Text>
      </Text>
      <Text style={styles.about} testID="10:2">
        {"Are you an"}
      </Text>
      <Image source={require('../assets/images/boy.png')} style={styles.imageBackground1} />
      <View style={styles.button1}>
        <Button title="Individual" onPress={() => navigation.navigate('UserLogin')} color='#ffffff'/>
      </View>
      <Image source={require('../assets/images/corp.png')} style={styles.imageBackground2} />

      <View style={styles.button2}>
        
        <Button title="Organization" onPress={() => navigation.navigate('BusinessOwnerLogin')} color='#ffffff'/>
      </View>
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
    marginTop: 70
  },
  boldReady: {
    color: 'rgba(152, 197, 171, 1)',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 25,
    marginTop: 70,
    fontWeight: 'bold'
  },
  about: {
    color: 'rgba(152, 197, 171, 1)',
    marginTop: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    zIndex: 1,
    marginBottom: 140,
    maxWidth: '90%',
  },
  imageBackground1: {// Position the image absolutely relative to its container
    position: 'absolute',
    marginTop: 310,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    width: '29%', // Make the image cover the entire container
    height: '15%',
  },
  imageBackground2: {// Position the image absolutely relative to its container
    position: 'absolute',
    marginTop: 520,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    width: '29%', // Make the image cover the entire container
    height: '15%',
  },
  button1: {
    backgroundColor: 'rgba(152, 197, 171, 1)', 
    paddingVertical: 15,
    paddingHorizontal: 52,
    borderRadius: 0,
    marginBottom: 140,
  },
  button2: {
    backgroundColor: 'rgba(152, 197, 171, 1)', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 0,
    marginBottom: 13,
  },
});
