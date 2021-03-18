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
                    <Image source={require("../assets/mugler.png")} style={{width: 240, height: 35}}/>
                    <TouchableOpacity style={styles.area} onPress={() => {this._goGalaxy()}}>
                        <Text style={{color: 'white', fontSize: 20}}>Bienvenue</Text>
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
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    area: {
        borderColor: 'white',
        borderRadius: 30,
        borderWidth: 2,
        alignItems: 'center',
        padding: 10,
        marginTop: 30
    }
})

export default Welcome