import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Container } from 'native-base';

import Operator from '../../helpers/indo-provider';

const { height, width } = Dimensions.get('window');

class PhoneBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      dataDummy: [
        {
          balance: 10000,
          stock: 10
        },
        {
          balance: 15000,
          stock: 10
        },
        {
          balance: 20000,
          stock: 10
        },
        {
          balance: 25000,
          stock: 10
        },
        {
          balance: 50000,
          stock: 10
        },
        {
          balance: 100000,
          stock: 10
        }
      ]
    };
  }

  componentDidMount() {
    this.navigatorListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('transparent');
    });
  }

  componentWillUnmount() {
    this.navigatorListener.remove();
  }

  provider() {
    const data = Operator(this.state.number);
    
    return data;
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#f7f7f7' }}>
        <View style={{ height: StatusBar.currentHeight, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row', height: width/7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', left: 0 }} onPress={() => this.props.navigation.pop()}>
            <Image source={require('../../assets/images/back.png')} style={{ height: 28, width: 14, marginLeft: 15 }} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Nunito-SemiBold' }}> Beli Pulsa </Text>
          </View>
        </View>
        <View style={{ marginTop: 10, backgroundColor: 'white', width: width, padding: 20 }}>
          <Text style={{ fontSize: 15, color: 'rgba(0,0,0,.7)', fontFamily: 'Nunito-SemiBold' }}>
            Masukan Nomor Handphone
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'stretch' }}>
            <Image source={require('../../assets/images/smartphone.png')} style={{ height: width/12, width: width/20, marginTop: 10 }} />
            <TextInput onChangeText={(text) => this.setState({ number: text })} underlineColorAndroid="#3A9C0B" keyboardType="number-pad" style={{ width: '90%', fontSize: 16, fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.7)' }} />
          </View>
          <Text style={{ fontSize: 15, color: 'rgba(0,0,0,.7)', fontFamily: 'Nunito-Bold' }}>
            Operator: {this.provider().check ? this.provider().name : "Tidak tersedia"}
          </Text>
        </View>
        {
          this.provider().check ? 
            <View style={{ backgroundColor: 'white', height: 200, marginTop: 10 }}>

            </View> : <View />
        }
      </Container>
    );
  }
}

export default PhoneBalance;
