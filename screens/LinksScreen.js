import React from 'react';
import { ScrollView, StyleSheet, View, WebView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat',
    headerStyle: {
      backgroundColor: '#2864B3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  };

  render() {
    let jsCode = `
        alert(document.querySelector('.button-display.close').className);
    `;
   // let yourAlert = 'alert(document.getElementById("web-messenger-container").contentDocument.getElementById("mount").children.length)';
    return (
      <View style={styles.container}>
        <WebView
        source={{uri: "https://ads-gse00014266.uscom-east-1.oraclecloud.com/"}}
        style={{ alignSelf: 'stretch', flex: 1,height: 900, marginTop:-50 }}
        //injectedJavaScript={yourAlert}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
