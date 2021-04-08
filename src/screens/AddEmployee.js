import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {addEmployee} from '../store/RealmDatabase';

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: '',
      name: '',
      designation: '',
      salary: '',
      error: {
        employeeId: false,
        name: false,
        designation: false,
        salary: false,
      },
    };
  }

  handleSubmit = () => {
    let alphacheck = /^[A-Z]+$/i;
    let numcheck = /^[0-9]*$/;

    if (this.state.employeeId === '' || !numcheck.test(this.state.employeeId)) {
      this.setState({error: {employeeId: true}});
      return;
    } else if (this.state.name === '' || !alphacheck.test(this.state.name)) {
      this.setState({error: {name: true}});
      return;
    } else if (
      this.state.designation === '' ||
      !alphacheck.test(this.state.designation)
    ) {
      this.setState({error: {designation: true}});
      return;
    } else if (this.state.salary === '' || !numcheck.test(this.state.salary)) {
      this.setState({error: {salary: true}});
      return;
    }

    let employeeData = {
      employeeId: Number(this.state.employeeId),
      name: this.state.name,
      designation: this.state.designation,
      salary: Number(this.state.salary),
    };
    addEmployee(employeeData);
    this.props.navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  handleInput = (employeeName) => {
    this.setState({employeeName});
  };
  render() {
    const {employeeId, name, salary, designation, error} = this.state;
    return (
      <View>
        <TextInput
          value={employeeId}
          style={styles.input}
          placeholder="Employee Id"
          placeholderTextColor="#000"
          onChangeText={(text) => this.setState({employeeId: text})}
        />
        {error.employeeId ? (
          <Text style={styles.errorText}>
            Employee Id must be a number and non empty
          </Text>
        ) : null}
        <TextInput
          value={name}
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Name"
          onChangeText={(text) => this.setState({name: text})}
        />
        {error.name ? (
          <Text style={styles.errorText}>
            Name must be a alphabetical and non empty
          </Text>
        ) : null}
        <TextInput
          value={designation}
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Designation"
          onChangeText={(text) => this.setState({designation: text})}
        />
        {error.designation ? (
          <Text style={styles.errorText}>
            Designation must be a alphabetical and non empty
          </Text>
        ) : null}
        <TextInput
          value={salary}
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Salary"
          onChangeText={(text) => this.setState({salary: text})}
        />
        {error.salary ? (
          <Text style={styles.errorText}>
            salary must be Numeric and non empty
          </Text>
        ) : null}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => this.handleSubmit()}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#dedede',
    padding: 20,
    margin: 10,
    borderRadius: 20,
    fontSize: 18,
  },
  submitBtn: {
    padding: 15,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
    fontSize: 16,
  },
});
