import React from 'react';
import { Notifications } from 'expo';
import Alert from 'react-native';
import {Toast, Root} from 'native-base';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';


const Login = createStackNavigator({ Login: LoginScreen });
const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: Login,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'Login',
});

export default class RootNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: null
    };

  }
  componentWillMount(){
    registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.setState({notification: notification});
    Toast.show({
      text: this.state.notification.data.message,
      buttonText: 'Okay'
    });
  };

  render() {
    return <Root><AppNavigator /></Root>;
  }
}