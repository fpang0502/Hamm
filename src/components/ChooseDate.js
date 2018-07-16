import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomButton from './common/CustomButton';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class ChooseDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      date: 'Select Date'
    }
  }

  

  render () {
    return (
      <View style={{ flex: 1 }}>
        <CustomButton
          title = {this.state.date}
          onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.selected.bind(this)}
          onCancel={this.hideDateTimePicker} />
        />
      </View>
    );
  }
}
