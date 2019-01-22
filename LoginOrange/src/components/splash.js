import React, { Component } from 'react';
import { StyleSheet, Image ,ImageBackground} from 'react-native';
import { Container, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Splash extends Component{
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
        Actions.Login();
    }, 2000);
    if(this.state.timePassed){
        
    }
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }
  render() {
    return (
      <Container>
      <ImageBackground source={require("./images/splash.png")} style={{width: '100%', height: '100%',justifyContent: "center",alignItems: "center",}} resizeMode="stretch">
        <Image
          source={require("./images/logo.png")}
          resizeMode="contain"
          style={{ height: 100, width: 100 }}
        />
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({});
