import React, { Component } from 'react';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AppContainer from './src/routes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
