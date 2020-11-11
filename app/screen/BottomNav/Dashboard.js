import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity, ImageBackground, Dimensions, Image } from 'react-native';
import { Container } from 'native-base';
import { TouchableRipple } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlider: 0,
      dataCarousel: [
        {
          image: require('../../assets/images/carousel-img-1.png')
        }, 
        {
          image: require('../../assets/images/carousel-img-1.png')
        }
      ]
    };
  }

  componentDidMount() {
    this.navigatorListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('transparent');
    })
  }

  componentWillUnmount() {
    this.navigatorListener.remove();
  }

  _renderItem ({item, index}) {
    return (
      <View style={{ justifyContent:'center', alignItems:'center', borderRadius: 8, margin: '5%' }}>
          <Image style={{ width: width/1.058, height: width/2.43 }} source={item.image} />
      </View>
    )
  }
  
  _handleScroll(event) {
    if(event.nativeEvent.contentOffset.y > 20) {
      StatusBar.setBackgroundColor('#388E3C');
    } else {
      StatusBar.setBackgroundColor('transparent');
    }
  }

  _pagination() {
    return (
      <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
      { this.state.dataCarousel.length > 1 ?
        this.state.dataCarousel.map((value, index) => 
          <View key={index} style={{ marginLeft: 5, backgroundColor: index === this.state.activeSlider ? '#388E3C' : 'white', borderColor: '#388E3C', borderWidth: 1, height: 10, width: index === this.state.activeSlider ? 30 : 10, borderRadius: 40 }}/>) : <View /> }
      </View> 
    )
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#f5f6f7' }}>
        <Animatable.View delay={1000} animation="fadeIn">
          <ScrollView onScroll={this._handleScroll}>
            <ImageBackground source={require('../../assets/images/header.png')} style={{ width: width, height: width/2.093, paddingTop: 15 }}>
              <View style={{ marginTop: width/12, marginLeft: '5%', marginRight: '5%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Nunito-SemiBold', color: 'white' }}>
                  Hai Ridwan!
                </Text>
                <Icon name="bell" size={24} color="white" style={{ position: 'absolute', right: 0 }} />
              </View>
              <View style={{ marginLeft: '5%', marginRight: '5%', marginTop: width/8.5 }}>
                <Text style={{ fontSize: 14, fontFamily: 'Nunito-Light', color: 'white' }}>
                  Saldo Kamu
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 20, color: 'white' }}>
                    Rp 500.000
                  </Text>
                  <TouchableRipple borderless onPress={() => alert("Top Up Pressed")} rippleColor="rgba(0,0,0,0.25)" style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FBC02D', width: '30%', height: 30, borderRadius: 4 }}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 14, color: 'white' }}>
                      TOP UP
                    </Text>
                  </TouchableRipple>
                </View>
              </View>
            </ImageBackground>
            <View style={{ justifyContent: 'center' , alignItems: 'center', margin: 15 }}>
              <View style={{  flexDirection: 'row' }}>
                <View style={{ margin: 15 }}>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('BuyProduct')} style={{ elevation: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center', width: width/5, height: width/5, backgroundColor: 'white' }}>
                    <Image source={require('../../assets/images/belanja.png')} style={{ height: width/6.32, width: width/8 }} />
                  </TouchableOpacity>
                  <View style={{ marginTop: 3 }}>
                    <Text style={{ color: 'grey', textAlign: 'center', fontFamily: 'Nunito-Regular' }}> Beli Produk </Text> 
                  </View>
                </View>
                <View style={{ margin: 15 }}>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('PhoneBalance')} style={{ elevation: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center', width: width/5, height: width/5, backgroundColor: 'white' }}>
                    <Image source={require('../../assets/images/beli-pulsa.png')} style={{ height: width/6.79, width: width/11.61 }} />
                  </TouchableOpacity>
                  <View style={{ marginTop: 3 }}>
                    <Text style={{ color: 'grey', textAlign: 'center', fontFamily: 'Nunito-Regular' }}> Beli Pulsa </Text> 
                  </View>
                </View>
                <View style={{ margin: 15 }}>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('ElectricToken')} style={{ elevation: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center', width: width/5, height: width/5, backgroundColor: 'white' }}>
                    <Image source={require('../../assets/images/listrik.png')} style={{ height: width/8.18, width: width/16.3 }} />
                  </TouchableOpacity>
                  <View style={{ marginTop: 3 }}>
                    <Text style={{ color: 'grey', textAlign: 'center', fontFamily: 'Nunito-Regular' }}> Beli Token </Text> 
                    <Text style={{ color: 'grey', textAlign: 'center', fontFamily: 'Nunito-Regular' }}> Listrik </Text> 
                  </View>
                </View>
              </View>
              <View style={{  flexDirection: 'row' }}>
                <View style={{ margin: 15 }}>
                  <TouchableOpacity activeOpacity={0.7} style={{ elevation: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center', width: width/5, height: width/5, backgroundColor: 'white' }}>
                    <Image source={require('../../assets/images/cc-pay.png')} style={{ height: width/7.65, width: width/6.79 }} />
                  </TouchableOpacity>
                  <View style={{ marginTop: 3 }}>
                    <Text style={{ color: 'grey', textAlign: 'center', fontFamily: 'Nunito-Regular' }}>Simpanan</Text> 
                  </View>
                </View>
                <View style={{ margin: 15 }}>
                  <TouchableOpacity activeOpacity={0.7} style={{ elevation: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center', width: width/5, height: width/5, backgroundColor: 'white' }}>
                    <Image source={require('../../assets/images/pinjam.png')} style={{ height: width/9, width: width/6.923 }} />  
                  </TouchableOpacity>
                  <View style={{ marginTop: 3 }}>
                    <Text style={{ color: 'grey', textAlign: 'center', fontFamily: 'Nunito-Regular' }}> Pinjaman </Text> 
                  </View>
                </View>
                <View style={{ margin: 15 }}>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('ElectricToken')} style={{ elevation: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center', width: width/5, height: width/5, backgroundColor: 'white' }}>
                    <Image source={require('../../assets/images/more.png')} style={{ height: width/30, width: width/7.2 }} />
                  </TouchableOpacity>
                  <View style={{ marginTop: 3 }}>
                    <Text style={{ color: 'grey', textAlign: 'center', fontFamily: 'Nunito-Regular' }}> Lainnya </Text> 
                  </View>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 10, marginTop: '5%', backgroundColor: 'white', width: width }}>
              <Text style={{ marginLeft: '5%', fontSize: 18, color: 'grey', fontFamily: 'Nunito-Bold' }}>
                Produk Pilihan
              </Text>
              <View>
                <Carousel autoplay autoplayInterval={3000} layout="default" itemWidth={width} sliderWidth={width} data={this.state.dataCarousel} renderItem={this._renderItem} onSnapToItem={(index) => this.setState({ activeSlider: index })} />
                { this._pagination() }
              </View>
            </View>
          </ScrollView>
        </Animatable.View>
      </Container>
    );
  }
}

export default Home;