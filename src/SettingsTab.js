import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View, Button, Image } from 'react-native';
import { LogInOutButton } from './components/common';

export default class SettingsPage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ flex: 1, flexDirection: 'row'}}>
    		  <View style={{ flex: 1, margin: 25, padding: 25, alignSelf: 'stretch' }}>
    			   <LogInOutButton onPress={() => firebase.auth().signOut()}>
    				     Log Out
    			   </LogInOutButton>
          </View>
        </View>
      </View>
    );
  }
}
