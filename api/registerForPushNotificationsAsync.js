import { Constants, Permissions, Notifications } from 'expo';
import axios from 'axios';

// Example server, implemented in Rails: https://git.io/vKHKv
const PUSH_ENDPOINT = 'https://expo-push-server.herokuapp.com/tokens';

export default (async function registerForPushNotificationsAsync() {
  // Remote notifications do not work in simulators, only on device
  if (!Constants.isDevice) {
    return;
  }

  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS
  let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  postToken(token);
  // POST the token to our backend so we can use it to send pushes from there
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
      },
    }),
  });
});

export function postToken(token) {
  let url = "https://2F361ADD231B4D6A8EA2319710C97E44.uscom-east-1.oraclecloud.com:443/mobile/platform/storage/collections/token/objects";
  let auth = {
    headers: {
      "Authorization": 'Basic Y2xvdWQuYWRtaW46VHJJY0tZQDJKb25haA==',
      "Oracle-Mobile-Backend-ID": 'fdaaf8b9-6803-4cee-aa69-3bf7604c3fb7',
      'Content-Type': 'application/json'
    }
  };
  
      axios
      .post(url,{token: token}, auth)
      .then(function (response) {
        console.log(reponse);
      }).catch(e => console.log(e));
}
