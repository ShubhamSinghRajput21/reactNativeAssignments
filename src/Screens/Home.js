import React, {Component, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: '1',
    content: 'Polo Shirts',
  },
  {
    id: '2',
    content: 'Dress Shirts',
  },
  {
    id: '3',
    content: 'Shorts',
  },
  {
    id: '4',
    content: 'T-Shirts & Vests',
  },
];

function ProductComponent() {
  const [iconPressed, seticonPressed] = useState(false);
  return (
    <View style={styles.productView}>
      <Image style={styles.image} source={require('../assets/pic.jpeg')} />
      <View style={styles.new}>
        <Text style={{color: '#fff', textAlign: 'center'}}>New</Text>
      </View>
      <Text style={styles.productTitle}>Tommy Hilfiger</Text>
      <Text style={styles.productText}>Men's Morrison Stripe Polo,</Text>
      <Text style={styles.productText}>Limelight Combo</Text>
      <Text style={styles.priceText}>USD 23</Text>
      <View style={styles.wishlistbtn}>
        <TouchableOpacity onPress={() => seticonPressed(!iconPressed)}>
          {iconPressed ? (
            <IconIonicons name="heart" color="red" />
          ) : (
            <IconIonicons name="heart-outline" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Item({content}) {
  return (
    <TouchableOpacity style={styles.listView}>
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
}

export default class Home extends Component {
  renderItem({item}) {
    return <Item content={item.content} />;
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Men Clothing</Text>
        </View>
        <View style={styles.secondHeader}>
          <Text style={styles.secondHeaderText}>195 items</Text>
          <View style={styles.secondInnerView}>
            <IconFontAwesome name="sort" size={22} />
            <TouchableOpacity>
              <Text style={styles.secondHeaderText}>SORT</Text>
            </TouchableOpacity>
            <IconAntDesign name="filter" size={22} />
            <TouchableOpacity>
              <Text style={styles.secondHeaderText}>FILTER</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.contentsList}>
            <FlatList
              data={DATA}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <ProductComponent />
            <ProductComponent />
          </View>
          <View style={{flexDirection: 'row'}}>
            <ProductComponent />
            <ProductComponent />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondHeader: {
    flexDirection: 'row',
    height: '8%',
    borderBottomWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondInnerView: {
    flexDirection: 'row',
  },
  secondHeaderText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  contentsList: {
    height: '8%',
  },
  listView: {
    backgroundColor: '#dedede',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginVertical: 10,
  },
  content: {
    fontSize: 18,
  },
  productView: {
    position: 'relative',
    width: 185,
    marginHorizontal: 10,
    marginTop: 10,
  },
  image: {
    width: 185,
  },
  new: {
    position: 'absolute',
    width: 40,
    height: 25,
    backgroundColor: 'green',
    paddingTop: 4,
  },
  productTitle: {
    fontWeight: '500',
    fontSize: 14,
    marginTop: 10,
  },
  productText: {
    fontSize: 12,
    marginTop: 3,
  },
  priceText: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: '600',
  },
  wishlistbtn: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    right: 5,
    top: 5,
    borderRadius: 15,
  },
});
