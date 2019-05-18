import React from 'react';
import { Image, View, ScrollView, TouchableOpacity, Dimensions, StatusBar, TextInput } from 'react-native';
import Thumbnail from '../component/Thumbnail';
import RowBlock from '../component/RowBlock';
import { Ionicons } from '@expo/vector-icons';
import TextBlock from '../component/TextBlock';
import CardBlock from '../component/CardBlock';
import { Content, Text, Card } from 'native-base';
import ImageBackgroundBlock from '../component/ImageBackgroundBlock';
import Badge from '../component/Badge';
const data = [
  {
    background:'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fnomanazish%2Ffiles%2F2018%2F01%2Ftravel-1749508_1280-1200x766.jpg',
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5yuq6urtgc6IyCpeNNguGV2PjABUw96g9keUiZ719ozDPSFh9g',
    name:'Sam',
    date:'1',
    tripDay:'5',
  },
  {
    background:'https://idbackpacker.com/wp-content/uploads/2018/09/Location-of-Tibumana-Waterfall-Bali-How-to-go-to-Tibumana-Waterfall-Balivia-@juliajach_.jpg',
    profile:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/19/09/instagram-selfie.jpg?w968h681',
    name:'Jennifer',
    date:'4',
    tripDay:'11',
  },
  {
    background:'https://www.alibaba.ir/mag/wp-content/uploads/2017/08/travel_bg-1.jpg',
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcb4In9jjNLhFjNP0AkBDJyX-Kv-awDTQDl3WT3qT6aCSaa9PNw',
    name:'Tara',
    date:'4',
    tripDay:'5',
  },
  ]
export default class HomeScreen extends React.Component {
  handlePress = () => {
    return this.props.navigation.navigate('Trip')
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle='dark-content' />
        <ScrollView style={{ marginTop: 20, }}>
          <RowBlock space='between' width='85%' style={{ marginTop: 30, }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Traveling to?</Text>
            <Ionicons name="md-search" size={30} color="black" />
          </RowBlock>
          <CardBlock width='90%' color='white' radius={8} style={{ padding: 10, marginTop: 20 }}>
            <TextInput placeholder="Enter a name of city you're travelling to" style={{ height: 30, fontWeight: '500' }} />
          </CardBlock>

          {data.map((item,i) => (
            <CardBlock width='90%' key={i} color='white' radius={8} style={{ marginTop: 25 }}>
              <RowBlock space='between' width='95%' style={{ paddingTop: 15, paddingBottom: 15, }} >
                <RowBlock>
                  <Thumbnail uri={item.profile} size={45} />
                  <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                </RowBlock>
                <Text note>{item.date} hours ago</Text>
              </RowBlock>
              <ImageBackgroundBlock height={250} uri={item.background}
                imgStyle={{ borderRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}
              >
                <View style={{ position: 'absolute', width: '100%', height: 250, zIndex: 999 }}>
                  <RowBlock width='90%' space='between' style={{ marginTop: 20 }}>
                    <RowBlock>
                      <Badge color='white'>{item.tripDay}</Badge>
                      <Text style={{ fontWeight: '700', color: 'white', marginLeft: 10 }}>day trip</Text>
                    </RowBlock>
                    <View style={{ backgroundColor: 'white', width: 50, marginBottom: 35 }}>
                      <Thumbnail uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJtONKecyTyfQwBM-Hld17KMuMIDlmEyBb3e3qsqts2ZEpmrU' size={40} style={{ borderWidth: 2, borderColor: 'white', position: 'absolute', marginLeft: -10, }} />
                      <Thumbnail uri='https://www.oberlo.com/wp-content/uploads/2018/08/Instagram-Captions.jpg' size={40} style={{ borderWidth: 2, borderColor: 'white', position: 'absolute', marginLeft: 0, }} />
                      <Thumbnail uri='https://cdn.theatlantic.com/assets/media/img/mt/2018/06/shutterstock_1110768143/lead_720_405.jpg?mod=1533691459' size={40} style={{ borderWidth: 2, borderColor: 'white', position: 'absolute', marginLeft: 10, }} />
                    </View>
                  </RowBlock>
                  <RowBlock space='between' width='90%' style={{ position: 'absolute', bottom: 5 }}>
                    <Text style={{ color: 'white', fontWeight: '700' }}>Bali</Text>
                    <Text style={{ color: '#ffeb3b', fontWeight: '700' }}>ON TRIP</Text>
                  </RowBlock>
                  <TouchableOpacity onPress={this.handlePress} style={{ position: 'absolute', bottom: -17, backgroundColor: '#ffeb3b', borderRadius: 20, width: 75, height: 35, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }}>
                    <Text style={{ fontWeight: '600' }}>Join</Text>
                  </TouchableOpacity>

                </View>
              </ImageBackgroundBlock>
              <TextBlock width='90%' color='gray' style={{ marginTop: 25 }}>
                On a trip to America, looking for someone to join me on this epic journey through American
                      </TextBlock>
              <RowBlock space='between' width='85%' style={{ marginTop: 15, marginBottom: 10, }}>
                <RowBlock space='between' width='20%'>
                  <Ionicons name="md-heart" size={25} color="tomato" />
                  <Ionicons name="md-share" size={25} color="black" />
                </RowBlock>
                <Ionicons name="md-bookmark" size={25} color="gray" />
              </RowBlock>
            </CardBlock>
          ))}
          <View style={{ height: 25, width: '100%' }} />
        </ScrollView>
      </View>
    );
  }
}