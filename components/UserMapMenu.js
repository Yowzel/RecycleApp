import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {React, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';

export default function UserMapMenu({navigation, route}) {

    const [region, setRegion] = useState({
        latitude: 38.5449,
        longitude: -121.7405,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      const davisRegion = {
        latitude: 38.5449,
        longitude: -121.7405,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

  return (
    <View style={styles.container}>
    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={davisRegion}
      >
        <Marker coordinate={davisRegion} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });