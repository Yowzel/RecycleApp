import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Frame1 from './Frame1'
import AboutUs1 from './AboutUs1'

export default function Welcome({navigation}) {
  return (
    <View style={styles.root}>
      <Text style={styles.welcomeToFRCycle} testID="3:5">
        {`Welcome to 
 `}
      </Text>
      <Text style={styles.name}>
        {'F&R Cycle'}
      </Text>
      <Image source={require('../assets/images/recycleSymbol1.png')} style={styles.imageBackground} />

      <Text style={styles.about} testID="10:2">
        {`A place where you can
find left over food &
recyclables from 
local shops & 
restaurants `}
      </Text>
      <View style={styles.button}>
        <Button title="Login" onPress={() => navigation.navigate('BusOrUser')} color='#000000'/>
      </View>
      <Button title="Learn More" onPress={() => navigation.navigate('AboutUs1')}/>
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
    marginBottom: 150,
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
    backgroundColor: 'rgba(152, 197, 171, 1)', 
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginBottom: 13,
  },
});
