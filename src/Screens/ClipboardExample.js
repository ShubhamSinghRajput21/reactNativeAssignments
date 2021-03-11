import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView, Button, TextInput} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default class ClipboardExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copiedText: '',
    };
  }

  pasteText = async () => {
    const text = await Clipboard.getString();
    this.setState({
      copiedText: text,
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    const {copiedText} = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text style={{fontSize: 20}}>{copiedText}</Text>
        <Button title="Paste Text Here" onPress={this.pasteText} />
        <Button
          title="Clear Text"
          onPress={() => this.setState({copiedText: ''})}
        />
        <Button title="Go To next" onPress={() => navigate('Copy-content')} />
        <Button title="Go To Home page" onPress={() => navigate('Home')} />
      </SafeAreaView>
    );
  }
}

export class CopyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  copyText = () => {
    Clipboard.setString(this.state.text);
  };
  render() {
    const {navigate} = this.props.navigation;
    const {text} = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(value) => this.setState({text: value})}
          autoFocus={true}
        />
        <Button
          title="Copy Textinput content in clipboard"
          onPress={this.copyText}
        />
        <Button title="go back" onPress={() => navigate('Clipboard')} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    fontSize: 20,
  },
});
