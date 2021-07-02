/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  AppRegistry,
  Navigator
} from 'react-native';

import Home from './Home.js';

export default class LoginScene extends Component {

   constructor(props){
      super(props);
   }

  username = '';
  password = '';

  onUsernameChanged = (newUsername) => {
    this.username = newUsername;
  };

  onPasswordChanged = (newPassword) => {
    this.password = newPassword;
  };

  login = () => {
    if (this.username == '13800000000' && this.password == '123456') {
//      this.props.navigator.replace({
//        scene: Home,
//      });
//      this._navigate.bind(this, 'Home')
      this.props.navigation.push('Home')

      ToastAndroid.show('登录成功',ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('登录失败',ToastAndroid.SHORT);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
        </View>
        <View style={styles.inputBox}>
          <Image style={styles.img} source={require('../assets/username.png')}/>
          <TextInput
            onChangeText={this.onUsernameChanged}
            style={styles.input}
            placeholderTextColor={'#fff'}//提示文本的颜色
            placeholder={'手机号'}//提示文本内容
            underlineColorAndroid={'transparent'}/>{/*设置下划线颜色为透明，就相当于不见了*/}
        </View>
        <View style={styles.inputBox}>
          <Image source={require('../assets/password.png')}
            style={styles.img}/>
          <TextInput onChangeText={this.onPasswordChanged}
            placeholderTextColor={'#fff'}
            placeholder={'密码'}
            underlineColorAndroid={'transparent'}
            secureTextEntry={true}//密码输入框
            style={styles.input}/>
        </View>
        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text style={styles.btText}>登录</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btText}>注册</Text>
        </TouchableOpacity>
      </View>

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
  logo: {
      width: 150,
      height: 210,
      marginBottom: 50,
    },
  img: {
    width: 30,
    height: 30,
  },
  input: {
    width: 200,
    height: 40,
    color: '#fff',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#66f',
    marginBottom: 8,
  },
  button: {
    height: 50,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#66f',
    marginBottom: 8,
  },
  btText: {
    color: '#fff',
  }
});
