import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Confirm } from '../common';

export default class SideM extends Component {
    state= { showModal: false };
    onProfilePress() {
        Actions.profile();
    }
    onPreferencesPress() {
        Actions.preferences();
    }
    onPaymentPress() {
        Actions.payment();
    }
    onAccept() {
        this.setState({ showModal: false });
        Actions.login();
    }
    onDecline() {
        this.setState({ showModal: false });
        Actions.akiddie();  
    }

    render() {
      return (
        <View style={styles.container}>
        <View style={styles.profile}>
            <Text style={styles.headerText}>Akiddie Reading</Text>
            <Image
                style={styles.logoStyle2}
                // eslint-disable-next-line global-require
                source={require('../images/icons/icons8_User_100px.png')} 
            />
        </View>
            <View style={styles.content}>
                <View style={styles.container2}>
                <View style={styles.nameStyle}>
                    <Text style={styles.nameTextStyle}>Gbubemi</Text>
                </View>
                    <TouchableOpacity 
                        onPress={this.onProfilePress.bind(this)}
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.textStyle}>Profile Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.onPaymentPress.bind(this)}
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.textStyle}>Payments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.setState({ showModal: !this.state.showModal })}
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.textStyle}>Logout</Text>
                    </TouchableOpacity>
                    <Confirm
                        style={styles.confirmStyle}
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
            Are you sure you want to proceed?
        </Confirm>
                </View>
        </View> 
    </View>
       );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profile: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#1a67a2',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        paddingRight: 10
    },
    logoStyle2: {
        width: 23,
        height: 23,
    },
     content: {
         paddingBottom: 30,
     },
     container2: {
        justifyContent: 'center',
        backgroundColor: '#1a67a2',
        paddingBottom: 450,
        paddingTop: 10,
        marginRight: 0,
        marginLeft: 0,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#fff',
    },
    nameStyle: {

    },
    nameTextStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        paddingTop: 20,
        paddingBottom: 20,
        padding: 10
    },
    buttonStyle: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    textStyle: {
        fontSize: 18,
        color: '#fff',
        alignSelf: 'flex-end'
    },
    confirmStyle: {
        alignItems: 'center',
        //justifyContent: 'center'
    }
});

