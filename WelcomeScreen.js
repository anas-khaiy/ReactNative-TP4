import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}
            indicatorStyle="white"
        >
            <View style={styles.screenContainer}>
                <Text style={styles.title}>
                    Bienvenue sur BookShelf
                </Text>
                <Text style={styles.description}>
                    BookShelf est une bibliothèque numérique intelligente qui vous permet d’organiser, de découvrir et de partager vos lectures en toute simplicité.
                    Elle vous offre la possibilité de gérer votre collection de livres, de suivre votre avancement de lecture et de bénéficier de recommandations personnalisées adaptées à vos préférences littéraires.
                    Que vous soyez un lecteur assidu ou occasionnel, BookShelf facilite votre expérience de lecture en rendant la gestion de vos livres intuitive et agréable.
                    Découvrez de nouveaux genres, échangez vos avis avec d’autres lecteurs et gardez toujours une trace des ouvrages que vous souhaitez lire.
                </Text>
                <Text style={styles.description}>
                    Avec BookShelf, vous pouvez facilement cataloguer vos livres, suivre
                    vos progrès de lecture, et recevoir des recommandations personnalisées
                    basées sur vos goûts littéraires.
                </Text>
                <Text style={styles.description}>
                    Que vous soyez un lecteur passionné ou occasionnel, BookShelf vous
                    accompagne dans votre parcours de lecture en rendant la gestion de
                    votre collection simple et agréable.
                </Text>
                <Text style={styles.description}>
                    Explorez de nouveaux genres, partagez vos avis avec la communauté, et
                    ne perdez jamais de vue les livres que vous souhaitez lire.
                </Text>
                <Text style={styles.highlightText}>
                    Commencez votre voyage littéraire dès aujourd'hui !
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#333333',
    },
    contentContainer: {
        flexGrow: 1,
    },
    screenContainer: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#EDEFEE',
        textAlign: 'center',
        marginBottom: 24,
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 16,
        color: '#EDEFEE',
        lineHeight: 24,
        marginBottom: 16,
        textAlign: 'justify',
        opacity: 0.9,
    },
    highlightText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#EE9972',
        textAlign: 'center',
        marginTop: 20,
        letterSpacing: 0.5,
    },
});
