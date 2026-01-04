import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BookShelf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    letterSpacing: 1,
  },
});
