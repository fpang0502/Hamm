import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, title }) => {
	const { textStyle, buttonStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		justifyContent: 'center',
    alignSelf: 'center',
		color: '#212121',
		fontSize: 15
	},
  buttonStyle: {
    height: 60,
    width: 250,
    backgroundColor: '#DDEEE4',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default CustomButton;
