import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WeatherProvider } from './context/WeatherContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
    return (
        <SafeAreaProvider>
            <WeatherProvider>
                <NavigationContainer>
                    <StatusBar style="light" />
                    <AppNavigator />
                </NavigationContainer>
            </WeatherProvider>
        </SafeAreaProvider>
    );
}
