import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin } from 'lucide-react-native';
import { typography } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { formatTemperature } from '../../utils/formatTemperature';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import { formatDate } from '../../utils/dateFormatter';

export default function WeatherCard({ currentData, city }) {
    if (!currentData) return null;

    return (
        <LinearGradient
            colors={[colors.cardGradientStart, colors.cardGradientEnd]}
            style={styles.gradientContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <BlurView intensity={20} tint="dark" style={styles.container}>
                <View style={styles.header}>
                    <MapPin color={colors.primary} size={20} />
                    <Text style={styles.cityText}>{city}</Text>
                </View>
                <Text style={styles.dateText}>{formatDate(Date.now())}</Text>

                <View style={styles.weatherInfo}>
                    {getWeatherIcon(currentData.weather[0].main, { size: 72, color: colors.primary })}
                    <Text style={styles.tempText}>{formatTemperature(currentData.main.temp)}</Text>
                </View>

                <Text style={styles.descText}>{currentData.weather[0].description}</Text>

                <View style={styles.highLow}>
                    <Text style={styles.highLowText}>H: {formatTemperature(currentData.main.temp_max)}</Text>
                    <Text style={styles.highLowText}>L: {formatTemperature(currentData.main.temp_min)}</Text>
                </View>
            </BlurView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientContainer: {
        borderRadius: 32,
        margin: spacing.md,
        overflow: 'hidden',
        borderColor: colors.surfaceBorder,
        borderWidth: 1,
    },
    container: {
        padding: spacing.xl,
        paddingVertical: spacing.xxl,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.xs,
    },
    cityText: {
        color: colors.text,
        fontSize: typography.sizes.xl,
        fontWeight: typography.weights.bold,
        marginLeft: spacing.sm,
    },
    dateText: {
        color: colors.textSecondary,
        fontSize: typography.sizes.md,
        marginBottom: spacing.lg,
    },
    weatherInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempText: {
        color: colors.text,
        fontSize: typography.sizes.giant,
        fontWeight: typography.weights.bold,
        marginLeft: spacing.lg,
    },
    descText: {
        color: colors.text,
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.medium,
        textTransform: 'capitalize',
        marginTop: spacing.md,
    },
    highLow: {
        flexDirection: 'row',
        marginTop: spacing.md,
    },
    highLowText: {
        color: colors.textSecondary,
        fontSize: typography.sizes.md,
        marginHorizontal: spacing.md,
    }
});
