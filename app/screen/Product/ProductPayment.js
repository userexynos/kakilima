import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Container, Radio, Button } from 'native-base';

const { height, width } = Dimensions.get('window');

class ProductPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentType: [
        {
          type: "BRI Virtual Account",
          image: require('../../assets/images/briva.png')
        },
        {
          type: "Link AJA",
          image: require('../../assets/images/link.png')
        },
        {
          type: "Dompetku",
          image: require('../../assets/images/wallet.png')
        },
      ],
      selected: 0
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

  render() {
    return (
      <Container style={{ backgroundColor: '#f7f7f7' }}>
        <View style={{ height: StatusBar.currentHeight, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row', height: width/7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', left: 0 }} onPress={() => this.props.navigation.pop()}>
            <Image source={require('../../assets/images/back.png')} style={{ height: 28, width: 14, marginLeft: 15 }} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Nunito-SemiBold' }}> Pilih Jenis Pembayaran </Text>
          </View>
        </View>
        <View style={{ marginTop: 10, padding: 20, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.7)', fontFamily: 'Nunito-SemiBold' }}>
              Total Tagihan
            </Text>
            <Text style={{ fontSize: 18, color: 'rgba(0,0,0,0.7)', fontFamily: 'Nunito-Bold' }}>
              Rp 37.400
            </Text>
        </View>
        <View style={{ marginTop: 10, padding: 20, backgroundColor: 'white' }}>
          <Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.7)', fontFamily: 'Nunito-SemiBold' }}>
            Pilih Metode Pembayaran
          </Text>
          {
            this.state.paymentType.map((item, index) => (
              <TouchableOpacity activeOpacity={1} key={index} style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ selected: index})}>
                <Radio selectedColor={'#3A9C0B'} selected={ index === this.state.selected } onPress={() => this.setState({ selected: index })} />
                <Image source={item.image} style={{ width: 111, height: 50, marginLeft: 10 }} />
                <Text style={{ fontSize: 15, fontFamily: 'Nunito-Bold', color: 'rgba(0,0,0,0.7)', marginLeft: 10 }}>
                  { item.type }
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={{ backgroundColor: 'white', width: width, position: 'absolute', bottom: 0, padding: 20 }}>
          <Button androidRippleColor="rgba(255,255,255,0.4)" onPress={() => this.props.navigation.navigate('ProductTransaction')} style={{ borderRadius: 4, backgroundColor: '#3A9C0B', height: 40, width: '100%' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', color: 'white', fontFamily: 'Nunito-Bold' }}>
                Bayar
              </Text>
            </View>
          </Button>
        </View>
      </Container>
    );
  }
}

export default ProductPayment;



// import React, { Component } from 'react'
// import { Text, View, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native'
// import {
//   Container, Content, Footer, Radio
// } from 'native-base'

// const { height, width } = Dimensions.get('window');

// export class ProductPayment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         selected: 'BRIVA'
//     };
//   }

//   render() {
//     return (
//         <Container style={{ backgroundColor: '#f5f5f5' }}>
//             <Content>
//                 <View style={{ height: StatusBar.currentHeight }} />
//                 <View style={{ flexDirection: 'row', height: width/7, backgroundColor: 'white', elevation: 4, alignItems: 'center', justifyContent: 'center' }}>
//                     <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', left: 0 }} onPress={() => this.props.navigation.goBack()}>
//                         <Image source={require('../../assets/images/back.png')} style={{ height: 28, width: 14, marginLeft: 15 }} />
//                     </TouchableOpacity>
//                     <View>
//                         <Text style={{ fontSize: 17, color: 'black' }}> Keranjang Belanja </Text>
//                     </View>
//                 </View>
//                 <View style={{ marginTop: 10 }}>
//                     <View style={{ paddingLeft: 15, marginTop: 5, width: width, backgroundColor: 'white', elevation: 4, marginBottom: 15, paddingBottom: 20, paddingTop: 15, flexDirection: 'row' }}>
//                         <View>
//                             <Text style={{ marginBottom: 5, fontSize: 14,fontWeight: 'bold', color: 'rgba(0,0,0,0.7)' }}>Total Tagihan</Text>
//                             <Text style={{ fontSize: 18, fontWeight: 'bold' , color: 'rgba(0,0,0,0.7)' }}>Rp 37.400</Text>
//                         </View> 
//                         <View style={{ position: 'absolute', right: 15, top: '50%', bottom: '50%' }}>
//                             <Text style={{ color: 'grey' }}> Detail </Text>
//                         </View>
//                     </View>
//                     <View style={{ backgroundColor: 'white', padding: 10, elevation: 4, paddingBottom: 20, marginBottom: 15 }}>
//                         <Text style={{ paddingLeft: 10, color: 'black', fontSize: 16 }}>Pilih Metode Pembayaran</Text>
//                         <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({ selected: 'BRIVA' })} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15, paddingLeft: 10  }}>
//                             <Radio selectedColor={'#3A9C0B'} disabled={true} selected={'BRIVA' === this.state.selected} />
//                             <Image source={require('../../assets/images/briva.png')} style={{ width: 100, height: 45, marginLeft: 10 }} />
//                             <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'rgba(0,0,0,0.7)', marginLeft: 10 }}> BRI Virtual Account </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({ selected: 'LinkAja' })} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15, paddingLeft: 10 }}>
//                             <Radio selectedColor={'#3A9C0B'} disabled={true} selected={'LinkAja' === this.state.selected} />
//                             <Image source={require('../../assets/images/link.png')} style={{ width: 100, height: 45, marginLeft: 10 }} />
//                             <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'rgba(0,0,0,0.7)', marginLeft: 10 }}> Link AJA </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({ selected: 'Dompetku' })} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15, paddingLeft: 10 }}>
//                             <Radio selectedColor={'#3A9C0B'} disabled={true} selected={'Dompetku' === this.state.selected} />
//                             <Image source={require('../../assets/images/wallet.png')} style={{ width: 100, height: 45, marginLeft: 10 }} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Content>
//             <Footer style={{ backgroundColor: 'white', height: 60, width: width, alignItems: 'center', justifyContent: 'center' }}>
//                 <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#3A9C0B', width: width-30, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }} onPress={() => this.props.navigation.navigate('ShoppingReportTransaction')}>
//                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}> Bayar </Text> 
//                 </TouchableOpacity>
//             </Footer>
//         </Container>
//     );
//   }
// }

// export default ProductPayment
