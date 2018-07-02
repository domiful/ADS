import React, { Component } from 'react';
import {Constants} from 'expo';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
  Content, Card, CardItem,

} from 'native-base';

export default class FormLogin extends Component {
    static navigationOptions = {
        title: 'Login',
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
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
      
      <Content>
          <Card>
            <CardItem header>
                <Image
                    style={{width: "100%", height: 75}}
                    source={{uri: 'http://s2.q4cdn.com/222406865/files/design/ClientLogo.png'}}
                />
            </CardItem>
            <CardItem>
              <Body>
              <Form style={{width:'100%'}}>
              <FormItem floatingLabel>
                <Input placeholder='jsmith@ads.com'/>
              </FormItem>
              <FormItem floatingLabel last>
                <Label>*********</Label>
                <Input secureTextEntry={true}/>
              </FormItem>
    
              <Button full primary style={{ paddingBottom: 4, marginTop: 20 }} onPress={()=>{this.props.navigation.navigate('Settings');}}>
                <Text> Login </Text>
              </Button>
            </Form>
              </Body>
            </CardItem>
         </Card>
        </Content>
      
      
        
      </Container>
    );
  }
}