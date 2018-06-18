import React from 'react';
import { Notifications } from 'expo';
import Alert from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
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
    console.log(notification);
    Alert.alert('t', JSON.stringify(this.state.notification.data))
  };

  render() {
    return <AppNavigator />;
  }
}