import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

const Item = ({first_name, last_name, email, avatar}) => (
  <View style={styles.content}>
    <Image style={styles.img} source={{uri: avatar}}></Image>
    <Text style={styles.contentData}>{`Email: ${email}`}</Text>
    <Text style={styles.contentData}>{`Name: ${first_name} ${last_name}`}</Text>
  </View>
);

export default class FlatListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      isrefreshing: false,
    };
  }

  fetchData(page) {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: [...this.state.data, ...res.data],
          page: page,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    console.log('mount');
    this.fetchData(this.state.page);
  }

  renderItem = ({item}) => <Item {...item} />;

  render() {
    console.log('render');
    const {data, page, isrefreshing} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={data}
          ListHeaderComponent={
            isrefreshing ? <ActivityIndicator size="small" /> : null
          }
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isrefreshing}
              onRefresh={() => {
                this.setState({isrefreshing: true});
                this.setState({data: [], page: 1});
                this.fetchData(page);
                this.setState({isrefreshing: false});
              }}
            />
          }
          onEndReached={() => {
            this.fetchData(page + 1);
          }}
          ListFooterComponent={<ActivityIndicator size="small" />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  content: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  contentData: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
