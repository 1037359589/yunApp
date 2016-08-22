/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {TabBarExample} from "./ios_rn/tab/home";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
console.log(13232);
class myApp extends Component {
    render() {
        return (

            <TabBarExample/>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


AppRegistry.registerComponent('myApp', () => myApp);
