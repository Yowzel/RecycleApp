import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import Frame1 from './Frame1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({navigation, route}) {

    const [text, onChangeText] = React.useState('')
    const [organization, onOrganization] = React.useState('')
    const [password, onPassword] = React.useState('')
  return (
    <View style={styles.root}>
        <Text style={styles.header}>
            {'Business Owner'}
        </Text>
        <Text style={styles.otherHeader}>
            {'Log in'}
        </Text>
     
       
        <SafeAreaView style={styles.container}>
            <TextInput onChangeText={onChangeText} value ={text} placeholder='   Phone number, username, or email' style={styles.input} />
        </SafeAreaView>
    
        <SafeAreaView style={styles.container}>
            <TextInput onChangeText={onOrganization} value ={organization} placeholder='   Organization name' style={styles.input} />
        </SafeAreaView>
      
        <SafeAreaView style={styles.container}>
            <TextInput onChangeText={onPassword} value ={password} placeholder='   Password' style={styles.input} />
        </SafeAreaView>
        
        <Text style={{marginLeft: 150, marginTop: 20}}> 
            {'Forgot Password?'} 
        </Text>
        <View style={styles.button2}>
            <Button title="Sign In" onPress={() => navigation.navigate('UserLogin')} color='#ffffff'/>
        </View> 
        <Text style={{marginTop: 20}}>
            <Button title="Create new account" onPress={() => navigation.navigate('BusinessAccCreate')}/>
        </Text>

  </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,

    alignItems: 'center',
    marginLeft: 0,
    backgroundColor: 'rgba(255, 254, 248, 1)',
  },
  container: {
    flex: .1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    width: 260,
    backgroundColor: '#DAEED7',
    borderWidth: 0,
    
  },
  textboxinput: {
    color: 'rgba(52, 68, 101, 1)',
    marginTop: 0,
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
    marginBottom: 10,
    marginTop: 70,
  },
  otherHeader: {
    color: '#98C5AB',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 100,
    marginTop: 0,
  },
  subheader: {
    color: 'rgba(152, 197, 171, 1)',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 25,
    marginTop: 0,
  },
  button1: {
    backgroundColor: 'rgba(152, 197, 171, 1)', 
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 200,
    borderRadius: 20,
    marginTop: 300,
    marginBottom: 0,
    
  },
  button2: {
    backgroundColor: 'rgba(152, 197, 171, 1)', 
    paddingVertical: 15,
    width: '69%',
    borderRadius: 0,
    marginTop: 30,
  }
});
