import React, {Component} from 'react';
import {StyleSheet, Dimensions, ImageBackground, Image,Text,Switch} from 'react-native';
import {Container,View,Icon,Item,Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Register extends Component{
    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
          showPassword: true
        };
      }
      toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
      }
    render(){
        return (
            <Container>
                <View style={[styles.header]}>
                    <ImageBackground source={require("../images/header.png")} style={{width:'100%',height:'100%',justifyContent:'center', alignItems:'center'}} resizeMode="stretch">
                        <Image source={require("../images/logo.png")} resizeMode="contain" style={{width:100,height:100}}/>
                        <View style={{width,alignItems:'flex-end',paddingRight:37}}>
                            <Text style={{fontSize:20,color:'white'}}>Register</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={[styles.content]}>
                    <View style={[styles.form]}>
                        <Item rounded style={[styles.itemInput]}>
                            <Icon name='person' type="MaterialIcons" style={[styles.itemIcon]}/>
                            <Input placeholder="Fullname" placeholderTextColor="#959595" autoCorrect={false} returnKeyType={"next"} onSubmitEditing={(event) => { this.refs.passwordInput._root.focus(); }} style={{padding:0}}/>
                        </Item>
                        <Item rounded style={[styles.itemInput]}>
                            <Icon name='email'  type="MaterialIcons"  style={[styles.itemIcon]}/>
                            <Input placeholder="Email" placeholderTextColor="#959595" autoCorrect={false} returnKeyType={"done"} ref="passwordInput" secureTextEntry={this.state.showPassword} style={{padding:0}}/>
                        </Item>
                        <Item rounded style={[styles.itemInput]}>
                            <Icon name='phone'  type="MaterialIcons"  style={[styles.itemIcon]}/>
                            <Input placeholder="Phone number" placeholderTextColor="#959595" autoCorrect={false} returnKeyType={"done"} ref="passwordInput" secureTextEntry={this.state.showPassword} style={{padding:0}}/>
                        </Item>
                        <Item rounded style={[styles.itemInput]}>
                            <Icon name='vpn-key'  type="MaterialIcons"  style={[styles.itemIcon]}/>
                            <Input placeholder="Password" placeholderTextColor="#959595" autoCorrect={false} returnKeyType={"done"} ref="passwordInput" secureTextEntry={this.state.showPassword} style={{padding:0}}/>
                            <Switch
                                onValueChange={this.toggleSwitch}
                                value={!this.state.showPassword}
                                />
                        </Item>
                        <Item
                            button
                            rounded
                            style={[styles.itemInput, { backgroundColor: "#F5591F" }]}
                        >
                            <Input disabled style={{ textAlign: "center"}}>
                            <Text style={{ color: "white" }}>REGISTER</Text>
                            </Input>
                        </Item>
                    </View>
                    <View style={[styles.footer]}>
                        <Text>Already a member?<Text style={{color:"#F5591F"}} button onPress={()=>Actions.Login()}> Login</Text></Text>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        height:height/3
    },
    content:{
        height:height-height/3
    },
    form:{
        height:(height-height/3)-(height-height/3)/5,
        padding:37,
    },
    footer:{
        height:(height-height/3)/5,
        alignItems:'center'
    },
    noneBoderBottom:{
        borderBottomWidth:0
    },
    itemInput:{
        marginTop:5
    },
    itemIcon:{
        color:'#ddd',
        fontSize:15
    }
});