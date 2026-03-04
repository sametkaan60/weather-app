import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { formatTemperature } from '../../utils/formatTemperature';
import { getDayName } from '../../utils/dateFormatter';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export default function WeeklyCard({ forecastData }) {
    if (!forecastData || !forecastData.list) return null;

    const dailyData = forecastData.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 7);

    return (
        <BlurView intensity={20} tint="dark" style={styles.container}>
            <Text style={styles.title}>7-Day Forecast</Text>
            {dailyData.map((day, i) => (
                <View key={i} style={styles.row}>
                    <Text style={styles.dayText}>{getDayName(day.dt_txt, i === 0 ? 'Today' : undefined)}</Text>
                    <View style={styles.iconWithDesc}>
                        {getWeatherIcon(day.weather[0].main, { size: 24, color: '#FFFFFF' })}
                        <Text style={styles.descText}>{day.weather[0].main}</Text>
                    </View>
                    <View style={styles.tempRange}>
                        <Text style={styles.minTemp}>{formatTemperature(day.main.temp_min)}</Text>
                        <View style={styles.tempBar}>
                            <View style={styles.tempBarFill} />
                        </View>
                        <Text style={styles.maxTemp}>{formatTemperature(day.main.temp_max)}</Text>
                    </View>
                </View>
            ))}
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: spacing.md,
        padding: spacing.lg,
        borderRadius: 24,
        borderColor: colors.surfaceBorder,
        borderWidth: 1,
        overflow: 'hidden',
    },
    title: {
        color: colors.text,
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.bold,
        marginBottom: spacing.md,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    dayText: {
        color: colors.text,
        fontSize: typography.sizes.md,
        width: 60,
    },
    iconWithDesc: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
    },
    descText: {
        color: colors.textSecondary,
        marginLeft: spacing.sm,
        fontSize: typography.sizes.sm,
        textTransform: 'capitalize',
    },
    tempRange: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 110,
        justifyContent: 'flex-end',
    },
    minTemp: {
        color: colors.textSecondary,
        fontSize: typography.sizes.sm,
    },
    tempBar: {
        height: 6,
        width: 40,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 3,
        marginHorizontal: spacing.sm,
        overflow: 'hidden',
    },
    tempBarFill: {
        height: '100%',
        width: '60%',
        backgroundColor: colors.primary,
        borderRadius: 3,
    },
    maxTemp: {
        color: colors.text,
        fontSize: typography.sizes.md,
        fontWeight: typography.weights.bold,
    }
});
