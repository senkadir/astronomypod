import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import AppConfig from '../config/AppConfig';

class Home extends Component {

    state = {
        loading: true,
        data: {}
    };

    componentDidMount() {
        fetch(AppConfig.API_ADDRESS, {
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
        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: this.state.data.url }} style={styles.image}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Details', { data: this.state.data }); }} style={styles.touchable}>
                        <Text style={styles.text}>
                            View Details...</Text>
                    </TouchableOpacity >
                </ImageBackground>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#333436"
    },
    loadingText: {
        color: "#fff",
        textAlign: "center"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#333436",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    touchable: {
        position: "absolute",
        bottom: 40,
        left: 10,
        width: "100%",
        height: "100%"
    },
    text: {
        color: "#fff",
        fontSize: 18
    }
});