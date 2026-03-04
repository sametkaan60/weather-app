import React from 'react';
import { Sun, Cloud, CloudRain, CloudLightning, Snowflake, CloudFog } from 'lucide-react-native';

export const getWeatherIcon = (condition, params = {}) => {
    const { size = 24, color = '#FFFFFF' } = params;

    const conditions = {
        clear: Sun,
        clouds: Cloud,
        rain: CloudRain,
        thunderstorm: CloudLightning,
        snow: Snowflake,
        mist: CloudFog,
    };

    const IconComponent = conditions[condition?.toLowerCase()] || Sun;
    return <IconComponent size={size} color={color} />;
};
