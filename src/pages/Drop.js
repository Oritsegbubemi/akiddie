import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';
import Book from '../components/Book';

export default class Drop extends Component {
    onPagePress() {
        Actions.akiddie();
    }
    render() {
        const data = [{
            value: 'English',
        }, {
            value: 'Igbo',
        }, {
            value: 'Hausa',
        }, {
            value: 'Yoruba',
        }
    ];
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Dropdown data={data} />
                    <TouchableOpacity onPress={this.onPagePress.bind(this)}>
                        <Book />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    }
});

