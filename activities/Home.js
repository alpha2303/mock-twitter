import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Body,
  Footer,
  FooterTab,
  Container,
  Button,
  Left,
  Right,
  Fab,
  Icon,
  StyleProvider
} from 'native-base';
import {
  Text, 
  StyleSheet, 
  ScrollView, 
  View,
} from 'react-native';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
import Cards from './Cards';


export default class Home extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Container>
          <ScrollView>
            <Cards />
            <Cards />
          </ScrollView>
          <Fab
            containerStyle={{}}
            style={{backgroundColor: '#00aced'}}
            direction='up'
            position='bottomRight'>
            <Icon name='create' />
          </Fab>
        </Container>
        <Footer>
            <Left style={{flexDirection: 'row', paddingHorizontal: 10,}}>
              <Button active style={styles.footerButton} transparent><Text style={{fontWeight: 'bold', color: '#00aced'}}>All</Text></Button>
              <Button style={styles.footerButton} transparent><Text style={styles.footerText}>Mentions</Text></Button>
            </Left>
            <Right><Icon name='settings' style={{paddingHorizontal: 20, color: "#00aced", }} /></Right>
        </Footer>
      </Container>
    </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  footer : {
    backgroundColor: 'white',
  },
  footerButton : {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  footerText: {
    fontWeight: 'bold'
  }
})