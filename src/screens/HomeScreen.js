import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useWeather } from '../hooks/useWeather';
import { useLocation } from '../hooks/useLocation';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

import WeatherCard from '../components/WeatherCard/WeatherCard';
import HourlySlider from '../components/HourlySlider/HourlySlider';
import InfoStatCard from '../components/InfoStatCard/InfoStatCard';
import SearchModal from '../components/SearchModal/SearchModal';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const { location } = useLocation();
    const { weatherData, loading, error, loadWeather, searchCity } = useWeather();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (location) {
            loadWeather(location.coords.latitude, location.coords.longitude);
        }
    }, [location]);

    if (loading && !weatherData) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    if (error && !weatherData) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.searchButton, { marginTop: 20, width: 200 }]}>
                    <Text style={{ color: colors.text }}>Search Manually</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <LinearGradient colors={['#0B0F19', '#1A233A']} style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingTop: insets.top + spacing.md, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.greeting}>Good Morning</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.searchButton}>
                        <Search color={colors.text} size={20} />
                    </TouchableOpacity>
                </View>

                {weatherData && (
                    <>
                        <WeatherCard currentData={weatherData.current} city={weatherData.current.name} />
                        <HourlySlider forecastData={weatherData.forecast} />
                        <InfoStatCard currentData={weatherData.current} />
                    </>
                )}
            </ScrollView>

            <SearchModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSearch={(city) => searchCity(city)}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.xl,
        marginBottom: spacing.md,
    },
    greeting: {
        color: colors.text,
        fontSize: typography.sizes.xl,
        fontWeight: typography.weights.bold,
    },
    searchButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: colors.accent,
        fontSize: typography.sizes.md,
        textAlign: 'center',
        paddingHorizontal: spacing.lg,
    }
});
