import React, { Component } from 'react';
import { Text, Alert, View, TextInput } from 'react-native';
import CustomButton from './components/common/CustomButton';
import Categories from './components/Categories';
import ChooseDate from './components/ChooseDate';
import NoteTextInput from './components/NoteTextInput';

export default class AddExpenseTab extends Component {
  state = { amount: '', note: '' };

  onPressButton() {
    const { amount, category, date, note }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.amountStyle}>
          <NoteTextInput
            placeholder="How much did you spend?"
            value={this.state.amount}
            onChangeText={temp => this.setState({ amount: temp })}
            keyboardType='numeric'
            returnKeyType='done'
          />
        </View>

        <View style={styles.categoryStyle}>
          <Categories />
        </View>

        <View style={styles.dateStyle}>
          <ChooseDate />
        </View>

        <View style={styles.noteStyle}>
          <NoteTextInput
            placeholder="Write a note here!"
            value={this.state.note}
            onChangeText={temp => this.setState({ note: temp })}
          />
        </View>

        <View style={styles.submitStyle}>
          <CustomButton
          title="Submit"
          onPress={this.onPressButton.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = {
    containerStyle: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    amountStyle: {
      height: 60,
      width: 250,
      backgroundColor: '#FFEEE4',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40
    },
    categoryStyle: {
      height: 60,
      width: 250,
      backgroundColor: '#DDEEE4',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dateStyle: {
      height: 60,
      width: 250,
      backgroundColor: '#AAEEE4',
      alignItems: 'center',
      justifyContent: 'center'
    },
    noteStyle: {
      height: 120,
      width: 250,
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:  40
  	},
    submitStyle: {
      height: 60,
      width: 250,
      backgroundColor: '#abcdef',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    },
    buttonFontStyle: {
      fontSize: 15
    }
}
