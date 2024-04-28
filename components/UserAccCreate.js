import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import Frame1 from './Frame1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({navigation, route}) {

    const [text, onChangeText] = React.useState('  Enter your name')
    const [EmailText, onEmailText] = React.useState('  Enter your email')
    const [PasswordText, onPasswordText] = React.useState(' Create a password') 
  return (
    <View style={styles.root}>
        <Text style={styles.header}>
            {'Create Your Account'}
        </Text>
        <Text style={styles.subheader}>
            {'Start the cycle of kindness'}
        </Text>

     
        <Text style={styles.textboxinput}>
            {'Name'}
        </Text>
        <SafeAreaView style={styles.container}>
            <TextInput onChangeText={onChangeText} value ={text} style={styles.input} />
        </SafeAreaView>
    
        <Text style={styles.textboxinput}>
            {'Email'}
        </Text>
        <SafeAreaView style={styles.container}>
            <TextInput onEmailText={onEmailText} value ={EmailText} style={styles.input} />
        </SafeAreaView>
      
        <Text style={styles.textboxinput}>
            {'Password'}
        </Text>
        <SafeAreaView style={styles.container}>
            <TextInput onPasswordText={onPasswordText} value ={PasswordText} style={styles.input} />
        </SafeAreaView>
        <View style={styles.button}>
            <Button title="Continue" onPress={() => navigation.navigate('AboutUs2')} color='#000000'/>
        </View>    
  </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,

    //alignItems: 'center',
    marginLeft: 0,
    backgroundColor: 'rgba(255, 254, 248, 1)',
  },
  container: {
    flex: .1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    marginBottom: 40,
  },
  input: {
    height: 40,
    margin: 12,
    width: 260,
    backgroundColor: '#DAEED7',
    borderWidth: 0,
    marginLeft: 55,
  },
  textboxinput: {
    color: 'rgba(52, 68, 101, 1)',
    marginTop: 20,
    marginLeft: 45,
    fontSize: 18,
    zIndex: 100,
    marginBottom: 0,
    maxWidth: '90%',
  },
  welcomeToFRCycle: {
    color: 'rgba(152, 197, 171, 1)',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '200',
    marginBottom: -30,
    marginTop: 60,
  },
  header: {
    color: 'rgba(152, 197, 171, 1)',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 0,
    marginTop: 70,
  },
  subheader: {
    color: 'rgba(152, 197, 171, 1)',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 25,
    marginTop: 0,
  },
  button: {
    backgroundColor: 'rgba(152, 197, 171, 1)', 
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 200,
    borderRadius: 20,
    marginTop: 196,
    marginBottom: 0,
    marginLeft: 80
  },
});
