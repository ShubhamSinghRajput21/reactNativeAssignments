import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class WebViewExample extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView
          source={{uri: 'https://www.youtube.com/'}}
          startInLoadingState={true}
          renderLoading={() => <ActivityIndicator size="large" />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
