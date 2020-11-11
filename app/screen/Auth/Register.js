import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, StatusBar, ScrollView, TextInput } from 'react-native';
import { Container, Button } from 'native-base';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const { height, width } = Dimensions.get('window');

class Register extends Component {
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
            <ImageBackground source={require('../../assets/images/head.png')} style={{ height: width/2.88, width: width, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 22, color: 'white' }}>Register</Text>
            </ImageBackground>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Animatable.View delay={1500} animation="fadeInUp" style={{ marginTop: 25, marginLeft: 30, marginRight: 30, marginBottom: 25 }}>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Nama</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: '#3A9C0B', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon3 name="user" size={26} color="#3A9C0B" />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Regular' }} placeholder="Reanata" />
                </View>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Email</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: '#3A9C0B', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon1 name="email" size={26} color="#3A9C0B" />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Regular' }} placeholder="reanata@gmail.com" />
                </View>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Handphone</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: '#3A9C0B', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon3 name="smartphone" size={26} color="#3A9C0B" />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Regular' }} placeholder="089xxxxxxxxx" />
                </View>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Password</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: '#3A9C0B', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon2 name="key" size={26} color="#3A9C0B" />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Regular' }} placeholder="*****" />
                </View>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Ulangi Password</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: '#3A9C0B', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon2 name="key" size={26} color="#3A9C0B" />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Regular' }} placeholder="*****" />
                </View>
                <Button androidRippleColor color="rgba(0,0,0,0.2)" style={{ backgroundColor: '#3A9C0B', width: '100%', height: 45, borderRadius: 4 }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', color: 'white', fontSize: 16 }}>Daftar</Text>
                  </View>
                </Button>
              </Animatable.View>
            </View>
          </Animatable.View>
        </ScrollView>
      </Container>
    );
  }
}

export default Register;
