import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'native-base';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleLogin = () => (
    this.props.navigation.navigate('Login')
  )
  handleSignUp = () => (
    this.props.navigation.navigate('SignUp')
  )

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/logo.png')} resizeMode='contain' style={{ width: 150, height: 150 }} />
        <Text style={{ marginTop: 25, fontSize: 50, fontWeight: '700' }}>Travelia</Text>
        <View style={{ position: 'absolute', bottom: '10%', width: '100%' }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#189CF5', borderRadius: 10, width: '70%', height: 45, alignSelf: 'center' }}
            onPress={this.handleLogin}
          >
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginTop: 15 }}
            onPress={this.handleSignUp}
          >
            <Text style={{ color: 'gray', fontWeight: '500', fontSize: 20 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
