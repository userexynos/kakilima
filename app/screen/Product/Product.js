import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { Container, Button, Tabs, Tab, Card, CardItem } from 'native-base';

const { height, width } = Dimensions.get('window');

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDummy: [
        {
          id: 1,
          image: require('../../assets/images/kecap-abc.png'),
          title: 'Kecap ABC Manis',
          price: 4000
        },
        {
          id: 2,
          image: require('../../assets/images/kecap-abc.png'),
          title: 'Kecap ABC Manis',
          price: 4000
        },
        {
          id: 2,
          image: require('../../assets/images/kecap-abc.png'),
          title: 'Kecap ABC Manis',
          price: 4000
        },
        {
          id: 2,
          image: require('../../assets/images/kecap-abc.png'),
          title: 'Kecap ABC Manis',
          price: 4000
        },
        {
          id: 2,
          image: require('../../assets/images/kecap-abc.png'),
          title: 'Kecap ABC Manis',
          price: 4000
        },
        {
          id: 2,
          image: require('../../assets/images/kecap-abc.png'),
          title: 'Kecap ABC Manis',
          price: 4000
        }
      ]
    }
  }

  componentDidMount() {
    this.navigatorListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('transparent');
    })
  }

  componentWillUnmount() {
    this.navigatorListener.remove();
  }

  renderItem = () => {
    return this.state.dataDummy.length > 0 ? 
      this.state.dataDummy.map((item, index) => (
        <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('ProductDetail')}>
          <Card borderRadius={5} style={{ width: width/2.4, marginLeft: width/36 }}>
            <CardItem style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 120, height: 86 }} source={item.image} />
            </CardItem>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Nunito-Regular' }}>{item.title}</Text>
              <Text style={{ fontSize: 16, fontFamily: 'Nunito-SemiBold' }}>Rp {item.price}</Text>
              <Button androidRippleColor="rgba(255,255,255,0.4)" onPress={() => ToastAndroid.show("Telah tersimpan dikeranjang", 2000)} style={{ width: '100%', height: 30, backgroundColor: '#3A9C0B', borderRadius: 4, marginTop:5 }}>
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: 'white', fontFamily: 'Nunito-SemiBold' }}>Beli</Text>
                </View>
              </Button>
            </View>
          </Card>
        </TouchableOpacity> 
      )) : 
      <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tidak Ada Data</Text>
      </View>
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#f5f5f5' }}>
        <View style={{ height: StatusBar.currentHeight }} />
        <View style={{ height: width/7, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', left: 0 }} onPress={() => this.props.navigation.goBack(null)}>
              <Image source={require('../../assets/images/back.png')} style={{ height: 28, width: 14, marginLeft: 15 }} />
            </TouchableOpacity>
            <TextInput placeholder={'Search'} style={{ paddingLeft: 10, paddingRight: 10, backgroundColor: '#ccc', width: width-110, height: width/9, borderRadius: 30, fontFamily: 'Nunito-Regular' }}/>
            <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', right: 20 }} onPress={() => this.props.navigation.navigate('Basket')}>
              <Image source={require('../../assets/images/shopping-basket.png')} style={{ height: 22, width: 24, marginLeft: 15 }} />
            </TouchableOpacity>
          </View>
        </View>
        <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, borderBottomColor: '#388E3C' }}>
          <Tab heading="Produk" textStyle={{ color: 'grey', fontFamily: 'Nunito-Regular' }} activeTextStyle={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'Nunito-Regular' }} tabStyle={{ backgroundColor: 'white' }} activeTabStyle={{ backgroundColor: 'white' }}>
            <ScrollView>
              <View style={{ margin: 15, flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.renderItem()}
              </View>
            </ScrollView>
          </Tab>
          <Tab heading="Promosi" textStyle={{ color: 'grey', fontFamily: 'Nunito-Regular' }} activeTextStyle={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'Nunito-Regular' }} tabStyle={{ backgroundColor: 'white' }} activeTabStyle={{ backgroundColor: 'white' }}>
              <Text>Screen 2</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}