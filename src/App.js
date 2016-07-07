import React, { Component } from 'react';
import {
    NavigatorIOS,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { MediaList } from './views';

export default class App extends React.Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: MediaList,
          title: 'Around Me'
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
