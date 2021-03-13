/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {JsonData} from '../Assets/Data';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

function Item(props) {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity
        onPress={() => {
          props.clickMe(!selected);
          setSelected(!selected);
        }}>
        {selected ? (
          <IconAntDesign
            name="checkcircle"
            color="rgba(0,73,78,0.9)"
            size={16}
          />
        ) : (
          <IconAntDesign name="checkcircle" color="#c9c9c9" size={16} />
        )}
      </TouchableOpacity>
    </View>
  );
}
export default class Middle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      count: 0,
    };
  }
  handleClick = (selected) => {
    if (selected) {
      console.log('click was selected');
      this.state.count++;
      console.log(this.state.count);
    } else {
      console.log('click was deselected');
      this.state.count--;
      console.log(this.state.count);
    }
    if (this.state.count === 1) {
      this.setState({
        selected: true,
      });
    } else if (this.state.count === 0) {
      this.setState({
        selected: false,
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.middleContainer}>
        <SectionList
          sections={JsonData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Item title={item} clickMe={this.handleClick} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.header}>
              <Text style={styles.headerText}>{title}</Text>
            </View>
          )}
        />
        {this.state.selected ? (
          <TouchableOpacity style={styles.continueBtn}>
            <Text style={{color: '#fff'}}>CONTINUE</Text>
          </TouchableOpacity>
        ) : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopWidth: 0.3,
  },
  header: {
    paddingLeft: 10,
    paddingVertical: 20,
    borderTopWidth: 0.3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
  },
  middleContainer: {
    position: 'relative',
    flex: 1,
  },
  continueBtn: {
    position: 'absolute',
    backgroundColor: '#4f8080',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '3%',
    width: '90%',
    height: 50,
    marginLeft: '5%',
    borderRadius: 5,
    zIndex: 999,
  },
});
