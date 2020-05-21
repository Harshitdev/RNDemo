import React from 'react';
import { Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import IconWithBadge from '../utilities/IconWithBadge';
import MamaProfile from '../components/MamaProfile'
import ConnectWith from '../components/ConnectWith'
import ProfileSettings from '../components/ProfileSettings'
import MyProfile from '../components/MyProfile'
import Connect from '../components/Connect';
import Settings from '../components/Settings';
import MeetMama from '../components/MeetMama';
import ContactUs from '../components/ContactUs';
import MessagesScreen from '../components/MessageList';
import ChatScreen from '../components/ChatScreen';



const ProfileStack = createStackNavigator({
  Home: {
    screen: MyProfile,
    navigationOptions: {
      title: 'My Profile',
      headerBackTitle: null,
      headerLeft: null,
      gesturesEnabled: false,
      headerVisible: true,
      headerStyle: { backgroundColor: '#8cd2c8' },
      headerBackImage: <Image source={require("../images/back-to.png")} />,
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '600',
        width: 220
      },
      headerLeftContainerStyle: { left: 10 },
    }
  }
});

const ConnectStack = createStackNavigator({
  ConnectHome: { screen: Connect, },
  Connect: { screen: ConnectWith },
  ConnectWithScreen: { screen: MamaProfile },
  ProfileSettingsScreen: { screen: ProfileSettings },
  SettingsScreen: { screen: Settings },
  MeetMamaScreen: { screen: MeetMama },
  ContactUsScreen: { screen: ContactUs }
});

const MessagesStack = createStackNavigator({
  Messages: { screen: MessagesScreen },
  Chat: { screen: ChatScreen },
});

const tabNavigator = createAppContainer(createBottomTabNavigator(
  {
    Profile: { screen: ProfileStack },
    Connect: {
      screen: ConnectStack,
      navigationOptions: {
        tabBarOnPress({ navigation, defaultHandler }) {
          // defaultHandler();
          navigation.navigate('ConnectHome');
        },
      },
    },
    Messages: { screen: MessagesStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        // to navigate to the top of stack whenever tab changes
        defaultHandler();
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Profile') {
          return (<Image source={require("../images/profile-tabIcon.png")} />);
        }
        else if (routeName === 'Connect') {
          return (<Image source={require("../images/connect-tabIcon.png")} />);
        }
        else {
          // return (<Image source={require("../images/Messages-tabIcon.png")} />);
          // return (<IconWithBadge badgeCount={3} imageName={require("../images/Messages-tabIcon.png")} />);
          return (<IconWithBadge imageName={require("../images/Messages-tabIcon.png")} />);
        }
      },
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        return (<Text
          style={[{
            color: '#f5ebe1',
            fontFamily: 'Poppins',
            fontSize: 13,
            letterSpacing: 0.26,
            textAlign: 'center',
          }, focused ? { fontWeight: '600' } : { fontWeight: '400' }]}
        >{routeName}
        </Text>);
      },
    }),
    tabBarOptions: {
      activeTintColor: '#f5ebe1',
      inactiveTintColor: '#f5ebe1',
      showIcon: true,
      activeBackgroundColor: '#d85055',
      labelStyle: {
        color: '#f5ebe1',
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '400',
        letterSpacing: 0.26,
      },
      style: {
        backgroundColor: '#f0696e',
        height: 55,
      },
    },
  }
));

export default tabNavigator;