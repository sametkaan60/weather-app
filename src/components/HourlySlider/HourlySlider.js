import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { formatTemperature } from '../../utils/formatTemperature';
import { formatTime } from '../../utils/dateFormatter';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export default function HourlySlider({ forecastData }) {
    if (!forecastData || !forecastData.list) return null;

    const hourly = forecastData.list.slice(0, 8); // Next 24 hours approx

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {hourly.map((item, index) => (
                    <BlurView key={index} intensity={25} tint="dark" style={[styles.card, index === 0 && styles.activeCard]}>
                        <Text style={styles.timeText}>{formatTime(item.dt_txt)}</Text>
                        <View style={styles.iconContainer}>
                            {getWeatherIcon(item.weather[0].main, { size: 32, color: index === 0 ? colors.text : colors.primary })}
                        </View>
                        <Text style={styles.tempText}>{formatTemperature(item.main.temp)}</Text>
                    </BlurView>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: spacing.md,
    },
    title: {
        color: colors.text,
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.bold,
        marginLeft: spacing.md,
        marginBottom: spacing.md,
    },
    scrollContent: {
        paddingHorizontal: spacing.md,
    },
    card: {
        alignItems: 'center',
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.lg,
        borderRadius: 24,
        marginRight: spacing.sm,
        borderColor: colors.surfaceBorder,
        borderWidth: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.03)',
        minWidth: 80,
    },
    activeCard: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    timeText: {
        color: colors.textSecondary,
        fontSize: typography.sizes.sm,
        marginBottom: spacing.sm,
    },
    iconContainer: {
        marginVertical: spacing.sm,
    },
    tempText: {
        color: colors.text,
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.bold,
    }
});
