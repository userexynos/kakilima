import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StatusBar, Dimensions, ScrollView, ToastAndroid } from 'react-native'
import { Container, Footer, Button } from 'native-base'

const { width, height } = Dimensions.get('window')

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDummy: {
        id: 1,
        product_name: "Kecap ABC",
        product_price: 4000,
        quantity: 1,
        stock: 10,
        total: 4000,
        image: require('../../assets/images/kecap-abc-kecil.png'),
        selected: true
      }
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

  _addToBasket() {
    ToastAndroid.show('AddToBasket', 3000);
  }

  render() {
    return (
      <Container>
        <View style={{ height: StatusBar.currentHeight }} />
        <View style={{ flexDirection: 'row', height: width/7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', left: 0 }} onPress={() => this.props.navigation.goBack(null)}>
            <Image source={require('../../assets/images/back.png')} style={{ height: 28, width: 14, marginLeft: 15 }} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Nunito-SemiBold' }}> Detail Produk </Text>
          </View>
        </View>
        <Image style={{ width: width, height: width/1.384, paddingBottom: 20 }} source={require('../../assets/images/kecap-abc.png')} />
        <View>
          <View style={{ borderTopColor: '#f7f7f7', borderTopWidth: 4 }}>
            <Text style={{ fontSize: 18 , paddingLeft: 20, paddingRight: 20, paddingTop: 15, fontFamily: 'Nunito-Regular' }}>Kecap ABC Manis 135 ML</Text>
            <Text style={{ fontSize: 18, paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 15, fontFamily: 'Nunito-SemiBold' }}>Rp 4.000</Text>
          </View>
          <View style={{ borderTopColor: '#f7f7f7', borderTopWidth: 4, height: width/2.4 }}>
            <Text style={{ fontSize: 16,  paddingLeft: 20, paddingRight: 20, paddingTop: 10, fontFamily: 'Nunito-SemiBold' }}>Deskripsi</Text>
            <ScrollView>
              <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 15, fontFamily: 'Nunito-SemiBold' }}>Kecap Manis ABC dibuat dengan kedelai, gandum dan gula merah pilihan sehingga menghasilkan kecap tetap manis dengan citra rasa mantap, hitam dan kental.</Text>
            </ScrollView>
          </View>
        </View>
        <Footer style={{ position: 'absolute', bottom: 0, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this._addToBasket()} activeOpacity={0.8} style={{ position: 'absolute', left: width/12, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/images/tambah-keranjang.png')} style={{ height: 25, width: 34 }} />
          </TouchableOpacity>
          <Button androidRippleColor="rgba(255,255,255,0.4)" onPress={() => this.props.navigation.navigate('ProductOrder')} style={{ width: '100%', height: 35, backgroundColor: '#3A9C0B', borderRadius: 4, width: width/1.5, position: 'absolute', right: 15 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
              <Text style={{ color: 'white', fontFamily: 'Nunito-SemiBold' }}>Beli Sekarang</Text>
            </View>
          </Button>
        </Footer>
      </Container>
    )
  }
}
