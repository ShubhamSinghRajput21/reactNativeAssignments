import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Header from '../Components/Header';
import Middle from '../Components/Middle';

export default class ListExample extends Component {
  render() {
    return (
      <>
        <Header />
        <Middle />
      </>
    );
  }
}

const styles = StyleSheet.create({});
