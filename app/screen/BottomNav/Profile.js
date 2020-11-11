import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, StatusBar, ScrollView, TextInput, Image } from 'react-native';
import { Container, Button } from 'native-base';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const { height, width } = Dimensions.get('window');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
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

  _onButtonEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#3A9C0B' }}>
        <ScrollView style={{ backgroundColor: 'white', marginTop: StatusBar.currentHeight }}>
          <Animatable.View delay={1000} animation="fadeIn">
            <ImageBackground source={require('../../assets/images/head.png')} style={{ height: width/2.88, width: width, alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 20, color: 'white', marginTop: 10 }}>PROFIL</Text>
              <Image source={require('../../assets/images/add-image.png')} style={{ height: 100, width: 100, marginTop: 10 }} />
            </ImageBackground>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Animatable.View delay={1500} animation="fadeInUp" style={{ marginTop: 25, marginLeft: 30, marginRight: 30, marginBottom: 25 }}>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Nama</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: this.state.edit ? '#3A9C0B' : 'grey', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon3 name="user" size={26} color={this.state.edit ? '#3A9C0B' : 'grey'} />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Medium', color: 'grey' }} value="Reanata" placeholder="Reanata" editable={this.state.edit}/>
                </View>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Email</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: this.state.edit ? '#3A9C0B' : 'grey', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }} >
                  <Icon1 name="email" size={26} color={this.state.edit ? '#3A9C0B' : 'grey'} />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Medium', color: 'grey' }} value="reanata@gmail.com" placeholder="reanata@gmail.com" editable={this.state.edit}/>
                </View>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Handphone</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: this.state.edit ? '#3A9C0B' : 'grey', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon3 name="smartphone" size={26} color={this.state.edit ? '#3A9C0B' : 'grey'} />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Medium', color: 'grey' }} value="0895379911134" placeholder="089xxxxxxxxx" editable={this.state.edit}/>
                </View>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>Password</Text>
                <View style={{ marginBottom: 15, flexDirection: 'row', borderBottomColor: this.state.edit ? '#3A9C0B' : 'grey', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon2 name="key" size={26} color={this.state.edit ? '#3A9C0B' : 'grey'} />
                  <TextInput style={{ height: 45, width: '90%', paddingLeft: 10, fontSize: 16, fontFamily: 'Nunito-Medium', color: 'grey' }} value="********" placeholder="*****" editable={this.state.edit}/>
                </View>
                <ImageBackground source={require('../../assets/images/ktp.png')} style={{ width: 212, height: 150, marginBottom: 50 }}>
                  <Button onPress={() => this._onButtonEdit()} androidRippleColor color="rgba(0,0,0,0.2)" style={{ backgroundColor: 'transparent', width: '100%', height: '100%', elevation: 0 }} />
                </ImageBackground>
                <Button onPress={() => this._onButtonEdit()} androidRippleColor color="rgba(0,0,0,0.2)" style={{ backgroundColor: '#3A9C0B', width: '30%', height: 40, borderRadius: 4, position: 'absolute', right: 0, bottom: 0 }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', color: 'white', fontSize: 16 }}>Edit</Text>
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

export default Profile;
