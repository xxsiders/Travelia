import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Platform } from 'expo-core';

const CardBlock = (props) => {
  const styles = {
    width: props.width,
    borderRadius: props.radius,
    backgroundColor: props.color,
    alignContent: 'center',
    ...Platform.OS == 'ios' ? ({
      shadowColor: 'silver',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    }) : ({
      elevation: 0.9,
    }),
    alignSelf: 'center',
    justifyContent: 'center'
  }
  return <View style={[styles, props.style]}>
    {props.children}
  </View>
}
export default CardBlock
