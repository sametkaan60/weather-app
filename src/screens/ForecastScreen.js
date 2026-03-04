import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useWeather } from '../hooks/useWeather';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import WeeklyCard from '../components/WeeklyCard/WeeklyCard';

export default function ForecastScreen() {
    const insets = useSafeAreaInsets();
    const { weatherData } = useWeather();

    return (
        <LinearGradient colors={['#0B0F19', '#1A233A']} style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingTop: insets.top + spacing.lg, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>Weekly Forecast</Text>
                {weatherData ? (
                    <WeeklyCard forecastData={weatherData.forecast} />
                ) : (
                    <Text style={styles.emptyText}>No forecast data available</Text>
                )}
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    title: {
        color: colors.text,
        fontSize: typography.sizes.xl,
        fontWeight: typography.weights.bold,
        paddingHorizontal: spacing.xl,
        marginBottom: spacing.md,
    },
    emptyText: {
        color: colors.textSecondary,
        textAlign: 'center',
        marginTop: spacing.xl,
    }
});
