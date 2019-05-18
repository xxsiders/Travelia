import React from 'react';
import { ActivityIndicator, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';
import TripScreen from '../screen/TripScreen';
import SplashScreen from '../screen/SplashScreen';
import SignUpScreen from '../screen/SignUpScreen';
class AuthNavigation extends React.Component {

  componentDidMount() {
    const token = true
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={1} color='#ffeb3b' />
      </View>
    );
  }
}

const AppStack = createStackNavigator({ Home: HomeScreen, Trip: TripScreen }, { headerMode: 'none' });

const AuthStack = createStackNavigator({ Splash: SplashScreen, Login: LoginScreen,SignUp:SignUpScreen }, { headerMode: 'none' });

export default createSwitchNavigator(
  {
    AuthLoading: AuthNavigation,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
