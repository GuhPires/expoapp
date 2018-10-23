import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arrivingTime: 0,
      leavingTime: 0,
      claculatedTime: 0
    }
  }

  getTime(e){
    e.preventDefault();
    let from = 'arrivingTime';
    if(this.state.arrivingTime){
      from = 'leavingTime';
    }
    this.setState({
      [from]: Date.now()
    }, () => this.calculateTime());
  }

  calculateTime(){
    let diff = (this.state.leavingTime - this.state.arrivingTime);
    console.log('Diff: ', diff);
    let hours = diff / 3600000;
    diff = diff % 3600000;
    console.log('Hours: ', hours, ' Diff: ', diff);
    let minutes = diff / 60000;
    diff = diff % 60000;
    console.log('Minutes: ', minutes, ' Diff: ', diff);
    let seconds = diff / 1000;
    console.log('Seconds: ', seconds, ' Diff: ', diff);
    return ;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Arrived at:</Text>
        <Text style={styles.text}>{new Date(this.state.arrivingTime).toLocaleTimeString()}</Text>
        <Text style={styles.label}>Left at:</Text>
        <Text style={styles.text}>{new Date(this.state.leavingTime).toLocaleTimeString()}</Text>
        <Button title="Get time" onPress={this.getTime.bind(this)} color={'red'} disabled={this.state.leavingTime ? true : false}/>
        <Text style={styles.label}>Time worked:</Text>
        <Text style={styles.text}>{}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    borderWidth: 1,
    textAlign: 'center',
    width: '60%',
    height: 24,
    fontSize: 20
  },
  label: {
    color: 'lightgray'
  }
});
