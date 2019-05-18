import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './src/navigation/AuthNavigation';
import TripScreen from './src/screen/TripScreen';

export default class App extends React.Component {
  render() {
    return (
      <AuthNavigation />
    );
  }
}
