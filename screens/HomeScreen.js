import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { MonoText } from '../components/StyledText';

const pending = {key:'pending', color: 'blue', selectedDotColor: 'orange'};
const completed = {key:'completed', color: 'blue', selectedDotColor: 'blue'};
const paid = {key:'paid', color: 'blue', selectedDotColor: 'lime'};




export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
    headerStyle: {
      backgroundColor: '#2864B3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <CalendarList
          onDayPress={(day)=>{this.props.navigation.navigate('Events', {
            date: day
          });}}

          markedDates={
            {
              '2018-06-22': {dots: [completed, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-06-29': {dots: [pending, completed], selected: true, selectedColor: 'gainsboro'},
              '2018-06-18': {dots: [pending, completed, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-06-20': {dots: [pending, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-06-13': {dots: [pending, completed, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-06-14': {dots: [pending, completed, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-06-16': {dots: [pending, completed, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-07-03': {dots: [pending, completed, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-07-06': {dots: [pending, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-07-07': {dots: [pending, completed], selected: true, selectedColor: 'gainsboro'},
              '2018-07-09': {dots: [pending, completed], selected: true, selectedColor: 'gainsboro'},
              '2018-07-12': {dots: [pending, completed, paid], selected: true, selectedColor: 'gainsboro'},
              '2018-07-16': {dots: [pending], selected: true, selectedColor: 'gainsboro'},
              '2018-07-19': {dots: [pending], selected: true, selectedColor: 'gainsboro'},
          }}
          markingType={'multi-dot'}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
