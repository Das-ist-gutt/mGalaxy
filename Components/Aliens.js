import React from 'react'
import {View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'

class Aliens extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/desert.jpg")} style={styles.back}>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    back: {
        flex:1
    },
    planet: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 50,
        height: 50
    }
})

export default Aliens