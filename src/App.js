import React, { Component } from 'react';
import { Loading } from './components/common/';
import Auth from './screens/Auth';
import deviceStorage from './services/deviceStorage.js';
import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Category';
import ProfileScreen from './screens/Profile';
import TopicListScreen from './screens/TopicList';
import TopicScreen from './screens/Topic';
import NewPostScreen from './screens/NewPost';
import PostReplyScreen from './screens/PostReply';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


const RootStack = createDrawerNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Category: CategoryScreen,
    NewPost: NewPostScreen,
    PostReply: PostReplyScreen,
    TopicList: TopicListScreen,
    Topic: TopicScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: true,
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true,
    }
    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);

    this.loadJWT();
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  render()  {
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    } else if (!this.state.jwt) {
      return (
        <Auth newJWT={this.newJWT} />
      );
    } else if (this.state.jwt) {
      return (
        <AppContainer screenProps={{ deleteJWT: this.deleteJWT, jwt: this.jwt }} />
      );
    }
  }
}