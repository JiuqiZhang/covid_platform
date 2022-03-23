import React from "react";
import { Image, StyleSheet, Text, TextInput, Button, View, FlatList } from "react-native";
import { connect } from 'react-redux';
import axios from 'axios';
import baseUrl from '../../assets/constants/BaseUrl'

Create = (props) => {
	const handleSubmit = async () => {
		props.createVenues(props.name, props.description)
	}

	return (
		<View>
			<TextInput
				placeholder=" Name"
				onChangeText={(text) => { props.setName(text) }}
				style={{ borderWidth: 2, borderColor: '#000', padding: 10, marginTop: 10 }}
			/>
			<TextInput
				placeholder=" Description"
				onChangeText={(text) => { props.setDescription(text) }}
				style={{ borderWidth: 2, borderColor: '#000', padding: 10, marginTop: 10 }}
			/>
			<Button title="submit" onPress={() => { handleSubmit() }} />
		</View>
	);
}

const createVenue = (name, description) => async dispatch => {
	const res = await axios.post(`${baseUrl}/venue/add`, { name: name, description: description})
};

const getSetName = (data) => {
	return {
		type: 'CREATE_NAME',
		name: data
	}
};

const getSetDescription = (data) => {
	return {
		type: 'CREATE_DESCRIPTION',
		description: data
	}
};

const mapState = (state) => {
	console.log(state.report.name)
	console.log(state.report.description)
	return {
		name: state.report.name,
		description: state.report.description
	}
}

const mapDispatch = (dispatch) => {
	return {
		createVenues(name, description) {
			dispatch(createVenue(name, description))
		},
		setName(res) {
			if (res) {
				const action = getSetName(res)
				dispatch(action)
			}
		},
		setDescription(res) {
			if (res) {
				const action = getSetDescription(res)
				dispatch(action)
			}
		}
	}
}

export default connect(mapState, mapDispatch)(Create)