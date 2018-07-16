import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CustomButton from './common/CustomButton';
import Modal from 'react-native-modal';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      category: 'Select Category'
    }
  }

  showModal = () => this.setState({ modalVisible: true })
  hideModal = () => this.setState({ modalVisible: false })

  selected(categoryType) {
      this.setState({category: categoryType });
      this.hideModal();
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.categoryStyle}>
          <CustomButton
            title={this.state.category}
            onPress={this.showModal} />
        </View>
        <Modal isVisible={this.state.modalVisible}>
          <View style={styles.modalViewStyle}>
          <CustomButton
            title= 'Entertainment'
            onPress={ () => this.selected('Entertainment')} />
          <CustomButton
            title= 'Food'
            onPress={ () => this.selected('Food')} />
          <CustomButton
            title= 'Transporation'
            onPress={ () => this.selected('Transportation')} />
          <CustomButton
            title= 'Education'
            onPress={ () => this.selected('Education')} />
          <CustomButton
            title= 'Other'
            onPress={ () => this.selected('Other')} />
          <CustomButton
            title= 'Cancel'
            onPress={this.hideModal} />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = {
  modalViewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  categoryStyle: {
    height: 60,
    width: 250,
    backgroundColor: '#DDEEE4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonFontStyle: {
    fontSize: 15
  }
}
