import React from 'react';
import { Dimensions, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'expo-core';
import { Text, } from 'native-base';
import ImageBackgroundBlock from '../component/ImageBackgroundBlock';
import Badge from '../component/Badge';
import RowBlock from '../component/RowBlock';
import Thumbnail from '../component/Thumbnail';
import TextBlock from '../component/TextBlock';
const statusBarHeight = StatusBar.currentHeight
const DeviceHeight = Dimensions.get('window').height
export default class TripScreen extends React.Component {
  handlePress=()=>{
    return this.props.navigation.goBack()
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <ImageBackgroundBlock uri='https://idbackpacker.com/wp-content/uploads/2018/09/Location-of-Tibumana-Waterfall-Bali-How-to-go-to-Tibumana-Waterfall-Balivia-@juliajach_.jpg' style={{ width: '100%', height: (DeviceHeight * 0.65), position: 'absolute', zIndex: 0 }}>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: Platform.OS == 'ios' ? 30 : statusBarHeight + 10, height: '100%', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity style={{padding:5}} onPress={this.handlePress}>
                <Ionicons name="ios-arrow-back" size={35} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center' }}>
                <Badge color='white'>11</Badge>
                <Text style={{ fontWeight: '700', color: 'white', marginLeft: 10 }}>day trip</Text>
              </TouchableOpacity>
            </View>
            <RowBlock space='between' width='90%' style={{ position: 'absolute', bottom: 70 }}>
              <Text style={{ color: 'white', fontWeight: '700' }}>Bali</Text>
              <Text style={{ color: '#ffeb3b', fontWeight: '700' }}>IN ROUTE</Text>
            </RowBlock>
          </View>
        </ImageBackgroundBlock>
        <View style={{ backgroundColor: 'white', width: '100%', height: (DeviceHeight * 0.4), position: 'absolute', zIndex: 99, borderRadius: 25, bottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}>
          <TouchableOpacity style={{ position: 'absolute', top: -17, backgroundColor: '#ffeb3b', borderRadius: 20, width: 75, height: 35, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }}>
            <Text style={{ fontWeight: '600' }}>Join</Text>
          </TouchableOpacity>
          <RowBlock space='between' width='85%' style={{ marginTop: 25, marginBottom: 15, }} >
            <RowBlock>
              <Thumbnail uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJtONKecyTyfQwBM-Hld17KMuMIDlmEyBb3e3qsqts2ZEpmrU' size={40} />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>Sam</Text>
            </RowBlock>
            <Text note>15th Apr</Text>
          </RowBlock>
          <TextBlock width='85%' color='gray' style={{ marginBottom: 10, }}>
            Going on a trip to America, looking for someone to join me on this epic journey through American lifestyle.
          </TextBlock>
          <RowBlock width='85%' space='start'>
            <Text style={{ color: 'gray', fontSize: 16 }} note>Next trip</Text>
            <Ionicons name="md-car" style={{ margin: 10, marginRight: 0 }} size={25} color="black" />
            <Text style={{ color: 'black', margin: 10 }} note>Bali</Text>
            <Ionicons name="md-arrow-dropright" size={20} color="gray" />
            <Ionicons name="md-arrow-dropright" style={{ margin: 4, }} size={20} color="gray" />
            <Ionicons name="md-arrow-dropright" size={20} color="gray" />
            <Text style={{ color: 'black', margin: 10 }} note>Cambodia</Text>
          </RowBlock>
          <RowBlock space='between' width='85%' style={{ marginTop: 10, }}>
            <RowBlock space='between' width='40%'>
              <Ionicons name="md-heart" size={25} color="tomato" />
              <Ionicons name="md-share" size={25} color="black" />
              <Badge color='#ffeb3b' size={10} style={{ width: 50 }}>Shared</Badge>
            </RowBlock>
            <Ionicons name="md-bookmark" size={25} color="gray" />
          </RowBlock>
        </View>
      </View>
    );
  }
}