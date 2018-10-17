import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isTyping: false,
      text: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Type something..." onChangeText={(text) => this.setState({ isTyping: true, text})} onBlur={() => this.setState({ isTyping: false })} value={this.state.text}/>
        <Text style={styles.text}>{ this.state.isTyping ? 'Typing...' : 'Clear' }</Text>
        <Button style={styles.button} title="Clear input" onPress={() => this.setState({ text: '' })}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    color: 'red',
    width: 200,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'black'
  },
  text: {
    padding: 10,
    fontSize: 22,
    color: 'gray'
  },
  button: {
    width: 100,
    height: 20,
    padding: 20,
    borderColor: 'black'
  }
});
