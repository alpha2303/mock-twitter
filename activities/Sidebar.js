import React, { Component } from "react";
import { 
  Image, 
  StatusBar, 
  View, 
  StyleSheet 
} from "react-native";
import { 
  Container, 
  Content, 
  Text, 
  List, 
  Button, 
  ListItem, 
  Header, 
  Footer, 
  Left, 
  Icon, 
  Right,
  StyleProvider 
} from "native-base";

import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';

const routes = [ "Profile", "Lists", "Moments", "Highlights"];
const icons = [ "person", "list", "flash", "tabs" ];

export default class SideBar extends Component {
  render() {
    return(
      <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
        <Content>
          <View style={styles.headerView}>
          <Image source={require("../images/rp_2303.png")} style={styles.headerDp} />
          <View style={styles.viewRow}>
            <Left><Text style={styles.profileName}>Rahul Pavithran</Text></Left>
            <Right><Button transparent><Icon name="ios-arrow-dropdown-outline" /></Button></Right>
          </View>
          <Text style={styles.tag}>@rp_2303</Text>
          <View style={styles.viewRow}><Text style={{fontWeight: 'bold', marginTop: 10}}>690</Text><Text style={{marginTop: 10}}> Following</Text><Text style={{fontWeight: 'bold', marginTop: 10}}>  600</Text><Text style={{marginTop: 10}}> Followers</Text></View>
          </View>
          <View style={styles.listView}>
            <Button transparent><Icon name="ios-contact-outline" style={styles.listFont} /><Text uppercase={false} style={styles.listFont}>Profile</Text></Button>
            <Button transparent><Icon name="ios-paper-outline" style={styles.listFont} /><Text uppercase={false} style={styles.listFont}>Lists</Text></Button>
            <Button transparent><Icon name="ios-flash-outline" style={styles.listFont} /><Text uppercase={false} style={styles.listFont}> Moments</Text></Button>
            <Button transparent><Icon name="ios-images-outline" style={styles.listFont} /><Text uppercase={false} style={{height: 25, fontSize: 20}}>Highlights</Text></Button>            
            </View>
            <Button transparent><Text uppercase={false} style={{height: 30, fontSize: 20}}>Settings and privacy</Text></Button>
            <Button transparent><Text uppercase={false} style={{height: 30, fontSize: 20}}>Help Centre</Text></Button>
        </Content>
        <Footer style={styles.footer}>
          <Left><Icon name="moon" style={styles.leftIcon} /></Left>
          <Right><Icon name="apps" style={styles.leftIcon} /></Right>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  },
  headerView: {
    justifyContent: 'flex-start',
    backgroundColor: 'white', 
    paddingVertical: 20,
    marginHorizontal: 20,    
  },
  headerDp: {
    height: 60,
    width: 60,
    borderRadius: 40,
    borderWidth: 5,
  },
  listView: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  footer: {
    backgroundColor: 'white',
  },
  leftIcon: {
    marginHorizontal: 20,
    color: "#00aced",
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  tag: {
    color: 'gray', 
    marginVertical: -10,
  },
  viewRow: { 
   flexDirection: 'row',

 },
 listFont: {
   fontSize: 20,
 }
})