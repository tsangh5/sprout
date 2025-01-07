import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavHeader = ({ onNotificationPress }) => {
    return (
        <View style={styles.header}>
            {/* Logo on the left */}
            <Image
                source={require('../assets/logo.png')} // Replace with your logo path
                style={styles.logo}
            />

            {/* Notification Button on the right */}
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
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
    notificationButton: {
        padding: 10,
    },
    notificationIcon: {
        fontSize: 20,
    },
});

export default NavHeader;
