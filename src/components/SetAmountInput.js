import React from 'react';
import { TextInput, View, Text } from 'react-native';

const SetAmountInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return(
		<View>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				underlineColorAndroid='transparent'
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		flex: 1,
		color: '#212121',
		fontSize: 18,
		lineHeight: 23,
		flexDirection: 'row',
		alignSelf: 'stretch',
		padding: 7
	}
};

export default NoteTextInput;
