import React, { Component } from 'react';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Tab,
  Icon,
  Tabs,
  TabHeading,
  Drawer,
  Content,
  Footer,
  FooterTab,
  StyleProvider,
  ScrollableTab
} from 'native-base';

import {
  Image, 
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import Search from './Search';
import Home from './Home';
import Notifications from './Notifications';
import SideBar from './Sidebar';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
import { Actions } from 'react-native-router-flux';

export default class Timeline extends Component {    
  closeDrawer = () => {
    this._drawer._root.close();
  }
  openDrawer = () => {
    this._drawer._root.open();
  }
  searchTab = () => { 
    Actions.Search(); 
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer 
          ref={(ref) => {this._drawer = ref;}} 
          content={<SideBar />}
          panOpenMask={0.1}>
          <Container style={styles.container}>
            <Header style={styles.header} hasTabs>
              <StatusBar 
              backgroundColor="#ddd"
              barStyle="dark-content"
              />
              <Left>
                <Button transparent 
                style={styles.drawerIcon} 
                onPress={this.openDrawer.bind(this)}> 
                  <Image source={require('../images/rp_2303.png')} style={styles.dp} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.homeText}>Home</Text>
              </Body>
              <Right />
            </Header>
            <Tabs
            tabBarUnderlineStyle={{ backgroundColor: '#00aced' }}
            initialPage={0}>
              <Tab 
                heading={ <TabHeading><Icon name="ios-home-outline"/></TabHeading> }
                >
                <Home />
              </Tab>
              <Tab 
                heading={ <tabHeading><Icon name="ios-search-outline" /></tabHeading>} onChangeTab={this.searchTab.bind(this)} >
                <Search />
              </Tab>
              <Tab 
                heading={ <tabHeading><Icon name="ios-notifications-outline" /></tabHeading> } 
                >
                  <Notifications text='notifications'/>
              </Tab>
              <Tab 
                heading={ <tabHeading><Icon name="ios-mail-outline" /></tabHeading> } 
                >
                <Notifications text='messages'/>
              </Tab>
            </Tabs>
          </Container>
        </Drawer>
      </StyleProvider>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
  dp: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 5,
  },
  homeText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 0,
  },
  drawerIcon: {
    margin: 5,
    marginHorizontal: 10,
  },
  footer: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  footerText: {
    fontWeight: 'bold'
  },
});


