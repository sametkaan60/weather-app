import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Wind, Droplets, Sun, Eye } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

const StatItem = ({ icon, title, value }) => (
    <View style={styles.statContainer}>
        <View style={styles.iconContainer}>
            {icon}
        </View>
        <View>
            <Text style={styles.statTitle}>{title}</Text>
            <Text style={styles.statValue}>{value}</Text>
        </View>
    </View>
);

export default function InfoStatCard({ currentData }) {
    if (!currentData) return null;

    return (
        <BlurView intensity={20} tint="dark" style={styles.container}>
            <View style={styles.row}>
                <StatItem
                    icon={<Wind size={24} color={colors.primary} />}
                    title="Wind"
                    value={`${currentData.wind.speed} km/h`}
                />
                <StatItem
                    icon={<Droplets size={24} color={colors.primary} />}
                    title="Humidity"
                    value={`${currentData.main.humidity}%`}
                />
            </View>
            <View style={[styles.row, { marginTop: spacing.xl }]}>
                <StatItem
                    icon={<Sun size={24} color={colors.primary} />}
                    title="UV Index"
                    value="Strong"
                />
                <StatItem
                    icon={<Eye size={24} color={colors.primary} />}
                    title="Visibility"
                    value={`${currentData.visibility / 1000} km`}
                />
            </View>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: spacing.md,
        padding: spacing.xl,
        borderRadius: 24,
        borderColor: colors.surfaceBorder,
        borderWidth: 1,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
    },
    iconContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(0, 240, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.sm,
    },
    statTitle: {
        color: colors.textSecondary,
        fontSize: typography.sizes.sm,
        marginBottom: 4,
    },
    statValue: {
        color: colors.text,
        fontSize: typography.sizes.md,
        fontWeight: typography.weights.bold,
    }
});
