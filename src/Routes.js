import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Reset from './pages/Reset';
import Akiddie from './pages/Akiddie';
import SideRight from './pages/SideRight';
import Main from './pages/Main';
import Drop from './pages/Drop';
import PdfExample from './pages/PdfExample';
import Payment from './pages/Payment';
import Profile from './pages/Profile';

export default class Routes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Router>
                    <Scene key='real' hideNavBar >
                        <Scene key='intro' component={Intro} title='Intro' initial />
                        <Scene key='login' component={Login} title='Login' />
                        <Scene key='signup' component={Signup} title='Signup' />
                        <Scene key='forgot' component={Reset} title='Reset' />
                        <Scene key='akiddie' component={Akiddie} title='Akiddie' />
                        <Scene key='sideright' component={SideRight} title='SideRight' />
                        <Scene key='main' component={Main} title='Main' />
                        <Scene key='drop' component={Drop} title='Drop' />       
                        <Scene key='payment' component={Payment} title='Payment' />
                        <Scene key='profile' component={Profile} title='Profile' />
                        <Scene key='pdfexample' component={PdfExample} title='PdfExample' />
                    </Scene>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

