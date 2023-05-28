import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.meuIp = this.meuIp.bind(this)
    this.state = {
      data: " "
    }
  }

  async meuIp() {
    this.setState({
      data: "Buscando meu ip..."
    })

    const ip = await fetch("http://httpbin.org/ip")
    const novoip = await ip.json()

    this.setState({
      data: novoip.origin
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.state.data}</Text>
        <Button title="Descobrir IP" onPress={this.meuIp}></Button>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 30
  }
})
