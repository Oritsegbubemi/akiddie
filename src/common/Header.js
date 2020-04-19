import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const Header = ({ headerText, }) => (
    <View style={styles.ViewStyle}>
        <View style={styles.container}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
        
    </View>
    );

const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: '#0b6fa8',
        alignItems: 'center',
        height: 60,
        paddingTop: 8,
        paddingBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
        //flexDirection: 'row'
    },
    textStyle: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        
    },
    
});

export { Header };
