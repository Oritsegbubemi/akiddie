import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'; 
import { Actions } from 'react-native-router-flux';
import { Logo1 } from '../common';

export default class Intro extends Component {
  state={ display: true };
  componentWillMount() {
    setTimeout(() => {
      this.setState({ display: false });
    }, 2000);
  }
  renderDisplay() {
     if (this.state.display) {
      return <Logo1 />;
    }
    return (
      Actions.login()
    );  
  }
  render() { 
    return (
      <View style={styles.container}>
        {this.renderDisplay()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
