import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LogInOutButton = ({ onPress, children }) => {
	const { textStyle, buttonStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#212121',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#fff'
	}
};

export { LogInOutButton };
