import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Loading...'}
                    textStyle={{ color: '#fff' }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
});
