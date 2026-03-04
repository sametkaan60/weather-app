import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function MapScreen() {
    return (
        <LinearGradient colors={['#0B0F19', '#1A233A']} style={styles.container}>
            <MapPin color={colors.primary} size={64} style={{ marginBottom: 20 }} />
            <Text style={styles.text}>Map View</Text>
            <Text style={styles.subtext}>Interactive radar and weather maps would appear here.</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: colors.text,
        fontSize: typography.sizes.xl,
        fontWeight: typography.weights.bold,
    },
    subtext: {
        color: colors.textSecondary,
        fontSize: typography.sizes.md,
        textAlign: 'center',
        marginTop: 10,
    }
});
