import React from 'react';
import { StyleSheet, Dimensions, View, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Pdf from 'react-native-pdf';
 
export default class PDFExample extends React.Component {
    onHeader() {
        Actions.akiddie();
    }
    render() {
        const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
        return (
                <View style={styles.container}>
                    <Pdf
                        source={source}

                        onLoadComplete={(numberOfPages) => {
                            //console.log(`number of pages: ${numberOfPages}`);
                        ToastAndroid.show(`number of pages: ${numberOfPages}`, ToastAndroid.SHORT);
                        }}
                        onPageChanged={(page) => {
                            console.log(`current page: ${page}`);
                        }}
                        onPageSingleTap={(page) => {
                            //console.log(`current page: ${page}`);
                            ToastAndroid.show(`Page: ${page}`, ToastAndroid.SHORT);
                        }}
                        onScaleChanged={(scale) => {
                            console.log(`scale: ${scale}`);
                        }}
                        onError={(error) => {
                            console.log(error);
                        }} 
                        style={styles.pdf}
                    />
                </View>
        );
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});
