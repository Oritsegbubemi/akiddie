import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Icon, Title, Button, Left, Body } from 'native-base';

export default class Profile extends Component {
    onBackButtonPress() {
        Actions.akiddie();
    }
    render() {
        return (
            <View style={styles.container}>
                <Header 
                    style={{ backgroundColor: '#0b6fa8' }} 
                    androidStatusBarColor='#192f3f'
                > 
                    <Left>
                        <Button transparent onPress={this.onBackButtonPress.bind(this)}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={styles.bodyStyle}>
                        <Title style={styles.headerStyle}>My Profile</Title>
                    </Body>
                </Header>
                <View>
                    <View>
                        <Icon name='ios-person' />
                        <Text>Username</Text>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <Text>Email Address</Text>
                    </View>
                    <View>
                        <Text>Library</Text>
                        <Text>Read Books</Text>
                        <Text>Favourite Books</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
      },
      headerStyle: {
        fontSize: 25,
        alignSelf: 'center',
      },
      bodyStyle: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }
});
