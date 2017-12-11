import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Body
} from 'native-base';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';


export default class Cards extends Component {
  render() {
    return (
      <Card style={{flexDirection: 'column'}}>
        <CardItem style={{marginVertical: 5}}>
          <Body>
            <View style={{flexDirection: 'row'}}>
              <Image source={require("../images/rp_2303.png")} style={styles.headerDp} />
              <View>
                <Text style={styles.cardItem1}>Rahul Pavithran</Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  headerDp: {
    height: 60,
    width: 60,
    borderRadius: 40,
    borderWidth: 5,
  },
  cardItem1: {
    fontWeight: 'bold',
    color: '#222'
  }
}
)
