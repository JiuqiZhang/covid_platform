import { StackActions } from '@react-navigation/native';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CovidImage from '../../assets/images/covid.svg'

export default class  Start  extends Component {

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>Covid Venues</Text>
            </View>
            <View style={styles.content}>
                <CovidImage style={styles.image} />
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={this.handleItemClick.bind(this)}
            >
                <Text   
                    style={styles.buttonText}
                >Login !</Text>
                <MaterialIcons
                    name="arrow-forward-ios"
                    size={25}
                    color='#ffffff'
                />
                {/* <Icon.Button 
                    name="google"
                    // onPress={this.loginWithFacebook}
                /> */}
            </TouchableOpacity>
        </SafeAreaView>
    );
  }

  handleItemClick() {
    this.props.navigation.navigate('Home')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    marginTop: 20
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#20315f'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '85%',
    borderRadius: 10,
    marginBottom: 50
  },
  buttonText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white'
  },
  image: {
      width: 300,
      height: 300
  }
});