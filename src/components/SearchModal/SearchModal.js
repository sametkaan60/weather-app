import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Search, X } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export default function SearchModal({ visible, onClose, onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
            setQuery('');
            onClose();
        }
    };

    return (
        <Modal visible={visible} animationType="fade" transparent>
            <BlurView intensity={40} tint="dark" style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Search City</Text>
                        <TouchableOpacity onPress={onClose}>
                            <X color={colors.text} size={24} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Search color={colors.textSecondary} size={20} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter city name..."
                            placeholderTextColor={colors.textSecondary}
                            value={query}
                            onChangeText={setQuery}
                            onSubmitEditing={handleSearch}
                            autoFocus
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleSearch}>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </BlurView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        padding: spacing.lg,
    },
    container: {
        backgroundColor: 'rgba(11, 15, 25, 0.9)',
        borderRadius: 24,
        padding: spacing.xl,
        borderColor: colors.surfaceBorder,
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    title: {
        color: colors.text,
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.bold,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 16,
        paddingHorizontal: spacing.md,
        height: 50,
        marginBottom: spacing.lg,
    },
    input: {
        flex: 1,
        color: colors.text,
        fontSize: typography.sizes.md,
        marginLeft: spacing.sm,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 16,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.background, // Make it readable on neon background
        fontSize: typography.sizes.md,
        fontWeight: typography.weights.bold,
    }
});
