import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, Image } from 'react-native';
import firebase from 'firebase';
import { Header, LogInOutButton, Spinner, NewButtons } from './src/components/common';
import TabScreen from './src/TabScreen';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: null,
			date: 'Select Date',
			category: 'Select Category',
			amount: '',
      note: ''
		}
	}

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCZ4Tvi_AIbWXIol_OeCDnsGfhHHDNo00M",
	    authDomain: "hamm-5d0a9.firebaseapp.com",
	    databaseURL: "https://hamm-5d0a9.firebaseio.com",
	    projectId: "hamm-5d0a9",
	    storageBucket: "hamm-5d0a9.appspot.com",
	    messagingSenderId: "241269197292"
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<TabScreen />
				);
			case false:
				return (
          <View style={styles.loginFormStyle}>
						<Header headerText="Hamm" />
            <Image resizeMode= 'contain' style={styles.piggyStyle}
              source={require('./src/images/sleepypiggy.png')} />
            <KeyboardAvoidingView style={styles.loginStyle} behavior="padding" enabled>
              <LoginForm />
            </KeyboardAvoidingView>
          </View>
        );
			default:
				return <Spinner size="large" style={styles.spinnerStyle} />;
		}
	}

	render() {
		return (
      <View style={styles.containerStyle}>
        {this.renderContent()}
      </View>
		);
	}
}

const styles = {
  piggyStyle: {
    flex: 1,
    alignSelf: 'center',
    height: 300,
    width: 300
  },
  loginFormStyle: {
    flex: 1,
    paddingBottom: 10
  },
  loginStyle: {
    flex: 1,
    paddingTop: 25
  },
	spinnerStyle: {
		flexDirection: 'row'
	},
  containerStyle: {
    flex: 1,
    backgroundColor: '#ffc107'
  },
	newButtonsContainterStyle: {
		alignSelf: 'center',
		height: 50,
		width: 100
	}
};
