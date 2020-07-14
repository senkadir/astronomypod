import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default class App extends Component {

  state = {
    loading: true,
    data: {}
  };

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=X9kVgfYjlDhPPfyJ6ZddbhNY4hOw052jIvoCNgU4", {
      method: 'GET'
    })
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          data: responseJson
        })

      })
      .catch(error => {

        this.setState({
          loading: false,
        });

        console.log(error)
      });
  }

  render() {

    if (this.state.loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading today is image</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground source={{ uri: this.state.data.url }} style={styles.image}>
            <Text style={styles.text}>{this.state.data.title}</Text>
          </ImageBackground>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#555659"
  },
  loadingText: {
    color: "#fff",
    textAlign: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#555659",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    bottom: 20,
    left: 10
  }
});