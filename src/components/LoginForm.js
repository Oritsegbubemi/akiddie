import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Input, Button, Input2 } from '../common';

class LoginF extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          hidePassword: true
        };
      }
     
  onButtonPress() {
    const { email } = this.state;
    const { password } = this.state;

  fetch('http://10.0.2.2:8000/api/auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      //Authorization: 'Bearer'.$accessToken,
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(JSON.stringify(responseJson));
      })
      .catch((error) => {
        Alert.alert('Failed', error.message);
      });
  }

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>Email</Text>
            <Input 
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              keyboardType='email-address'
              //autoFocus
            />
          </View>

          <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>Password</Text>
            <Input2
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry={this.state.hidePassword} 
                onPress={this.managePasswordVisibility.bind(this)}
            />
          </View>
        </View>
        <View style={styles.forgotStyle}>
            <TouchableOpacity>
              <Text style={styles.forgotTextStyle}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonStyle}>
        <Button onPress={this.onButtonPress.bind(this)}>
              Log in
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryStyle: {
    padding: 8
  },
  textStyle: {
    fontSize: 21,
    color: '#000',
  },
  forgotStyle: {
    alignItems: 'flex-end',
    paddingRight: 8
  },
  forgotTextStyle: {
    color: '#1a67a2',
    fontSize: 17
  },
  errorStyle: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
},
inputStyle: {
  width: 300,
  paddingTop: 5,
  paddingBottom: 20,
  fontSize: 21,
  fontWeight: 'bold',
  color: 'rgba(0,0,0,1)',
  alignItems: 'center',  
},
buttonStyle: {
  marginTop: 10
}
});

export default LoginF;

