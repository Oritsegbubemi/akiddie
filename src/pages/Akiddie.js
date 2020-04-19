import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SideMenu from 'react-native-side-menu';
import Book from '../components/Book';
import SideRight from './SideRight';

export default class Akiddie extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  onReadingPress() {
    Actions.main();
  }
  onLanguagePress() {
    Actions.languagelink();
  }
  onMenuItemSelected() {
    this.setState({ isOpen: false });
  }
  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
    render() {
      const menu = <SideRight onItemSelected={this.onMenuItemSelected} />;
        return (
          <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={isOpen => this.updateMenuState(isOpen)}
            menuPosition='right'
          >
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.reading}>
              <TouchableOpacity onPress={this.onReadingPress.bind(this)}>
                <Image
                    style={styles.logoStyle1}
                    // eslint-disable-next-line global-require
                    source={require('../images/icons/icons8_Literature_100px.png')}
                />
              </TouchableOpacity>
              </View>

              <View style={styles.language}>
                <TouchableOpacity onPress={this.onLanguagePress.bind(this)}>
                  <Text style={styles.headerText}>Akiddie Languages</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.profile}>
                <TouchableOpacity onPress={this.toggle.bind(this)}>
                  <Image
                    style={styles.logoStyle2}
                    // eslint-disable-next-line global-require
                    source={require('../images/icons/icons8_User_100px.png')} 
                  />
                </TouchableOpacity>
              </View>
            </View>
            
            <ScrollView style={styles.scroll}>
              <View style={styles.content}>
                <TouchableOpacity>
                  <Book />
                </TouchableOpacity>
               
              </View>
            </ScrollView>
          </View>
          </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 10,
        backgroundColor: '#1a67a2',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reading: {
        alignItems: 'flex-start',
        marginLeft: 5
    },
    language: {
        alignItems: 'center',
    },
    profile: {
        alignItems: 'flex-end',
        marginRight: 5
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
    logoStyle1: {
        width: 23,
        height: 23,
    },
    logoStyle2: {
        width: 23,
        height: 23,
    },
     scroll: {
         flex: 1, 
     },
     content: {
         flex: 2,
         paddingTop: 10,
         paddingBottom: 30,
     },
     toggleStyle: {
       flex: 1
     }
});
