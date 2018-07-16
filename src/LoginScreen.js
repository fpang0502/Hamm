// import React, { Component } from 'react';
// import { KeyboardAvoidingView, View, Text, Image } from 'react-native';
// import firebase from 'firebase';
// import { Header, LogInOutButton, Spinner, NewButtons } from './components/common';
// import TabScreen from './src/Tabscreen';
// import LoginForm from './components/LoginForm';
//
// export default class App extends Component {
// 	state = { loggedIn: null };
//
// 	componentWillMount() {
// 		firebase.initializeApp({
// 	 		apiKey: "AIzaSyB0H1FIbJCqv0zvGO-1dI-qiudzRlBmuJg",
// 	  		authDomain: "auth-10cc7.firebaseapp.com",
// 	  		databaseURL: "https://auth-10cc7.firebaseio.com",
// 	  		projectId: "auth-10cc7",
// 		    storageBucket: "auth-10cc7.appspot.com",
// 		    messagingSenderId: "950298171286"
// 		});
//
// 		firebase.auth().onAuthStateChanged((user) => {
// 			if (user) {
// 				this.setState({ loggedIn: true });
// 			} else {
// 				this.setState({ loggedIn: false });
// 			}
// 		});
// 	}
//
// 	renderContent() {
// 		switch (this.state.loggedIn) {
// 			case true:
// 				return (
// 					<TabScreen />
// 					// <View style={styles.containerStyle}>
// 					// 	<View style={{ flex: 3, flexDirection:'row', justifyContent: 'space-evenly'}}>
// 					// 			<View style={styles.newButtonsContainterStyle}>
// 					// 				<NewButtons> Add
// 					// 				</NewButtons>
// 					// 			</View>
// 					// 			<View style={styles.newButtonsContainterStyle}>
// 					// 				<NewButtons> Subtract
// 					// 				</NewButtons>
// 					// 			</View>
// 					// 	</View>
// 					// 	<View style={{ flex: 1, flexDirection: 'row'}}>
// 					// 		<View style={{ flex: 1, margin: 25, padding: 25, alignSelf: 'stretch' }}>
// 					// 			<LogInOutButton onPress={() => firebase.auth().signOut()}>
// 					// 				Log Out
// 					// 			</LogInOutButton>
// 					// 		</View>
// 					// 	</View>
// 					// </View>
// 				);
// 			case false:
// 				return (
//           <View style={styles.loginFormStyle}>
//             <Image resizeMode= 'contain' style={styles.piggyStyle}
//               source={require('./images/sleepypiggy.png')} />
//             <KeyboardAvoidingView style={styles.loginStyle} behavior="padding" enabled>
//               <LoginForm />
//             </KeyboardAvoidingView>
//           </View>
//         );
// 			default:
// 				return <Spinner size="large" style={styles.spinnerStyle} />;
// 		}
// 	}
//
// 	render() {
// 		return (
//       <View style={styles.containerStyle}>
//         <Header headerText="Hamm" />
//         {this.renderContent()}
//       </View>
// 		);
// 	}
// }
//
// const styles = {
//   piggyStyle: {
//     flex: 1,
//     alignSelf: 'center',
//     height: 300,
//     width: 300
//   },
//   loginFormStyle: {
//     flex: 1,
//     paddingTop: 10,
//     paddingBottom: 10
//   },
//   loginStyle: {
//     flex: 1,
//     paddingTop: 25
//   },
// 	spinnerStyle: {
// 		flexDirection: 'row'
// 	},
//   containerStyle: {
//     flex: 1,
//     backgroundColor: '#ffc107'
//   },
// 	newButtonsContainterStyle: {
// 		alignSelf: 'center',
// 		height: 50,
// 		width: 100
// 	}
// };
