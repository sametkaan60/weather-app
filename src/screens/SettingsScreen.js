import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function SettingsScreen() {
    return (
        <LinearGradient colors={['#0B0F19', '#1A233A']} style={styles.container}>
            <Settings color={colors.primary} size={64} style={{ marginBottom: 20 }} />
            <Text style={styles.text}>Settings</Text>
            <Text style={styles.subtext}>Configure units (C/F), notifications, and theme preferences here.</Text>
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
