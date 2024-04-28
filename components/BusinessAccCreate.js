import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import Frame1 from './Frame1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({navigation, route}) {

    const [text, onChangeText] = React.useState('')
    const [EmailText, onEmailText] = React.useState('')
    const [PasswordText, onPasswordText] = React.useState('') 
  return (
    <View style={styles.root}>
        <Text style={styles.header}>
            {'Create Business'}
        </Text>
        <Text style={styles.subheader}>
            {'Start the cycle of kindness'}
        </Text>

     
        <Text style={styles.textboxinput}>
            {'Organization Name'}
        </Text>
        <SafeAreaView style={styles.container}>
            <TextInput onChangeText={onChangeText} value ={text} placeholder='   Enter your organization name' style={styles.input} />
        </SafeAreaView>
    
        <Text style={styles.textboxinput}>
            {'Organization Phone Number'}
        </Text>
        <SafeAreaView style={styles.container}>
            <TextInput onChangeText={onEmailText} value ={EmailText} placeholder='   Enter your phone number' style={styles.input} />
        </SafeAreaView>
      
        <Text style={styles.textboxinput}>
            {'Organization Address'}
        </Text>
        <Text style={styles.addressHeader}>
            {'Street Address'}
        </Text>
        <SafeAreaView style={styles.container}>
            <TextInput onChangeText={onPasswordText} value ={PasswordText} placeholder='   Create a password' style={styles.input} />
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
    color: '#98C5AB',
    marginTop: 10,
    marginLeft: 45,
    fontSize: 14,
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
  addressHeader: {
    color: 'rgba(52, 68, 101, 1)',
    marginLeft: 45,
    fontSize: 11,
    zIndex: 100,
    marginBottom: 0,
    maxWidth: '90%',
    marginTop: 8,
    }
});
