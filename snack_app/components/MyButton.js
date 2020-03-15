import * as React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

class MyButton extends React.Component {
  render() {  
    let { children, myColor, msg } = this.props;
    return (
      <TouchableOpacity onPress={() => {
        Alert.alert(msg)
      }}>
        <Text style={[styles.btn, {backgroundColor: myColor}]}>
          { children }
        </Text>
      </TouchableOpacity>  
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    fontSize:30
  }
});

export default MyButton;