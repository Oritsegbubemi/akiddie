import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Routes extends Component {
    onBookPress() {
        Actions.pdfexample();
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>

                <View style={styles.ageStyle}>
                    <Text style={styles.ageTextStyle}>Age 0-3</Text>
                </View>

                    <View style={styles.groupView}>
                        <View style={styles.imageView}>
                            <TouchableOpacity onPress={this.onBookPress.bind(this)}>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_1.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Jagun</Text>
                        </View>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_2.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Ekwensu</Text>
                        </View>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_3.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Renascentia</Text>
                        </View>
                    </View>
                    <View style={styles.groupView}>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_4.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Mmiri</Text>
                        </View>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_5.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Ojo oja</Text>
                        </View>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_6.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>River Goddess</Text>
                        </View>
                    </View>

                   <View style={styles.ageStyle}>
                        <Text style={styles.ageTextStyle}>Age 4-6</Text>
                    </View>

                    <View style={styles.groupView}>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_7.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Something in the water</Text>
                        </View>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_8.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Huntress</Text>
                        </View>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageStyle}
                                    // eslint-disable-next-line global-require
                                    source={require('../images/books/Artboard_9.jpg')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>The stronger the truck</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
    },
    content: {
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15
    },
    groupView: {
        flexDirection: 'row'
    },
    imageView: {
        flex: 1
    },
    imageStyle: {
        width: 142,
        height: 170
    },
    textStyle: {
        fontSize: 19,
        alignSelf: 'center',
        textAlign: 'center'
    },
    ageStyle: {
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 10,
        flexWrap: 'wrap'
    },
    ageTextStyle: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.6)',
        borderWidth: 1,
        padding: 0,
        width: 60
    }
});
