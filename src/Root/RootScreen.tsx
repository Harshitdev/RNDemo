import React from 'react'
import { View, Text } from "react-native";
import NavigationService from '../Services/NavigationService';
import Login from '../components/Login';
// import CreateAccount from '../components/CreateAccount';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Splash from '../components/Splash';

console.disableYellowBox = true;

const MainNavigator = createStackNavigator(
  {
    Splash: { screen: Splash, navigationOptions: { headerShown: false } },
    LoginScreen: { screen: Login, navigationOptions: { headerShown: false } },
  },
  { initialRouteName: 'Splash' }
);

const AppNavigator = createAppContainer(MainNavigator);

export default class RootScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <AppNavigator ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }} />
      </View>
    );
  }
}