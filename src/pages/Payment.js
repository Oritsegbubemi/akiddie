import React, { Component } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input';
import { Header, Icon, Title, Button, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Button2 } from '../common';

export default class Payment extends Component {
  state = { useLiteCreditCardInput: false };
  onChange = (formData) => console.log(JSON.stringify(formData, null, ' '));
  onFocus = (field) => console.log('focusing', field);
  onPayment() { Actions.akiddie(); }
  onBackButtonPress() { Actions.akiddie(); }
  setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

  render() {
    return (
      <View style={styles.cont}>
        <Header 
        style={{ backgroundColor: 'green' }} 
        androidStatusBarColor='#192f3f'
        > 
        <Left>
          <Button transparent onPress={this.onBackButtonPress.bind(this)}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body style={styles.bodyStyle}>
          <Title style={styles.headerStyle}>Payment</Title>
        </Body>
      </Header>
      <View styles={styles.container}>
        <Switch
          style={styles.switch}
          onValueChange={this.setUseLiteCreditCardInput}
          value={this.state.useLiteCreditCardInput} 
        />

        { this.state.useLiteCreditCardInput ?
          (
            <LiteCreditCardInput
              autoFocus
              inputStyle={styles.input}

              validColor={'black'}
              invalidColor={'red'}
              placeholderColor={'darkgray'}

              onFocus={this.onFocus}
              onChange={this.onChange} 
            />
          ) : (
            <CreditCardInput
              autoFocus
              requiresName
              requiresCVC
              requiresPostalCode
              labelStyle={styles.label}
              inputStyle={styles.input}
              validColor={'black'}
              invalidColor={'red'}
              placeholderColor={'darkgray'}
              onFocus={this.onFocus}
              onChange={this.onChange} 
            />
          )
        }
        <Button2 onPress={this.onPayment.bind(this)}>
          CONFIRM PAYMENT
        </Button2>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1
  },
  switch: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#F5F5F5',
    marginTop: 60,
  },
  label: {
    color: 'black',
    fontSize: 15,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  headerStyle: {
    fontSize: 28,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  bodyStyle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
