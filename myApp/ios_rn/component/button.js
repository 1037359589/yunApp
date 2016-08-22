/**
 * Created by pzl on 16/8/21.
 */
import React, { Component } from 'react';
var ReactNative = require('react-native');
var {
    Text,
    TouchableHighlight
    } = ReactNative;

export class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            text:this.props.text,
            styleOne:this.props.btnStyleView,
            press:this.props.press,
            styleTwo:this.props.btnStyleText,
            beforeText:this.props.beforeText,
            afterText:this.props.afterText
        };
    }
    render(){
        return  (
            <TouchableHighlight onPress={this.state.press} style={this.state.styleOne}>
                <Text style={this.state.styleTwo}>{this.state.beforeText}{this.state.text}</Text>
            </TouchableHighlight>
            )
    }
}