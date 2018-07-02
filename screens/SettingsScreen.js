import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Card, CardItem, Thumbnail, Button } from 'native-base';
export default class SettingsScreen extends Component {
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
    return (
      <Container>
        <Content>
          <Card>
          <CardItem>
            <Left>
            <Thumbnail large source={{uri: 'http://pitchenginelive.blob.core.windows.net/dev/92965bf3-256c-4e39-ab66-816ed9281310/796be89c-5bf0-4325-aeaa-e625657b084c.jpg'}} />
              <Body>
                <Text>Jim Smith, Account Manager</Text>
                <Text note>#125672</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent success>
                <Icon active name="calendar" />
                <Text>7 Completed Service</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="checkmark" />
                <Text>6 Awaiting Service</Text>
              </Button>
            </Body>
            <Right>
            <Button transparent warning>
              <Icon active name="clock" />
              <Text>2 Pending Payment</Text>
            </Button>
            </Right>
          </CardItem>
        </Card>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="alert" />
              </Left>
              <Body>
                <Text>Push Notifications</Text>
              </Body>
              <Right>
                <Switch value={true} />
              </Right>
            </ListItem>
            
            <ListItem icon onPress={()=>{this.props.navigation.navigate('Login');}}>
              <Left>
                <Icon name="power" />
              </Left>
              <Body>
                <Text>Logout</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
