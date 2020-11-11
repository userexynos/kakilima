import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Container, Button } from 'native-base';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Foundation';
import * as Animatable from 'react-native-animatable';

const { height, width } = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.navigatorListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#3A9C0B');
    })
  }

  componentWillUnmount() {
    this.navigatorListener.remove();
  }

  render() {
    return (
      <Container>
        <ScrollView>
          <Animatable.View delay={1000} animation="fadeIn">
            <Image source={require('../../assets/images/head.png')} style={{ height: width/2.88, width: width }}/>
            <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
              <Animatable.Image delay={1700} animation="fadeInDown" source={require('../../assets/images/logo-warna.png')} style={{ height: width/2.337, width: width/2.769 }} />
              <Animatable.View delay={1500} animation="fadeInUp" style={{ margin: 30 }}>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Email</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: '#3A9C0B', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon1 name="email" size={26} color="#3A9C0B" />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Regular' }} placeholder="reanata@gmail.com" />
                </View>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Password</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: '#3A9C0B', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon2 name="key" size={26} color="#3A9C0B" />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Regular' }} placeholder="*****" />
                </View>
                <Button androidRippleColor color="rgba(0,0,0,0.2)" onPress={() => this.props.navigation.navigate('Home')} style={{ backgroundColor: '#3A9C0B', width: '100%', height: 45, borderRadius: 4 }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', color: 'white', fontSize: 16 }}>Masuk</Text>
                  </View>
                </Button>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
                  <Text style={{ fontSize: 15, fontFamily: 'Nunito-SemiBold' }}>Tidak memiliki akun? </Text>
                  <TouchableOpacity activeOpacity={0.65} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={{ fontSize: 15, fontFamily: 'Nunito-Bold', textDecorationLine: 'underline line-through', color: '#3A9C0B' }}>Daftar</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 15, fontFamily: 'Nunito-SemiBold' }}> Disini yuk</Text>
                </View>
              </Animatable.View>
            </View>
          </Animatable.View>
        </ScrollView>
      </Container>
    );
  }
}

export default Login;
