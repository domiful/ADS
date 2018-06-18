import React from 'react';
import { ScrollView, StyleSheet, View, WebView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { withNavigation } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Text, Body, H3, H1 } from 'native-base';

import { ExpoLinksView } from '@expo/samples';


export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: "Appointments",
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
      <Agenda
      // the list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key kas to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      items={{
        '2018-06-22': [{status: "paid", client:'John Smith'}],
        '2018-06-22': [{status: "paid", client:'Jane Doe'}],
        '2018-06-29': [{status: "pending", client:'Peter Wills'}],
        '2018-06-29': [{status: "completed", client:'Alex Tan'}],
        '2018-06-18': [{status: "pending", client:'Sarah Williams'}],
        '2018-06-18': [{status: "paid", client:'Phil Sims'}],
        '2018-06-18': [{status: "completed", client:'Gordon Levitt'}],
        '2018-06-20': [{status: "pending", client:'Phil Sims'}],
        '2018-06-20': [{status: "paid", client:'Sarah Williams'}],
        '2018-06-13': [{status: "pending", client:'Danielle Jones'}],
        '2018-06-13': [{status: "paid", client:'Peter Wills'}],
        '2018-06-13': [{status: "completed", client:'John Smith'}],
        '2018-06-14': [{status: "pending", client:'Mary Grace'}],
        '2018-06-14': [{status: "paid", client:'Tony Soccer'}],
        '2018-06-14': [{status: "completed", client:'Jane Doe'}],
        '2018-06-16': [{status: "pending", client:'Danielle Jones'}],
        '2018-06-16': [{status: "paid", client:'Peter Wills'}],
        '2018-06-16': [{status: "completed", client:'Sarah Williams'}],
        '2018-07-03': [{status: "pending", client:'Michael Durn'}],
        '2018-07-03': [{status: "paid", client:'Danielle Jones'}],
        '2018-07-03': [{status: "completed", client:'Phil Sims'}],
        '2018-07-06': [{status: "paid", client:'Michael Durn'}],
        '2018-07-06': [{status: "pending", client:'Tom Rollins'}],
        '2018-07-07': [{status: "paid", client:'Tony Soccer'}],
        '2018-07-07': [{status: "pending", client:'Quentin Remo'}],
        '2018-07-09': [{status: "pending", client:'Christian Peel'}],
        '2018-07-09': [{status: "completed", client:'Tony Soccer'}],
        '2018-07-12': [{status: "pending", client:'Tom Rollins'}],
        '2018-07-12': [{status: "completed", client:'Michael Durn'}],
        '2018-07-16': [{status: "pending", client:'Mars Ipan'}],
        '2018-07-19': [{status: "pending", client:'Carl King'}],
    }}
      // callback that gets called when items for a certain month should be loaded (month became visible)
      loadItemsForMonth={(month) => {console.log('trigger items loading')}}
      // callback that fires when the calendar is opened or closed
      onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
      // callback that gets called on day press
      onDayPress={(day)=>{console.log('day pressed')}}
      // callback that gets called when day changes while scrolling agenda list
      onDayChange={(day)=>{console.log('day changed')}}
      // initially selected day
      selected={'2018-06-18'}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2017-01-01'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={'2022-06-30'}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={50}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={50}
      // specify how each item should be rendered in agenda
      renderItem={(item, firstItemInDay) => {return (<Card>
        <CardItem style={item.status === "completed" ? {backgroundColor: 'palegreen'} : (item.status === "pending" ? {backgroundColor: 'khaki'}:{backgroundColor: 'skyblue'})} header>
          <Text>{item.client}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              {item.status === "completed" ? "This order has been closed" : (item.status === "pending" ? "This order has been opened but no payment has been received":"Payment has been received, but job has not yet been completed.")}
            </Text>
          </Body>
        </CardItem>
     </Card>);}}

      // specify how empty date content with no items should be rendered
      renderEmptyDate={() => {return (<Card>
        <CardItem header>
          <Text>Client Name</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              No Description found.
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>Service Requested</Text>
        </CardItem>
     </Card>);}}
      // specify how agenda knob should look like
      renderKnob={() => {return (<View />);}}
      // specify what should be rendered instead of ActivityIndicator
      renderEmptyData = {() => {return (<Card>
        <CardItem header>
        <H3>Today</H3>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              -----------------------
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>No new appointments scheduled for today.</Text>
        </CardItem>
     </Card>);}}
      // specify your item comparison function for increased performance
      rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
      // Hide knob button. Default = false
      hideKnob={true}
      // By default, agenda dates are marked if they have at least one item, but you can override this if needed
      markedDates={{
        '2012-05-16': {selected: true, marked: true},
        '2012-05-17': {marked: true},
        '2012-05-18': {disabled: true}
      }}
      // agenda theme
      theme={{
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
      }}
      // agenda container style
      style={{}}
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
