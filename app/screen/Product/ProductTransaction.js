import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions, TouchableOpacity, Image, BackHandler } from 'react-native';
import { Container } from 'native-base';

const { height, width } = Dimensions.get('window');

class ProductTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.navigatorListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('transparent');
    });
    this.backhandler = BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.navigate('Transaction');
    });
  }

  componentWillUnmount() {
    this.navigatorListener.remove();
    this.backhandler.remove();
  }
  
  render() {
    return (
      <Container>
        <View style={{ height: StatusBar.currentHeight, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row', height: width/7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', left: 0 }} onPress={() => this.props.navigation.navigate('Transaction')}>
            <Image source={require('../../assets/images/back.png')} style={{ height: 28, width: 14, marginLeft: 15 }} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Nunito-SemiBold' }}> Pesanan Diterima </Text>
          </View>
        </View>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 20, color: 'rgba(0,0,0,0.7)' }}>
            Pembelian Produk Diterima
          </Text>
          <Image source={require('../../assets/images/success.png')} style={{ margin: 20, height: 100, width: 100, opacity: .8 }} />      
          <Text style={{ fontSize: 15, fontFamily: 'Nunito-SemiBold', color: 'rgba(0,0,0,0.7)', textAlign: 'center' }}>
            Untuk Melakukan Pembayaran.{"\n"}Lakukan Pembayaran Sejumlah
          </Text>
          <Text style={{ fontSize: 30, fontFamily: 'Nunito-Bold', color: 'rgba(0,0,0,0.7)', marginTop: 10, marginBottom: 5 }}>
            Rp 37.400
          </Text>
          <Text style={{ fontSize: 10, fontFamily: 'Nunito-SemiBold', color: 'rgba(0,0,0,0.7)' }}>
            ORDER ID 1234-5678-9101
          </Text>
          <Text style={{ fontSize: 14, fontFamily: 'Nunito-SemiBold', color: 'rgba(0,0,0,0.7)', marginTop: 20, marginBottom: 4 }}>
            Sebelum tanggal: 
          </Text>
          <View style={{ backgroundColor: '#6081FF', width: '100%', padding: 15, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text  style={{ fontSize: 16, fontFamily: 'Nunito-Bold', color: 'white' }}>
              23 Agustus 2019 - Pukul 10:00 WIB
            </Text>
          </View>
          <Text  style={{ marginTop: width/6.5, textAlign: 'center', fontSize: 15, fontFamily: 'Nunito-SemiBold', color: 'rgba(0,0,0,0.7)' }}>
            Silahkan lakukan pembayaran ke Virtual Account{"\n"}di bawah ini.
          </Text>
          <View style={{ alignSelf: 'flex-start', flexDirection: 'row', width: '100%', marginTop: 20 }}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 16, fontFamily: 'Nunito-SemiBold', color: 'rgba(0,0,0,0.7)' }}>
                0000 0000 02020
              </Text>
              <Text style={{ fontSize: 14, fontFamily: 'Nunito-SemiBold', color: 'rgba(0,0,0,0.5)' }}>
                Virtual Account BRI
              </Text>
            </View>
            <View style={{ width: '50%' }}>
              <Image source={require('../../assets/images/briva.png')} style={{ width: 100, height: 45, marginLeft: 10, alignSelf: 'flex-end' }} />
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default ProductTransaction;
