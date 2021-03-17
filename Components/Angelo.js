import React from 'react'
import {View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import {Line, Svg} from 'react-native-svg'

const WIDTH = Dimensions.get("screen").width
const HEIGHT = Dimensions.get("screen").height

class Angelo extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/forest.png")} style={styles.back}>
                <Svg height={HEIGHT} width={WIDTH}>
                        <View style={{marginTop: 20, marginLeft: WIDTH/2}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1={WIDTH / 2 + 10} y1="30" x2="110" y2="100" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 50, marginLeft: 100}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="110" y1="100" x2="290" y2="130" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 10, marginLeft: 280}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="290" y1="130" x2="270" y2="180" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 30, marginLeft: 260}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="110" y1="100" x2="140" y2="230" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 30, marginLeft: 130}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 60, marginLeft: 230}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 30, marginLeft: 70}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 30, marginLeft: 250}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 60, marginLeft: 160}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                    </Svg>
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
        width: 20,
        height: 20
    }
})

export default Angelo