import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { Container } from 'native-base';
import * as Animatable from 'react-native-animatable';

const { height, width } = Dimensions.get('window');

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.navigationListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('transparent');
    })
    setTimeout(() => {
      this.props.navigation.navigate('Auth')
    }, 3000)
  }

  componentWillUnmount() {
    this.navigationListener.remove();
  }
  
  render() {
    return (
      <Container>
        <Animatable.View delay={1000} animation="fadeIn">
          <ImageBackground style={{ width: width, height: height }} source={ require('../assets/images/bg-onboarding.png') }>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Animatable.Image delay={1200} animation="fadeIn" style={{ width: width/2.25, height: width/1.925 }} source={ require('../assets/images/logo-putih.png') } />
              </View>
          </ImageBackground>
        </Animatable.View>
      </Container>
    );
  }
}

export default SplashScreen;
