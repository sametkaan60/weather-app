import { useState, useEffect } from 'react';

export const useLocation = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            // In a real application, you would use expo-location
            // For this UI demo, mock London's coordinates
            setTimeout(() => {
                setLocation({
                    coords: {
                        latitude: 51.5074,
                        longitude: -0.1278
                    }
                });
            }, 500);
        };

        fetchLocation();
    }, []);

    return { location, errorMsg };
};
