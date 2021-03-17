import React from 'react'
import {View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'

class Galaxy extends React.Component {


    _goAngelo() {
        this.props.navigation.navigate("Angelo", {})
    }

    _goAliens() {
        this.props.navigation.navigate("Aliens", {})
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/galaxy.png")} style={styles.back}>
                    <TouchableOpacity style={styles.planet} onPress={() => this._goAngelo()}>
                        <Image source={require("../assets/angelo.png")} style={styles.image}/>
                        <Text style={{color: 'white', alignItems: 'center'}}>Angelo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.planet} onPress={() => this._goAliens()}>
                        <Image source={require("../assets/aliens.png")} style={styles.image}/>
                        <Text style={{color: 'white', alignItems: 'center'}}>Aliens</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 50,
        height: 50
    }
})

export default Galaxy