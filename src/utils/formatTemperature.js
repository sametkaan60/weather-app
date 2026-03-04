export const formatTemperature = (temp, unit = 'C') => {
    return `${Math.round(temp)}°`; // Leaving unit implicitly understood or easily appendable
};
