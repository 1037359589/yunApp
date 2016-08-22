/**
 * Created by pzl on 16/8/21.
 */
import React, { Component } from 'react';
import tabStyles  from './css/tab';
import {FindView} from "../find/find";
var ReactNative = require('react-native');
var {
    TabBarIOS,
    Text,
    View,
    ScrollView
    } = ReactNative;

export class TabBarExample extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab: 'blueTab',
            notifCount: 0,
            presses: 0
        }
    }
    _renderContent(color, pageText, num){
        var view=[];
        for(var i=num;i<100;i++){
            view.push(
                <Text style={tabStyles.tabText} key={i}>{i}asdasdaasdasdasdasdasdasdasasdasdasdasdasdasasdasdasdasdasdas</Text>
            )
        }
        return (
            <ScrollView>
                <View style={[tabStyles.tabContent, {backgroundColor: color}]}>
                {view}
                </View>
            </ScrollView>
        );
    }
    _getFindView=()=>{
        return (

                <FindView/>
        )
    };
    render() {
        return (
            <TabBarIOS
                unselectedTintColor="#9bb9ec"
                tintColor="#9bb9ec"
                barTintColor="#fff">
                <TabBarIOS.Item
                    title="发现"
                    icon={require('./img/tab_01.png')}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
                     this.setState({
                      selectedTab: 'blueTab',
                    });
                }}>
                    {this._getFindView()}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="空间"
                    icon={require('./img/tab_02.png')}
                    selected={this.state.selectedTab === 'aTab'}
                    onPress={() => {
                    this.setState({
                      selectedTab: 'aTab',
                      notifCount: this.state.notifCount + 1,
                    });
                }}>
                    {this._renderContent('#783333', 'a Tab', this.state.notifCount)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="精选"
                    icon={require('./img/tab_03.png')}
                    //selectedIcon={require('./img/relay.png')}
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                    this.setState({
                      selectedTab: 'greenTab',
                      presses: this.state.presses + 1
                    });
                }}>
                    {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="订单"
                    icon={require('./img/tab_04.png')}
                    selected={this.state.selectedTab === 'bTab'}
                    onPress={() => {
                    this.setState({
                      selectedTab: 'bTab',
                      notifCount: this.state.notifCount + 1,
                    });
                }}>
                    {this._renderContent('#783222', 'b Tab', this.state.notifCount)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="我的"
                    icon={require('./img/tab_05.png')}
                    selected={this.state.selectedTab === 'cTab'}
                    onPress={() => {
                    this.setState({
                      selectedTab: 'cTab',
                      notifCount: this.state.notifCount + 1,
                    });
                }}>
                    {this._renderContent('#783E33', 'c Tab', this.state.notifCount)}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}




