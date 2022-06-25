import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {

  return (
    <View style={styles.footer}>
      <Text style={styles.button}>Подвал!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        textAlign: "center",
        padding: 30,
        backgroundColor: "lightgrey",
    },
    button: {
        backgroundColor: "#bbb",
        
    }
});
