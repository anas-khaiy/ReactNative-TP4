#!/bin/bash

echo "🚀 Lancement de BookShelf avec Expo..."
echo ""
echo "Options disponibles:"
echo "1. Expo Go (recommandé) - Scannez le QR code avec l'app Expo Go"
echo "2. Web - Ouvre dans le navigateur"
echo "3. Android - Nécessite un émulateur Android ou un appareil connecté"
echo ""

# Augmenter la limite de fichiers surveillés (pour macOS)
ulimit -n 4096 2>/dev/null || true

# Démarrer Expo
npx expo start

echo ""
echo "✅ Si vous rencontrez l'erreur 'EMFILE: too many open files':"
echo "   Essayez: npx expo start --web"
echo ""
