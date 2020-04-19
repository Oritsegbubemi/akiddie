import React, { Component } from 'react';
import { View } from 'react-native';
import { OffCanvas3D } from 'react-native-off-canvas-menu';
import Akiddie from './Akiddie';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: true
        };
    }

    handleMenu() {
        const { menuOpen } = this.state;
        this.setState({
          menuOpen: !menuOpen
        });
    }

    render() {
        return (
          <View style={{ flex: 1 }}>
            <OffCanvas3D
            active={this.state.menuOpen}
            onMenuPress={this.handleMenu.bind(this)}
            backgroundColor={'#1a67a2'}
            handleBackPress
            menuItems={[
              {
                title: 'Standard',
                Icon: '../images/icons/icons8_Sound_100px.png',
                renderScene: <Akiddie />
              },
              {
                title: 'Narrator',
                Icon: '../images/icons/icons8_Sound_100px.png',
                renderScene: <Akiddie />
              }
            ]} 
            />
          </View>
        );
      }
    }
