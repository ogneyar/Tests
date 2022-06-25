import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

  return (
    <View style={styles.header}>
      <Text style={styles.button}>Главное меню!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        textAlign: "center",
        padding: 30,
        backgroundColor: "lightgrey",
    },
    button: {
        backgroundColor: "#bbb",
        
    }
});
