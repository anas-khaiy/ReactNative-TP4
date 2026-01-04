import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfFooter() {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>
                Tous droits réservés – BookShelf, 2024
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 0,
    },
    footerText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        fontStyle: 'italic',
    },
});
