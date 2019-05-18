import React from 'react';
import { TextInput, View, TouchableOpacity, Image } from 'react-native';
import CardBlock from '../component/CardBlock';
import { Text } from 'native-base';
import RowBlock from '../component/RowBlock';

export default class LoginScreen extends React.Component {
  handleLogin = () => (
    this.props.navigation.navigate('Home')
  )
  handleBack = () => (
    this.props.navigation.goBack()
  )
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ position: 'absolute', top: '15%', left: '15%' }}>
          <Text style={{ color: 'gray', fontSize: 20, fontWeight: '600', }}>Get Started</Text>
          <Text style={{ color: 'black', fontSize: 50, fontWeight: '800', }}>Login</Text>
        </View>
        <TextInput style={{ fontSize: 18, width: '70%', height: 40, paddingLeft: 5, paddingRight: 5, fontWeight: '500' }} placeholder='Email' placeholderTextColor='gray' />
        <TextInput style={{ fontSize: 18, width: '70%', height: 40, paddingLeft: 5, paddingRight: 5, fontWeight: '500', marginTop: 25 }} placeholder='Password' placeholderTextColor='gray' secureTextEntry />
        <View style={{ position: 'absolute', bottom: '10%', width: '100%' }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#189CF5', borderRadius: 10, width: '70%', height: 45, alignSelf: 'center' }}
            onPress={this.handleLogin}
          >
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginTop: 15 }}
            onPress={this.handleBack}
          >
            <Text style={{ color: 'gray', fontWeight: '500', fontSize: 20 }}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
