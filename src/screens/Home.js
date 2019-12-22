import * as React from 'react';
import { View, Text, Image } from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import {Header} from '../components/common/Header';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        loading: true,
        error: ''
      }
  }
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
          <Header onPress={this.props.navigation.openDrawer} >
            <View style={{ flex: 1, alignItems: 'center'}}>
                <View>
                    <Image
                      style={{width: 100, height: 100}}
                      source={require('../../assets/logo.png')}
                    />
                </View>
                <View style={{justifyContent: 'center', backgroundColor: 'red', flex:1}}>
                    <Text>{this.props.jwt}</Text>
                </View>
                <View style={{flex:1}}>
                  <Button
                    mode="contained"
                    onPress={() => this.props.navigation.navigate('ProfileScreen')}
                    style={{borderRadius:5}}
                  >
                    Go to Details
                  </Button>
                  <Button onPress={this.props.screenProps.deleteJWT}>
                    ÇIIIKK NOLURSUN GİT YA
                  </Button>
                </View>
            </View>
          </Header>
    );
  }
}
