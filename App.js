import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BookShelfHeader from './BookShelfHeader';
import WelcomeScreen from './WelcomeScreen';
import BookShelfFooter from './BookShelfFooter';

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.appContainer}>
                <StatusBar style="light" />
                <BookShelfHeader />
                <WelcomeScreen />
                <BookShelfFooter />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#333333',
    },
    appContainer: {
        flex: 1,
        backgroundColor: '#333333',
    },
});
