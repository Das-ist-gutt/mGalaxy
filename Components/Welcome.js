import React from 'react'
import {
    View, StyleSheet, TouchableOpacity,
    Text, ImageBackground, Image
} from 'react-native'

class Welcome extends React.Component {

    _goGalaxy() {
        this.props.navigation.navigate("Galaxy", {})
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/welcome.jpg")} style={styles.back}>
                    <Image source={require("../assets/mugler.png")} style={{width: 250, height: 35}}/>
                    <View style={styles.area}>
                        <Text style={styles.text}>Bienvenue</Text>
                        <TouchableOpacity onPress={() => {this._goGalaxy()}}>
                            <Image source={require("../assets/arrowRight.png")} style={{width: 25, height: 25, marginTop: 15}}/>
                        </TouchableOpacity>
                    </View>
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
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    area: {
        alignItems: 'center',
        marginTop: 30
    },
    text: {
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    }
})

export default Welcome