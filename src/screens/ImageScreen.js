import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return <View>
    <ImageDetail 
    title='Beach'
    imageSource={require('../../assets/beach.jpg')}
    score={9}
    />

    <ImageDetail 
    title='Forest' 
    imageSource={require('../../assets/forest.jpg')}
    score={7}
    />

    <ImageDetail 
    title='Mountain' 
    imageSource={require('../../assets/mountain.jpg')}
    score={10}
    />

  </View>
};

const styles = StyleSheet.create({
});

export default ImageScreen;
