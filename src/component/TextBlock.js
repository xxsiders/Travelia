import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const TextBlock=(props)=>{
  const styles={
    flexWrap: 'wrap', width: props.width, alignSelf: 'center',
  }
   return<View style={[styles,props.style]}>
    <Text style={{color:props.color,fontWeight:props.weight,}}>{props.children}</Text>
  </View>
}
export default TextBlock