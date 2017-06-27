import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView
  } from 'react-native';

import TWebView from './webview';

import Util from './util';
import Help from './setting/help';
import Detail from './setting/detail';
import Tips from './setting/tips';
import About from './setting/about';

class SettingView extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.img_view}>
            <Image
              style={styles.icon}
              source={{uri:'logo'}}
              resizeMode="contain"/>
            <Text style={styles.version}>v1.0.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view} navigator={this.props.navigator} onPress={this._goPage.bind(this,Detail,'功能介绍')}>
            <Text style={styles.text}>功能介绍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view} navigator={this.props.navigator} onPress={this._goPage.bind(this,Help,'帮助中心')}>
            <Text style={styles.text}>帮助中心</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view} navigator={this.props.navigator} onPress={this._goPage.bind(this,Tips,'服务条款')}>
            <Text style={styles.text}>服务条款</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.text_view,styles.add_bottom]} navigator={this.props.navigator} onPress={this._showAbout.bind(this)}>
            <Text style={styles.text}>关于</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  _goPage(component,title){
    this.props.navigator.push({
      component:component,
      title:title
    })
  }
  _showAbout(){
    AlertIOS.alert('如有问题,联系', 'zuishiguang@126.com', [{text: '确认'}]);
  }
}

class Setting extends Component{
  render(){
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: SettingView,
          title: '设置',
          navigationBarHidden: true
      }}
      style={{flex:1}}/>
    );
  }
}

const styles = StyleSheet.create({
  img_view:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
  },
  icon:{
    width:88,
    height:100
  },
  text_view:{
    borderTopWidth:Util.pixel,
    borderTopColor:'#ECECEC',
    height:40,
    paddingLeft:10,
    justifyContent:'center'
  },
  text:{
    fontSize:16,
    color:'#868887',
    fontWeight:'400'
  },
  add_bottom:{
    borderBottomWidth:Util.pixel,
    borderBottomColor:'#ECECEC',
  },
  version:{
    fontSize:14,
    fontWeight:'300',
    marginBottom:30
  }
});

module.exports = Setting;