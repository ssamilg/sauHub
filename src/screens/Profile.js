import * as React from 'react';
import { View, Text, Image } from 'react-native';
import {Button} from 'react-native-paper';

export default class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
          >
            {JSON.stringify(this.props.navigation.getParam('id', 'NO-ID'))}
          </Button>
        </View>
      );
    }
  }