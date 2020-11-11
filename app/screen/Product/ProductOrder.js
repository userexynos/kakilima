import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, StatusBar, Dimensions, ScrollView, ToastAndroid, BackHandler } from 'react-native'
import { Container, CheckBox, Button } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

import Rupiah from '../../helpers/rupiah-format';

const { width, height } = Dimensions.get('window')

class ProductOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      tax: 10000,
      priceTotal: 0,
      dataDummy: this.props.navigation.getParam('data', [])
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

  _allPriceTotal = () => {
    const filter = this.state.dataDummy.filter(item => item.selected === true);
    let total = 0;
    if(filter.length === 1) {
      total = filter[0].total;
    } else if(filter.length > 1) {
      total = filter.reduce((a, b) => a.total + b.total);
    }
    this.setState({ priceTotal: total })
  }

  _allPriceTax = () => {
    return this.state.priceTotal > 0 ? this.state.priceTotal + this.state.tax : 0
  }

  _onAllSelect = () => {
    for(let i = 0; i < this.state.dataDummy.length; i++) {
      let dataDummy = [...this.state.dataDummy];
      dataDummy[i].selected = true;
      this._allPriceTotal();

      this.setState({ dataDummy });
    }
  }

  _onAllUnselect = () => {
    for(let i = 0; i < this.state.dataDummy.length; i++) {
      let dataDummy = [...this.state.dataDummy];
      dataDummy[i].selected = false;
      this._allPriceTotal();

      this.setState({ dataDummy });
    }
  }

  _onSelect = (index) => {
    const dataDummy = [...this.state.dataDummy];
    dataDummy[index].selected = !dataDummy[index].selected;
    this._allPriceTotal();
    
    this.setState({ dataDummy });
  }

  _onIncrement = (index) => {
    const dataDummy = [...this.state.dataDummy];
    if(dataDummy[index].quantity < dataDummy[index].stock) {
      dataDummy[index].quantity = ++dataDummy[index].quantity;
      dataDummy[index].total = dataDummy[index].product_price * dataDummy[index].quantity;
      this._allPriceTotal();

      this.setState({ dataDummy });
    }
  }

  _onDecrement = (index) => {
    const dataDummy = [...this.state.dataDummy];
    if(dataDummy[index].quantity > 1) {
      dataDummy[index].quantity = --dataDummy[index].quantity;
      dataDummy[index].total = dataDummy[index].product_price * dataDummy[index].quantity;
      this._allPriceTotal();

      this.setState({ dataDummy });
    }
  }

  _onDelete = (id) => {
    const dataDummy = this.state.dataDummy.filter(item => item.id !== id);
    this.setState({ dataDummy })
    this._allPriceTotal();
    if(dataDummy.length === 0) {
      setTimeout(() => this.props.navigation.navigate('Product'), 1)
      this.props.navigation.navigate('Dashboard');
    }
  }

  renderItem = () => {
    return this.state.dataDummy.length > 0 ?
      this.state.dataDummy.map((item, index) => (
        <TouchableOpacity activeOpacity={1} key={index}  onPress={() => this._onSelect(index)} style={{ backgroundColor: 'white', padding: width/24, flexDirection: 'row', marginBottom: 3 }}>
          <View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <CheckBox color={item.selected ? "#388E3C" : "rgba(0,0,0,0.6)"} checked={item.selected} onPress={() => this._onSelect(index)} />
              <Text style={{ fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.7)', marginLeft: 20 }}>
                { item.product_name }
              </Text>
            </View>
            <Text style={{ fontFamily: 'Nunito-Regular', marginLeft: '26%', color: 'rgba(0,0,0,0.7)' }}>
              { Rupiah(item.total) }
            </Text>
            <View style={{ marginTop: 25, flexDirection: 'row', marginLeft: '26%' }}>
              <Icon name="minuscircleo" size={22} color={item.quantity > 1 ? '#388E3C' : 'rgba(0,0,0,0.7)'} onPress={() => this._onDecrement(index)} />
              <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#388E3C', width: 40, marginLeft: 5, marginRight: 5, borderBottomWidth: 1, borderBottomColor: '#388E3C', textAlign: 'center' }}>
                { item.quantity }
              </Text>
              <Icon name="pluscircleo" size={22} color={item.quantity < item.stock ? '#388E3C' : 'rgba(0,0,0,0.7)'} onPress={() => this._onIncrement(index)} />
            </View>
          </View>
          <View style={{ position: 'absolute', right: 10 }}>
            <Image source={item.image} style={{ height: 90, width: 90 }} />
            <Icon2 name="trash" size={24} color="rgba(0,0,0,0.7)" style={{ alignSelf: 'flex-end', paddingRight: 15 }} onPress={() => this._onDelete(item.id)} />
          </View>
        </TouchableOpacity>
      )) : <View />
  }

  render() {
    const filter = this.state.dataDummy.filter(item => item.selected === true);
    return (
      <Container style={{ backgroundColor: '#f7f7f7' }}>
        <View style={{ height: StatusBar.currentHeight, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row', height: width/7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', left: 0 }} onPress={() => this.props.navigation.pop()}>
            <Image source={require('../../assets/images/back.png')} style={{ height: 28, width: 14, marginLeft: 15 }} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Nunito-SemiBold' }}> Pengiriman </Text>
          </View>
        </View>
        <ScrollView>
          <View style={{ marginTop: 10, paddingTop: 10, paddingLeft: 20, paddingRight: 20, paddingBottom: 20, width: width, backgroundColor: 'white' }}>
            <Text style={{ color: 'rgba(0,0,0,0.5)', color: 'rgba(0,0,0,0.7)', fontSize: 15, fontFamily: 'Nunito-SemiBold' }}>
              Alamat Pengiriman
            </Text>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'rgba(0,0,0,0.5)', color: 'rgba(0,0,0,0.7)', fontSize: 14, fontFamily: 'Nunito-Regular' }}>
                Nama Penerima
              </Text>
              <TextInput 
                style={{ width: '100%', height: 40, backgroundColor: '#DCF3DF', marginTop: 5, fontFamily: 'Nunito-Regular' }} 
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'rgba(0,0,0,0.5)', color: 'rgba(0,0,0,0.7)', fontSize: 14, fontFamily: 'Nunito-Regular' }}>
                No Telepon Penerima
              </Text>
              <TextInput 
                keyboardType={'numeric'} 
                style={{ width: '100%', height: 40, backgroundColor: '#DCF3DF', marginTop: 5, fontFamily: 'Nunito-Regular' }} 
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'rgba(0,0,0,0.5)', color: 'rgba(0,0,0,0.7)', fontSize: 14, fontFamily: 'Nunito-Regular' }}>
                Alamat Lengkap
              </Text>
              <TextInput 
                textAlignVertical={'top'} 
                multiline={true} 
                style={{ width: '100%', height: 120, backgroundColor: '#DCF3DF', marginTop: 5, fontFamily: 'Nunito-Regular' }} 
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'rgba(0,0,0,0.5)', color: 'rgba(0,0,0,0.7)', fontSize: 14, fontFamily: 'Nunito-Regular' }}>
                Kode pos
              </Text>
              <TextInput 
                keyboardType={'numeric'} 
                style={{ width: '40%', height: 40, backgroundColor: '#DCF3DF', marginTop: 5, fontFamily: 'Nunito-Regular' }} 
              />
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox color={'#3A9C0B'} checked={true} onPress={() => ToastAndroid.show('CheckBox Is Pressed', ToastAndroid.SHORT)}/>
              <Text style={{ marginLeft: 20, color: 'rgba(0,0,0,0.7)', fontFamily: 'Nunito-Regular' }}> 
                Simpan Alamat 
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10, backgroundColor: 'white'}}>
            <View style={{ paddingLeft: 20, paddingRight: 20, height: 50, justifyContent: 'center' }}>
              <Text style={{ color: 'rgba(0,0,0,0.7)', fontSize: 15, fontFamily: 'Nunito-SemiBold' }}> 
                Daftar belanja 
              </Text>
            </View>
            <Animatable.View animation="fadeIn" delay={1000} style={{ borderTopColor: '#f7f7f7', borderTopWidth: 2 }}>
              <View style={{ padding: 15, marginTop: 10, marginBottom: 10, backgroundColor: '#ffffff', flexDirection: 'row' }}>
                <CheckBox 
                  onPress={() => filter.length === this.state.dataDummy.length ? this._onAllUnselect() : this._onAllSelect()} 
                  checked={ this.state.dataDummy.length !== 0 ? filter.length === this.state.dataDummy.length ? true : false : false } 
                  color={ this.state.dataDummy.length > 0 ? filter.length === this.state.dataDummy.length ? "#388E3C" : "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.6)" } 
                />
                <Text style={{ fontFamily: 'Nunito-Bold', color: 'rgba(0,0,0,0.7)', marginLeft: 20, fontFamily: 'Nunito-SemiBold' }}>
                  Pilih Semua ({ filter.length }/{ this.state.dataDummy.length })
                </Text>
              </View>
            </Animatable.View>
            { this.renderItem() }
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingTop: 10, paddingBottom: 10, marginBottom: 10, backgroundColor: 'white' }}>
            <Text style={{ color: 'rgba(0,0,0,0.7)', fontFamily: 'Nunito-SemiBold', fontSize: 15 }}>
              Rincian Harga
            </Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.7)' }}>
                Total Harga Produk
              </Text>
              <Text style={{ position: 'absolute', right: 20, fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.7)' }}>
                { Rupiah(this.state.priceTotal) }
              </Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.7)' }}>
                Ongkos Kirim
              </Text>
              <Text style={{ position: 'absolute', right: 20, fontFamily: 'Nunito-Regular', color: 'rgba(0,0,0,0.7)' }}>
                { Rupiah(this.state.tax) }
              </Text>
            </View>
          </View>
          <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 15, color: 'rgba(0,0,0,0.7)', fontFamily: 'Nunito-SemiBold' }}>
                Total Pembayaran
              </Text>
              <Text style={{ position: 'absolute', right: 0, color: 'rgba(0,0,0,0.7)', fontFamily: 'Nunito-SemiBold' }}>
                { Rupiah(this._allPriceTax()) }
              </Text>
            </View>
            <Button androidRippleColor="rgba(255,255,255,0.4)" onPress={() => this.props.navigation.navigate('ProductPayment')} style={{ borderRadius: 4, backgroundColor: '#3A9C0B', height: 40, width: '100%' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                <Text style={{ color: 'white', color: 'white', fontFamily: 'Nunito-Bold' }}>
                  Bayar
                </Text>
              </View>
            </Button>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

export default ProductOrder;