import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavHeader = ({ onNotificationPress }) => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/headerIcon.png')} // Adjust the path as needed
                style={styles.logo}
            />
            <TouchableOpacity style={styles.notificationButton} onPress={onNotificationPress}>
                <Text style={styles.notificationIcon}>🔔</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 15,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    notificationButton: {
        padding: 10,
    },
    notificationIcon: {
        fontSize: 20,
    },
    logo: {
        width: 100, // Set appropriate width
        height: 40, // Set appropriate height
        resizeMode: 'contain', // Ensures proper scaling
    },
});

export default NavHeader;
