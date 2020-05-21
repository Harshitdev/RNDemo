import React from 'react';
import {
    View, Text, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import UserActions from "../Redux/userRedux";

class Login extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log("----")
        return (
            <View>
                <Text>
                    login
                </Text>
            </View>
        )
    }
}
const mapStateToProps = (state: { user: { error: any; fetching: any; }; }) => {
    return {
        state: state,
        error: state.user.error,
        fetching: state.user.fetching,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch: { (arg0: any): void; (arg0: any): void; (arg0: any): void; }) => {
    return {
        // signin: (data: any) => dispatch(UserActions.signin(data)),
        // register: (data: any) => dispatch(UserActions.register(data)),
        // initialState: () => dispatch(UserActions.initialState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})