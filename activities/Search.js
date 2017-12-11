import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, InputGroup, View, Footer, Left, Right, Content, StyleProvider } from 'native-base';
import { Actions } from 'react-native-router-flux';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';

export default class Search extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header searchBar rounded style={{backgroundColor: '#fff'}}>
            <Item style={{flexDirection: 'row'}}>
              <Icon name="arrow-back" style={{color: '#00aced', paddingHorizontal: 10}} onPress={() => {Actions.Timeline();}}/>
              <Input placeholder="Search Twitter" style={{ marginTop: 10 }}/>
            </Item>
          </Header>
          <Content />
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