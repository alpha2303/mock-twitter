import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  Container,
} from 'native-base';

export default class Notifications extends Component<{}> {
  render() {
    return (
      <Container style={styles.text}>
        <Text>No new {this.props.text}!</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
  justifyContent: 'center',
  alignItems: 'center',
  }
});