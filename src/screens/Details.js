import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

class Details extends Component {

    render() {
        const { data } = this.props.route.params;

        console.log("image url:" + data.url);
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Button
                        title="Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <ImageBackground source={{ uri: data.url }} style={styles.image} />
                </View>
                <View style={styles.dateView}>
                    <Text style={styles.date}>{data.date}</Text>
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                <View style={styles.descriptionView}>
                    <ScrollView style={styles.descriptionScroll}>
                        <Text style={styles.description}>
                            {data.explanation}, {data.explanation}
                        </Text>
                    </ScrollView>

                </View>
            </View>
        );
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333436'
    },

    imageView: {
        width: '100%',
        height: '30%'
    },

    image: {
        width: '100%',
        height: '100%'
    },

    dateView: {
        top: 40,
        left: 10
    },

    date: {
        color: '#fff',
        fontSize: 30
    },

    titleView: {
        height: '10%',
        top: 40,
        left: 10
    },

    title: {
        color: '#fff',
        fontSize: 30
    },

    descriptionView: {
        left: 10
    },

    descriptionScroll: {
        height: 450
    },

    description: {
        color: '#fff'
    }
});