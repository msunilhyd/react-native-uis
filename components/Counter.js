import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Counter extends React.Component {

  state = {
    count: 0,
  };

  _inc() {
    this.setState(oldState => ({
      count: oldState.count + 1,
    }));
  }

  _dec() {
    this.setState(oldState => ({
      count: oldState.count - 1,
    }));
  }

  render() {
    return (
      <View>
        <Button title={'Minus'} onPress={() => this._dec()}></Button>
        <Text style={styles.display}> 0 </Text>
        <Button title='Plus' onPress={() => this._inc()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  display: {
    margin: 20,
    fontSize: 60,
    fontWeight: 'bold'
  }
})

export default Counter;