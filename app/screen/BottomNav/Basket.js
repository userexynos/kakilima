import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, Dimensions, Image } from 'react-native';
import { Container, CheckBox } from 'native-base';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

import Rupiah from '../../helpers/rupiah-format';

const { width, height } = Dimensions.get('window');

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      dataDummy: [
        {
          id: 1,
          product_name: "Sambal Terasi",
          product_price: 13700,
          quantity: 1,
          stock: 10,
          total: 13700,
          image: require('../../assets/images/sambal-terasi-kecil.png'),
          selected: false
        },
        {
          id: 2,
          product_name: "Kecap ABC",
          product_price: 4000,
          quantity: 1,
          stock: 10,
          total: 4000,
          image: require('../../assets/images/sambal-terasi-kecil.png'),
          selected: false
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

  _allPriceTotal = (filter) => {
    let total = 0;
    if(filter.length === 1) {
      total = filter[0].total;
    } else if(filter.length > 1) {
      total = filter.reduce((a, b) => a.total + b.total);
    }

    return Rupiah(total);
  }

  _onAllSelect = () => {
    for(let i = 0; i < this.state.dataDummy.length; i++) {
      let dataDummy = [...this.state.dataDummy];
      dataDummy[i].selected = true;

      this.setState({ dataDummy });
    }
  }

  _onAllUnselect = () => {
    for(let i = 0; i < this.state.dataDummy.length; i++) {
      let dataDummy = [...this.state.dataDummy];
      dataDummy[i].selected = false;

      this.setState({ dataDummy });
    }
  }

  _onSelect = (index) => {
    const dataDummy = [...this.state.dataDummy];
    dataDummy[index].selected = !dataDummy[index].selected;
    
    this.setState({ dataDummy });
  }

  _onIncrement = (index) => {
    const dataDummy = [...this.state.dataDummy];
    if(dataDummy[index].quantity < dataDummy[index].stock) {
      dataDummy[index].quantity = ++dataDummy[index].quantity;
      dataDummy[index].total = dataDummy[index].product_price * dataDummy[index].quantity;

      this.setState({ dataDummy });
    }
  }

  _onDecrement = (index) => {
    const dataDummy = [...this.state.dataDummy];
    if(dataDummy[index].quantity > 1) {
      dataDummy[index].quantity = --dataDummy[index].quantity;
      dataDummy[index].total = dataDummy[index].product_price * dataDummy[index].quantity;

      this.setState({ dataDummy });
    }
  }

  _onDelete = (id) => {
    const dataDummy = this.state.dataDummy.filter(item => item.id !== id);
    this.setState({ dataDummy })
  }

  renderItem = () => {
    return this.state.dataDummy.length !== 0 ?
      this.state.dataDummy.map((item, index) => (
        <View key={index} style={{ backgroundColor: 'white', padding: width/24, flexDirection: 'row', marginBottom: 3 }}>
          <View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <CheckBox color={item.selected ? "#388E3C" : "rgba(0,0,0,0.6)"} checked={item.selected} onPress={() => this._onSelect(index)} />
              <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'rgba(0,0,0,0.7)', marginLeft: 20 }}>
                { item.product_name }
              </Text>
            </View>
            <Text style={{ fontFamily: 'Nunito-Bold', marginLeft: '26%', color: 'rgba(0,0,0,0.7)' }}>
              { Rupiah(item.total) }
            </Text>
            <View style={{ marginTop: 25, flexDirection: 'row', marginLeft: '26%' }}>
              <Icon name="minuscircleo" size={22} color={item.quantity > 1 ? '#388E3C' : 'grey'} onPress={() => this._onDecrement(index)} />
              <Text style={{ fontFamily: 'Nunito-Bold', color: '#388E3C', width: 40, marginLeft: 5, marginRight: 5, borderBottomWidth: 1, borderBottomColor: '#388E3C', textAlign: 'center' }}>
                { item.quantity }
              </Text>
              <Icon name="pluscircleo" size={22} color={item.quantity < item.stock ? '#388E3C' : 'grey'} onPress={() => this._onIncrement(index)} />
            </View>
          </View>
          <View style={{ position: 'absolute', right: 10 }}>
            <Image source={item.image} style={{ height: 90, width: 90 }} />
            <Icon2 name="trash" size={24} color="grey" style={{ alignSelf: 'flex-end', paddingRight: 15 }} onPress={() => this._onDelete(item.id)} />
          </View>
        </View>
      )) : <View />
  }

  render() {
    const filter = this.state.dataDummy.filter(item => item.selected === true);
    return (
      <Container style={{ backgroundColor: 'white', marginTop: StatusBar.currentHeight }}>
        <Animatable.View animation="slideInDown" style={{ height: width/7, backgroundColor: 'white' }}>
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Nunito-Bold' }}> Keranjang </Text>
          </View>
        </Animatable.View>
        <ScrollView style={{ backgroundColor: '#f5f6f7' }}>
          <Animatable.View animation="fadeIn" delay={1000}>
            <View style={{ padding: 15, marginTop: 10, marginBottom: 10, backgroundColor: '#ffffff', flexDirection: 'row' }}>
              <CheckBox 
                onPress={() => filter.length === this.state.dataDummy.length ? this._onAllUnselect() : this._onAllSelect()} 
                checked={ this.state.dataDummy.length !== 0 ? filter.length === this.state.dataDummy.length ? true : false : false } 
                color={ this.state.dataDummy.length > 0 ? filter.length === this.state.dataDummy.length ? "#388E3C" : "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.6)" } 
              />
              <Text style={{ fontFamily: 'Nunito-Bold', color: 'rgba(0,0,0,0.7)', marginLeft: 20 }}>
                Pilih Semua ({ filter.length }/{ this.state.dataDummy.length })
              </Text>
            </View>
            {
              this.renderItem()
            }
          </Animatable.View>
        </ScrollView>
        <View style={{ borderTopWidth: 2, borderTopColor: '#f5f5f5', bottom: 0, height: 90, backgroundColor: 'white', paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 16, fontFamily: 'Nunito-SemiBold' }}> Subtotal </Text>
              <Text style={{ fontSize: 20, fontFamily: 'Nunito-Bold', color: 'rgba(0,0,0,0.7)' }}> { this._allPriceTotal(filter) } </Text>
              <Text style={{ fontSize: 12, fontFamily: 'Nunito-Light' }}> Belum Termasuk Ongkir </Text>
            </View>
            <View style={{ position:'absolute', right: 15 }}>
            {
              filter.length ? 
                <TouchableRipple borderless rippleColor="rgba(255,255,255,0.4)" onPress={() => this.props.navigation.navigate('ProductOrder', { data: this.state.dataDummy })} style={{ width: 120, height: 35, backgroundColor: '#3A9C0B', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'Nunito-Bold', color: 'white' }}>
                    Bayar
                  </Text>
                </TouchableRipple>
                : <View />
            }
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default Basket;
