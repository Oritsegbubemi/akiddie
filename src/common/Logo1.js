import React from 'react';
import { StyleSheet, View, Image } from 'react-native'; 

const Logo1 = () => (
        <View style={styles.container}>
            <Image
                style={styles.logoStyle}
                // eslint-disable-next-line global-require
                source={require('../images/logos/akiddie_logo_whiteback.jpg')} 
            />
        </View>
    );

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white'
  },
  logoStyle: {
      width: 350,
      height: 350,
  }
});

export { Logo1 };
