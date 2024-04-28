import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Frame1 = () => {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    // ... other styles
    button: {
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAEED7', // Set background color here
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    },
  });
  

export default Frame1;
