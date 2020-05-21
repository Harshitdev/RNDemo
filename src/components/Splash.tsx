import React from 'react';
import { StatusBar, View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import NavigationService from '../Services/NavigationService';


class Splash extends React.Component {

  componentDidMount() {
    try {
      // setTimeout(() => {
      //   NavigationService.navigate("LoginScreen")
      // }, 3000);
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Splash
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
  },
  backgroundView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
});

const mapStateToProps = (state) => {
  return {
    state: state,
    error: state.user.error,
    fetching: state.user.fetching,
    exists: state.user.exists,
    isfirstTime: state.user.isfirstTime,
    allAboutYou: state.user.allAboutYou,
    youScreen: state.user.youScreen,
    createBio: state.user.createBio,
    aboutYourChildren: state.user.aboutYourChildren,
    addInterest: state.user.addInterest,
    profileCompleted: state.user.profileCompleted,
    alreadyExist: state.user.alreadyExist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)