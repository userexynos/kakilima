import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, Dimensions, Image } from 'react-native';
import { Container } from 'native-base';

const { height, width } = Dimensions.get('window');

class Transaction extends Component {
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
    })
  }

  componentWillUnmount() {
    this.navigatorListener.remove();
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white', marginTop: StatusBar.currentHeight }}>
        <View style={{ height: width/7, backgroundColor: 'white' }}>
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Nunito-Bold' }}> Transaksi </Text>
          </View>
        </View>
        <ScrollView style={{ backgroundColor: '#f5f6f7' }}>
          <View style={{ marginTop: 20, marginBottom: 10, backgroundColor: 'white', padding: '5%' }}>
            <Text style={{ fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.9)' }}>
              21 September 2019
            </Text>
            <Text style={{ fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.9)' }}>
              INV/2019/07/123456
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Image source={require('../../assets/images/sambal-terasi-kecil.png')} style={{ height: 140, width: 140 }} />
              <View style={{ margin: 5 }}>
                <Text style={{ fontFamily: 'Nunito-Bold', color: 'rgba(0,0,0,0.9)' }}>Sambal Terasi</Text>
                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'rgba(0,0,0,0.8)', marginTop: 10, marginBottom: 10 }}>(+1 Produk Lainnya)</Text>
                <Text style={{ fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.7)', fontSize: 12 }}>Total Pemabayaran</Text>
                <Text style={{ fontFamily: 'Nunito-Bold', color: 'rgba(0,0,0,0.6)' }}>RP 34.700</Text>
              </View>
            </View>
            <View style={{ width: width, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan', position: 'absolute', bottom: 0 }}>
              <Text style={{ fontFamily: 'Nunito-Bold', color: 'rgba(0,0,0,0.9)' }}>Pesanan Diproses</Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Transaction;
