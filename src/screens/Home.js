import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import realm, {
  getAllEmployees,
  deleteAllEmployees,
  openRealm,
  searchData,
  sortAllEmployees,
} from '../store/RealmDatabase';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchName: '',
    };
  }

  getAllData = () => {
    this.setState({employees: getAllEmployees()});
  };

  componentDidMount() {
    this.getAllData();
  }

  handleSearch = (text) => {
    this.setState({employees: searchData(text), searchName: text});
  };

  render() {
    const {employees} = this.state;

    // for (let i = 0; i < 3; i++) {
    //   realm.write(() => {
    //     const emp = realm.create('Employee', {
    //       name: 'Book' + i,
    //     });
    //   });
    // }

    // realm.close();
    openRealm();
    return (
      <View>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={this.state.searchName}
            onChangeText={(text) => this.handleSearch(text)}
          />
          <TouchableOpacity
            onPress={() => this.setState({employees: sortAllEmployees('asc')})}>
            <AntDesign name="arrowup" color="skyblue" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({employees: sortAllEmployees()})}>
            <AntDesign name="arrowdown" color="skyblue" size={30} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={employees}
          renderItem={({item}) => {
            return (
              <View style={styles.listItem}>
                <Text>
                  Employee Id {'                '} : {item.employeeId}
                </Text>
                <Text>
                  Employee Name {'         '} : {item.name}
                </Text>
                <Text>Employee Designation : {item.designation}</Text>
                <Text>
                  Employee Salary{'          '} : {item.salary}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.employeeId.toString()}
        />
        <Button
          title="delete"
          onPress={() => {
            deleteAllEmployees();
            this.getAllData();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: '#dedede',
    padding: 15,
    marginVertical: 20,
    marginLeft: 20,
    borderRadius: 20,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: '#00f6ff',
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
