import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Button, StyleSheet, Text, View, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import Footer from './components/footer';
import Header from './components/header';

const image = { uri: "https://reactjs.org/logo-og.png" };

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {

  const onPressLearnMore = () => {
    console.log("Нажата кнопка")
    Alert.alert('Нажата кнопка')
    indicator ? setIndicator(false) :  setIndicator(true)
  };

  const [indicator, setIndicator] = useState(false);

  return (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Привеееет!</Text>
        <Button
          onPress={onPressLearnMore}
          title="Кнопка"
          color="green"
        />
        <Separator />

        {indicator ? <ActivityIndicator  style={styles.indicator} size="large" color="#00ff00" /> : <View />}

        <StatusBar style="auto" />
      </View>
      <Footer />

    </ImageBackground>
  </SafeAreaView >
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#eee',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  indicator: {
    position: "relative"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    padding: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    // opacity: 0.6
  }

});

export default App;
