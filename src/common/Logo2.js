import React from 'react';
import { StyleSheet, View, Image } from 'react-native'; 

const Logo2 = () => (
        <View style={styles.container}>
            <Image
                style={styles.logoStyle}
                // eslint-disable-next-line global-require
                source={require('../images/logos/akiddie_logo_just_yellow.png')} 
            />
        </View>
    );

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
  },
  logoStyle: {
      width: 170,
      height: 95,
  }
});

export { Logo2 };
