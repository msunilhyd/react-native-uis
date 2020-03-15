import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Counter from './components/Counter';
import MyButton from './components/MyButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    fles: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf01',
  },
})