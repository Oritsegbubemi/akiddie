import React from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'; 

const Input2 = ({ 
  onChangeText, 
  value, 
  autoFocus,
   secureTextEntry, 
   autoCorrect, 
   onPress, 
   keyboardType
  }) => (
        <View style={styles.container}>
            <TextInput 
               secureTextEntry={secureTextEntry}
               autoFocus={autoFocus}
               autoCorrect={autoCorrect}
               value={value}
               onChangeText={onChangeText}
               style={styles.inputStyle}
               underlineColorAndroid='#1a67a2'
               keyboardType={keyboardType}
            />
            <TouchableOpacity 
            onPress={onPress}
            style={styles.visibilityBtn} 
            >
                <Image
                    // eslint-disable-next-line global-require
                    source={require('../images/icons/icons8_Eye_96px.png')}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
        </View>
    );

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      alignSelf: 'stretch',
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
  visibilityBtn:
  {
    position: 'absolute',
    right: 2,
    height: 30,
    width: 30,
  },
  imageStyle: {
    width: 25,
    height: 25
  }
});

export { Input2 };
